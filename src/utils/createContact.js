const vCardsJS = require("vcards-js");

export default function createContactCard(firstName, lastName, email, number) {
  var vCard = vCardsJS();

  //set properties
  vCard.firstName = firstName;
  vCard.lastName = lastName;
  vCard.email = email;
  vCard.cellPhone = number;

  return vCard.getFormattedString();
}
