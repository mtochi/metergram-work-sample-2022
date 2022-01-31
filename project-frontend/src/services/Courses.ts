
export let GetCourseList  = async () => {
    let res = [] as any;
    console.log('here')
        var createEnrollmentURL = 'http://localhost:3001/courses';
        await fetch(createEnrollmentURL, {
            method: 'get',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            res = result;
            return result;
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
    return res;
}