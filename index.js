const cardValidator = creditcard => {
  let multiply = 0,
    odd = 0,
    even = 0;

  const CREDITCARD_STRING = `${creditcard}`;

  if (CREDITCARD_STRING.length !== 16) {
    return false;
  }

  [...CREDITCARD_STRING].forEach((value, index) => {
    if (index % 2 === 0) {
      multiply = value * 2;

      if (multiply >= 10) {
        even += parseInt(`${multiply}`[0]) + parseInt(`${multiply}`[1]);
      } else {
        even += multiply;
      }
    } else {
      odd += value * 1;
    }
  });

  if ((odd + even) % 10 === 0 && odd !== 0) {
    return true;
  } else {
    return false;
  }
};

module.exports.cardValidator = cardValidator;