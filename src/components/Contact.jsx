import { useState } from "react";
import Input from "./baseComponents/Input.jsx";
import Button from "./baseComponents/Button.jsx";
import SvgImg from "./baseComponents/SvgImg.jsx";
import coffee from "../assets/images/coffee.svg";
import SocialMediaIcons from "./SocialMediaIcons.jsx";
import Title from "./baseComponents/Title.jsx";
import thankYouImg from "../assets/images/thank_you.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const showAndHideMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ember",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        showAndHideMessage();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <div>
          <Title text="Contact" size="lg" />
          <p className="contact__text">
            Whether you're interested in collaborating on a project, seeking
            insights into my work, or simply want to connect, I'm always happy
            to hear from you. Feel free to reach out via email, social media, or
            leave a message below.
          </p>
          <div className="contact__links">
            <SocialMediaIcons />
          </div>
        </div>

        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <Input
              value={name}
              label="Name"
              type="input"
              required
              onChange={setName}
            />
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
            <Button type="submit" className="contact__btn">
              Submit
            </Button>
          </form>
        </div>
        <SvgImg
          src={coffee}
          width="300px"
          alt="Coffee"
          className="contact__img"
        />
        <div className="contact__thankYouImg">
          <motion.img
            src={thankYouImg}
            width={300}
            animate={{
              x: showMessage ? 0 : 0,
              y: showMessage ? -240 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
