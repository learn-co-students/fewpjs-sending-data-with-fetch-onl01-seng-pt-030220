// Add your code here
function submitData(userName, email) {
    const userURL = 'http://localhost:3000/users'
    let formData = {
        name: userName,
        email: email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch(userURL, configObj).then(function(response) {
        return response.json()
    }).then(function(object) {
        document.body.innerHTML = object["id"]
    }).catch(function(error) {
        document.body.innerHTML = error.message
    })
}