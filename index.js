// Add your code here

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
 
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
 
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

/////////////////////////////////////////////


  
function submitData(userName, userEmail){

  let userData = {
      name: userName,
      email: userEmail
    };
     
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
     
  
    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
          return response.json();
      })
      .then(function(object) {
          document.body.append(object.id)
      })
      .catch(function(error){
          alert("Unauthorized Access")
          document.body.append(error.message);
      })
  }