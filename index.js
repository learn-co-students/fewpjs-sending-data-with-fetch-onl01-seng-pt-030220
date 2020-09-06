// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
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
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        const body = document.querySelector("body")
        const pTag = document.createElement("p")
        pTag.innerHTML = object["id"]
        body.appendChild(pTag)
    })
    .catch(function(error) {
        const body = document.querySelector("body")
        const pTag = document.createElement("p")
        pTag.innerHTML = error["message"]
        body.appendChild(pTag)
    })
}