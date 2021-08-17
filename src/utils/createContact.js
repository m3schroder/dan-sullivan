const vCardsJS = require("vcards-js");

export default function createContactCard(
  firstName,
  lastName,
  email,
  number,
  street,
  city,
  state
) {
  var vCard = vCardsJS();

  //set properties
  vCard.firstName = firstName;
  vCard.lastName = lastName;
  vCard.email = email;
  vCard.cellPhone = number;
  vCard.homeAddress.label = "Home Address";
  vCard.homeAddress.street = street;
  vCard.homeAddress.city = city;
  vCard.homeAddress.stateProvince = "Tennessee";

  return vCard.getFormattedString();
}
