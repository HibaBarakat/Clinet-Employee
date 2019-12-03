let users = [];
let sendMessageHtmlCode =
  "<button type='button' class='btn btn-secondary' data-toggle='modal' data-target='#exampleModal'>Send User Message</button><div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title message-h5' id='exampleModalLabel'>Send User a Message</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div> <div class='modal-body'> <textarea class='textArea-input' id='textarea' rows='3' ></textarea></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'> Close</button><button type='button' class='btn btn-primary'> Send Message </button></div></div></div></div>";
users = getLocalStorage();
console.log(users, "my users");
let string = "";
for (let j = 0; j < users.length; j++) {
  let innerHTML = document.getElementById("userCards").innerHTML;
  string +=
    innerHTML +
    "<div class='col-lg-3 col-lg-6 helloCard'><div class='card'><div class='card-body'><i class='far fa-user img-flud w-50 mb-3 fa-4x'></i></div><h2>" +
    users[j].name +
    "</h2><h5>" +
    users[j].email +
    "</h5><h5>" +
    users[j].phoneNumber +
    "</h5>" +
    sendMessageHtmlCode +
    "</div></div>";
}
document.getElementById("userCards").innerHTML = string;

function getLocalStorage() {
  let localStorageData = JSON.parse(localStorage.getItem("users"));
  if (localStorageData === null) {
    return [];
  } else {
    return localStorageData;
  }
}


function sendUserMessage(name, message) {
    for (var i = 0; i < users.length; i++) {
      if (jsonObj[i].name === name) {
        jsonObj[i].message.push(message);
        return;
      }
    }
  }
