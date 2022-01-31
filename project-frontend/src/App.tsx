import './App.css';
import './assets/bootstrap-5.1.3-dist/css/bootstrap.css';
import {AddEnrollment} from './components/enroll/AddEnrollment';

  

function App() {
    
  return (
    <div className="App">
      <AddEnrollment participants={[]}></AddEnrollment>
    </div>
  );
}

export default App;
