const maskInputPhone = (inputValue: any) => {
  let maskedPhoneValue = inputValue.replace(/[^\d]/g, "");
  maskedPhoneValue = maskedPhoneValue && "(" + maskedPhoneValue;
  if (maskedPhoneValue.length > 3) {
    maskedPhoneValue = [
      maskedPhoneValue.slice(0, 3),
      ") ",
      maskedPhoneValue.slice(3),
    ].join("");
  }
  if (maskedPhoneValue.length > 12) {
    if (maskedPhoneValue.length > 13)
      maskedPhoneValue = [
        maskedPhoneValue.slice(0, 10),
        "-",
        maskedPhoneValue.slice(10),
      ].join("");
    else
      maskedPhoneValue = [
        maskedPhoneValue.slice(0, 9),
        "-",
        maskedPhoneValue.slice(9),
      ].join("");
  }
  if (maskedPhoneValue.length > 15) {
    maskedPhoneValue = maskedPhoneValue.substr(0, 15);
  }
  return maskedPhoneValue;
};

export { maskInputPhone };
