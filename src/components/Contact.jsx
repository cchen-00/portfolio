import { useState } from "react";
import Input from "./Input";

const validateEmail = (email) => {
  // Simple email validation
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value:", email, message);
  };

  return (
    <div id="contact" className="contact">
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          label="Email"
          validation={validateEmail}
          warning="Please enter a valid email."
          type="input"
          required
          onChange={setEmail}
        />
        <Input
          value={message}
          label="Message"
          type="textarea"
          rows={6}
          onChange={setMessage}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
