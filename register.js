

document.getElementById('submitButton').addEventListener('click', (e) => {
    //Prevents default form action from happening
    e.preventDefault();

    //Get Previous Items as array
    let previousClients = getLocalStorage()
    
    console.log(previousClients, "Previous Clients")

    //Get Input Values
    let nameValue = document.querySelector('input[type=text]').value;
    let emailValue = document.querySelector('input[type=mail]').value;
    let phoneValue = document.querySelector('input[type=tel]').value;
    validateForm(nameValue,emailValue,phoneValue)


    let clientObject = {
        'name': nameValue,
        'email': emailValue,
        'phoneNumber': phoneValue
    }     

    //add to previous storage array
    previousClients.push(clientObject)


    //store in local storage
    localStorage.setItem('employees', JSON.stringify(previousClients))

})


function getLocalStorage() {
    let localStorageData = JSON.parse(localStorage.getItem('employees'))
    if(localStorageData === null) {
        return []
    } else {
        return localStorageData
    }

    
}

function validateForm(name,mail,phone){
    if (name.value === "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
    } 

}

