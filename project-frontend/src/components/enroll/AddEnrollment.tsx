import React from "react";
import "./AddEnrollment.css";
import { GetCourseList } from "./../../services/Courses";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface IMyComponentState {
  participants: [];
}

const initialState = {
  participants: [
    { participant_name: "", participant_email: "", participant_phone: "" },
  ],
  open: false,
  company_name: "",
  company_email: "",
  company_phone: "",
  course_name: "",
  course_date: "",
  course_id: 0,
  listState: [{ id: 0, dates: [], name: "" }],
  data: {
    course: "Cutting trees, the ins and outs",
    dates: [],
  },
};

export class AddEnrollment extends React.Component<IMyComponentState> {
  state = initialState;
  constructor(props) {
    super(props);
    this.handleParticipantsChange = this.handleParticipantsChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleCourseChange(event) {
    this.setState({ data: { dates: [], course: event.target.value } });
    this.setState({ course_name: event.target.value });
  }
  handleDateChange(event) {
    this.setState({ data: { ...this.state.data, dates: event.target.value } });
    this.setState({ course_date: event.target.value });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    window.location.reload();
  };

  addParticipant() {
    this.setState((state) => ({
      participants: [
        ...this.state.participants,
        { participant_name: "", participant_phone: "", participant_email: "" },
      ],
    }));
  }

  createUI() {
    return this.state.participants.map((el, i) => (
      <div key={i}>
        <div className="row">
          <div className="col-12 text-start mb-3">
            <h3 className="mb-3 text-start h5">Participant #{i + 1}</h3>
            <label className="form-label">NAME*</label>
            <input
              type="text"
              className="form-control"
              name="participant_name"
              defaultValue={el.participant_name || ""}
              onChange={this.handleParticipantsChange.bind(this, i)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6 text-start">
            <label className="form-label">PHONE</label>
            <input
              type="text"
              className="form-control"
              name="participant_phone"
              defaultValue={el.participant_phone || ""}
              onChange={this.handleParticipantsChange.bind(this, i)}
            />
          </div>
          <div className="col-6 text-start">
            <label className="form-label">EMAIL</label>
            <input
              type="text"
              className="form-control"
              name="participant_email"
              defaultValue={el.participant_email || ""}
              onChange={this.handleParticipantsChange.bind(this, i)}
            />
          </div>
        </div>
        {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
      </div>
    ));
  }

  handleParticipantsChange(i, e) {
    const { name, value } = e.target;
    let participants = [...this.state.participants];
    participants[i] = { ...participants[i], [name]: value };
    this.setState({ participants: participants }, () =>
      console.log(this.state)
    );
  }

  removeClick(i) {
    let participants = [...this.state.participants];
    participants.splice(i, 1);
    this.setState({ participants });
  }

  handleCompanyNameChange(event) {
    this.setState({ company_name: event.target.value });
  }
  handleCompanyPhoneChange(event) {
    this.setState({ company_phone: event.target.value });
  }
  handleCompanyEmailChange(event) {
    this.setState({ company_email: event.target.value });
  }
  resetState() {
    this.resetState();
  }
  submit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("course_name", this.state.course_name);
    let datestr = new Date(this.state.course_date).toUTCString();
    data.append("date", datestr);
    data.append("company_name", this.state.company_name);
    data.append("company_phone", this.state.company_phone);
    data.append("company_email", this.state.company_email);
    data.append("course_id", "" + this.state.course_id);
    data.append("participants", "" + JSON.stringify(this.state.participants));
    console.log("here");
    var formEntries = Array.from(data.entries());
    console.log("formEntries ", formEntries);
    console.log("state courseName");
    console.log(this.state.course_name);
    return await fetch("http://localhost:3001/enroll", {
      method: "POST",
      mode: "cors",
      body: data,
    }).then((response) => {
      if (response.status === 201) {
        console.log("success");
        this.onOpenModal();
      }
    });
  };

  componentDidMount() {
    GetCourseList().then((res) => {
      this.setState({ listState: res });
      console.log("here2");
      console.log(this.state.listState[0]);
      this.setState({ course_name: this.state.listState[0].name });
      this.setState({ course_date: this.state.listState[0].dates[0] });
      return res;
    });
  }

  render() {
    //the data with which courses names drop down list is filled
    let courses = this.state.listState.map((course) => (
      <option key={course.name} value={course.name}>
        {course.name}
      </option>
    ));
    //the data with which course date drop down list is filled
    let dates2 = this.state.listState
      .find((item) => item.name === this.state.data.course)
      ?.dates.map((dates0) => (
        <option key={dates0} value={dates0}>
          {dates0}
        </option>
      ));

    const { open } = this.state;
    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="row course-div p-5">
            <div className="row">
              <h1 className="mb-3 text-start h3">Course</h1>
            </div>
            <div className="row">
              <div className="col-6 text-start">
                <label className="form-label">NAME*</label>
                <select
                  className="form-select"
                  defaultValue={this.state.data.course}
                  onChange={this.handleCourseChange.bind(this)}
                  name="course_name"
                >
                  {courses}
                </select>
              </div>

              <div className="col-6 text-start">
                <label className="form-label">DATE*</label>
                <select
                  className="form-select"
                  defaultValue={this.state.data.dates}
                  onChange={this.handleDateChange.bind(this)}
                  name="date"
                >
                  {dates2}
                </select>
              </div>
            </div>
          </div>

          <div className="row company-div p-5">
            <div className="row">
              <div className="col-12 text-start mb-3">
                <h1 className="mb-3 text-start h3">Company</h1>
                <label className="form-label">NAME*</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  onChange={this.handleCompanyNameChange.bind(this)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-start">
                <label className="form-label">PHONE*</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_phone"
                  onChange={this.handleCompanyPhoneChange.bind(this)}
                />
              </div>
              <div className="col-6 text-start">
                <label className="form-label">EMAIL*</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_email"
                  onChange={this.handleCompanyEmailChange.bind(this)}
                />
              </div>
            </div>
          </div>

          <div className="row participant-div p-5">
            <h1 className="mb-3 text-start h3">Participants</h1>
            {this.createUI()}
            <div className="text-start">
              <input
                className="btn submit-button mt-3"
                type="button"
                value="Add participant"
                onClick={this.addParticipant.bind(this)}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-grid col-12 mx-auto mb-5 p-5">
                <input
                  className="btn submit-button"
                  type="submit"
                  value="Submit application"
                ></input>
              </div>
            </div>
          </div>
        </form>

        <Modal open={open} onClose={this.onCloseModal}>
          <h4>Success!</h4>
          <p>You have been successfully enrolled.</p>
        </Modal>
      </div>
    );
  }
}
