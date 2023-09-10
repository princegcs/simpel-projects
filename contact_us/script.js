
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");


function showSuccessMessage() {
  
  const successMsg = document.createElement("div");
  successMsg.innerText = "Message sent!";
  successMsg.classList.add("success-msg"); 
  
  
  form.appendChild(successMsg);
  
  
  setTimeout(() => {
    successMsg.remove();
  }, 3000);
}


function validateForm() {
  
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  
  if (nameValue === "" || emailValue === "" || subjectValue === "" || messageValue === "") {
    alert("Please fill in all fields.");
    return false;
  }

  
  const regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(emailValue)) {
    alert("Please provide a valid email address.");
    return false;
  }

  
  showSuccessMessage();
  form.reset();

  return true;
}


form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  
  if (validateForm()) {
    
    console.log({
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    });
  }
});
