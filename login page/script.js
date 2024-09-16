const uname = document.getElementById("uname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");

document.getElementById("full").addEventListener("submit", function (e) {
  if (!validatesinputs()) {
    e.preventDefault();
  }
});

function validatesinputs() {
  const nameval = uname.value.trim();
  const emailval = email.value.trim();
  const phoneval = phone.value.trim();
  const passval = pass.value.trim();
  const cpassval = cpass.value.trim();
  let success = true;
  if (nameval === "") {
    success = false;
    seterror(uname, "UserName is Required");
  } else if (nameval > 5) {
    success = false;
    seterror(uname, "UserName is atleast 5 character Required");
  } else {
    setsuccess(uname);
  }
  if (emailval === "") {
    success = false;
    seterror(email, "Email is required");
  } else if (!validateEmail(emailval)) {
    success = false;
    seterror(email, "Please Enter the vaild email");
  } else {
    setsuccess(email);
  }
  if (phoneval === "") {
    success = false;
    seterror(phone, "please Enter the phone Number");
  } else if (phoneval > 10 && phoneval < 10) {
    success = false;
    seterror(phone, "Please Enter the correct Phone Number");
  } else {
    setsuccess(phone);
  }
  if (passval === "") {
    success = false;
    seterror(pass, "Please Enter the phone number");
  } else if (passval.length < 8) {
    success = false;
    seterror(pass, "password must be 8 Characters Long");
  } else {
    setsuccess(pass);
  }
  if (cpassval === "") {
    success = false;
    seterror(cpass, "Please Enter the phone number");
  } else if (cpassval !== passval) {
    success = false;
    seterror(cpass, "PassWord Does Not Match");
  } else {
    setsuccess(cpass);
  }
  return success;
}
function seterror(element, message) {
  const inputgroup = element.parentElement;
  const errorElement = inputgroup.querySelector(".error");
  errorElement.innerText = message;
  inputgroup.classList.add("error");
  inputgroup.classList.remove("success");
}
function setsuccess(element, message) {
  const inputgroup = element.parentElement;
  const errorElement = inputgroup.querySelector(".error");
  errorElement.innerText = "";
  inputgroup.classList.add("success");
  inputgroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};
// const validphonenumber = (phone) => {
//   return Number(phone).match(
//     /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
//   );
// };
