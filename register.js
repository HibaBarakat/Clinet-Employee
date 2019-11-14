//Get Input Values
let name = document.querySelector("input[type=text]");
let email = document.querySelector("input[type=mail]");
let phone = document.querySelector("input[type=tel]");

let isValid = false;
name.addEventListener("input", function(evt) {
  isValid = validate("name", name);
});

email.addEventListener("input", function(evt) {
    isValid = validate("email", email);
});

phone.addEventListener("input", function(evt) {
    isValid = validate("phone", phone);
});


document.getElementById("submitButton").addEventListener("click", e => {
  //Prevents default form action from happening
  e.preventDefault();

  //Get Previous Items as array
  let previousClients = getLocalStorage();

  // Modify Phone Number to be 10 digits starting with (0)

  if (isValid === true){
  let modifiedPhone = modifyPhoneNumber(phone.value);

  let clientObject = {
    name: name.value,
    email: email.value,
    phoneNumber: modifiedPhone
  };

  //add to previous storage array
  previousClients.push(clientObject);
  //store in local storage
  localStorage.setItem("employees", JSON.stringify(previousClients));

}
});

function getLocalStorage() {
  let localStorageData = JSON.parse(localStorage.getItem("employees"));
  if (localStorageData === null) {
    return [];
  } else {
    return localStorageData;
  }
}

function addUserInformationToLocalStorage(name, email, phone) {}

function modifyPhoneNumber(phone) {
  let modifiedPhone = "0" + phone.substr(phone.length - 9); // => "Last 9 numbers"
  return modifiedPhone;
}


function validate(key, item) {
    document.getElementById(`error-${key}`).style.fontSize = "small";
    document.getElementById(`error-${key}`).style.fontWeight = "bold";
  
    if (item.value === "") {
      document.getElementById(
        `error-${key}`
      ).textContent = `${key} is required`.toUpperCase();
      document.getElementById(`error-${key}`).style.color = "red";
      return false;
    } else {
      document.getElementById(`error-${key}`).textContent = "";
    }
  
    switch (key) {
      case "name":
        if (item.value.length <= 3) {
          document.getElementById("error-name").textContent =
            "Name Must be more than 3 characters";
          document.getElementById("error-name").style.color = "red";
          return false;
        } else {
          document.getElementById("error-name").textContent = "";
        }
        break;
  
      case "email":
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(item.value)) {
          document.getElementById("error-email").textContent = "Invalid E-Mail";
          document.getElementById("error-email").style.color = "red";
          return false;
        } else {
          document.getElementById("error-email").textContent = "";
        }
        break;
  
      case "phone":
        if (/^\d+$/.test(phone)) {
          document.getElementById("error-phone").textContent = "Invalid Phone";
          document.getElementById("error-phone").style.color = "red";
          return false;
        } else {
          document.getElementById("error-email").textContent = "";
        }
        break;
  
      default:
        document.getElementById("error-email").textContent = "";
        return true;
    }
  }
  