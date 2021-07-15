import React from "react";

const MailTo = ({ email, subject, body }) => {
  let params = subject || body ? "?" : "";
  if (params) {
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
  }

  return;
};

export default MailTo;
