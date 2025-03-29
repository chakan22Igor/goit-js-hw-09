import "../css/styles.css"

const formData ={
    email:"",
    message:"",
}

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
});

const storage_key = "feedback-form-state";

function saveToLocalStorage() {
  localStorage.setItem(storage_key, JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem(storage_key);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    } catch (error) {
      console.error("error:", error);
    }
  }
}

form.addEventListener("input", (event) => {
  if (event.target.name === "email" || event.target.name === "message") {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }
  
  console.log(formData);
  
  localStorage.removeItem(storage_key);
  formData.email = "";
  formData.message = "";
  form.reset();
});

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);    