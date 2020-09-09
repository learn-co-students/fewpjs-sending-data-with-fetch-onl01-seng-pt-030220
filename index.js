// Add your code here

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
    .then(response => response.json())
    .then(response => {
      let node = document.createElement("LI")
      const id = document.createTextNode(response.id)
      node.appendChild(id)
      document.querySelector("body").appendChild(node)
    })
    .catch(function(error) {
      let errormsg = document.createTextNode(error.message)
      document.querySelector("body").appendChild(errormsg)

  });
}

