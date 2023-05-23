const valid = (name, email, password, confirmPassword) => {
  if (!name || !email || !password || !confirmPassword) {
    return "Please add all fields.";
  }
  if (!validateEmail(email)) {
    return "Invalid emails.";
  }
  if (!validateName(name)) {
    return "Name must contain only letters and spaces.";
  }
  if (name.length < 3) {
    return "Name must be at least 3 characters.";
  }
  if (name.length > 20) {
    return "Name must not be greater than 20 characters.";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }
  if (password.length > 40) {
    return "Password must not be greater than 40 characters.";
  }
  if (password !== confirmPassword) {
    return "Confirm password did not match.";
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateName(name) {
  const re = /^[a-zA-Z\s]{3,}$/;
  return re.test(name);
}

export default valid;
