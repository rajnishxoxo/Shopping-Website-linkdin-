export function validateEmailPasswordName(email, password, name) {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z -]+$/.test(name);

  if (!isNameValid) return "Invalid Name";

  if (!isEmailValid) return "Email Invalid";

  if (!isPasswordValid) return "Password Invalid";
}
