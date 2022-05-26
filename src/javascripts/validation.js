const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
// const showError = (input, message) => {
//   const fromControl = input.parentElement;
//   fromControl.className = 'form-control error';
//   const small = fromControl.querySelector('small');
//   small.innerText = message;
// };
const showError = (input, message) => {
  const fromControl = input.parentElement;
  const small = fromControl.querySelector('small');
  fromControl.classList.add('error');
  small.innerText = message;
};

// show input success message
// const showSuccess = (input) => {
//   const fromControl = input.parentElement;
//   fromControl.className = 'form-control success';
// };
const showSuccess = (input) => {
  const fromControl = input.parentElement;
  fromControl.classList.add('success');
};

// check email is valid
// const checkEmail = (input) => {
//   const re =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Emailis not valid');
//   }
// };

// get field name
// const getFieldName = (input) => {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// };

//  check required fields
// const checkRequired = (inputArr) => {
//   inputArr.forEach((input) => {
//     if (input.value.trim() === '') {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSuccess(input);
//     }
//   });
// };
const inputArr = [username, email, password, password2];
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// check input length
// const checkLength = (input, min, max) => {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getFieldName(input)} must be at least ${min} characters`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFieldName(input)} must be at less than ${max} characters`
//     );
//   } else {
//     showSuccess(input);
//   }
// };

// check passwords match
// const checkPasswordsMatch = (input1, input2) => {
//   if (input1.value !== input2.value) {
//     showError(input2, 'The password does not match.');
//   }
// };

// Event listeners
const validation = form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired(inputArr);
  // checkRequired([username, email, password, password2]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 25);
  // checkEmail(email);
  // checkPasswordsMatch(password, password2);
});

export { validation };
