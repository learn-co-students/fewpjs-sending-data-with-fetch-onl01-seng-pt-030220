// Add your code here

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
};



       
//destination URL
//headers for 'content-type' and 'accept' set to 'application/json'
//body with the name and email passed in as arguments to submitData.
//these should be assigned to name and email keys within an object.
//object should be stringified