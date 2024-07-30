import React, { useRef, useState } from "react";
import module from "./form.module.css";
import Button from "../../UI/Button";
import TuchHeader from "./TuchHeader";
import emailjs from "@emailjs/browser";

function TuchForm() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    emailjs
      .sendForm(
        "service_eqp0fyc",
        "template_91rqcox",
        form.current,
        "7rfdCzGD1Hw3jPXiN"
      )
      .then(
        (result) => {
          alert("seccessfully send", result.text);
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset("");
        },

        (error) => {
          console.error("FAILED...", error.text);
          setErrorMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className={module.form} data-aos="fade-right">
      <TuchHeader title="Contact Us" />
      <form ref={form} onSubmit={sendEmail}>
        <div className={module.form__group}>
          <input
            type="text"
            name="from_name"
            className={module.form__input}
            placeholder="Name"
            required
          />
        </div>
        <div className={module.form__group}>
          <input
            type="email"
            name="from_email"
            className={module.form__input}
            placeholder="Email"
            required
          />
        </div>
        <div className={module.form__group}>
          <input
            type="number"
            name="from_number"
            className={module.form__input}
            placeholder="Number"
          />
        </div>
        <div className={module.form__group}>
          <textarea
            name="message"
            className={module.form__input}
            rows={4}
            placeholder="Message"
            required
          />
        </div>
        <Button type="submit">Submit Now</Button>
        {errorMessage && <p className={module.error}>{errorMessage}</p>}
        {successMessage && <p className={module.success}>{successMessage}</p>}
      </form>
    </div>
  );
}

export default TuchForm;
