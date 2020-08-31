function submitData(name, email){

    let formData = {
        name: name,
        email: email
      };

    let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          };
           
         return fetch("http://localhost:3000/users", configObj)
         .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log(object);
            document.body.innerHTML = object.id
          })
          .catch(function(error) {
            alert("Bad things! Ragnarők!");
            // let div = document.createElement('div');
            // div.innerHTML.append(error.message);
            document.body.innerHTML = error.message
            console.log(error.message);
          });

}


// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });