
const fetchUrl = "http://localhost:3000/users"

function submitData(userName, userEmail){

  let fetchData = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  }


  return fetch(fetchUrl, fetchData)
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    document.body.innerHTML = json.id
  })
  .catch(function(error) {
    console.log(error.message)
    document.body.innerHTML = error.message
  })

};