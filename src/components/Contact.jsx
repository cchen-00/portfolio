import { useState } from "react";
import Input from "./Input";
import SvgImg from "./SvgImg.jsx";
import coffee from "../assets/images/coffee.svg";

const validateEmail = (email) => {
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
    <div id="contact">
      <div className="contact">
        <div class="contact__text">
          <h2>Contact</h2>
          <p>
            Whether you're interested in collaborating on a project, seeking
            insights into my work, or simply want to connect, I'm always happy
            to hear from you. Feel free to reach out via email, social media, or
            leave a message below.
          </p>
        </div>

        <div className="contact__form">
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
        <SvgImg
          src={coffee}
          width="300px"
          alt="Coffee"
          className="contact__img"
        />
      </div>
    </div>
  );
};

export default Contact;
