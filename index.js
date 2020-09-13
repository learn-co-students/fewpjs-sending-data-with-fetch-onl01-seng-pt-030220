// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    };
    
    let configObj = {
        method: "post",
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

            let element = document.createElement('p');
            element.innerHTML = `${object.id}. ${object.name} - ${object.email}`;
            document.querySelector('body').appendChild(element);
        })
        .catch(function(error) {
            alert("Error Message");
            console.log(error.message);

            let element = document.createElement('p');
            element.innerHTML = error.message;
            document.querySelector('body').appendChild(element);
        });
};