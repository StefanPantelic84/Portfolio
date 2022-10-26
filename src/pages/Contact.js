import React from "react";
import { useEffect } from "react";
import { CgPhone } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import * as yup from "yup";

const emailSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "Portfolio",
        "template_3os06ks",
        form.current,
        "3Tdm8ToNCMp4TQpdy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  },[]);

  const sendForm = async (event) => {
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      message: event.target[2].value,
    };
    const myValidation = await emailSchema.isValid(formData);
    console.log(myValidation);
  };

  return (
    <div className="contact-container">
      <nav className="contact-title">
        <h1>CONTACT ME</h1>
      </nav>
      <div>
        <section className="contact-wrapper">
          <div className="contact-information">
            <div className="inf">
              <nav className="inf-inline">
                <a href="tel:00381652828678">  
                  <CgPhone style={{ width: "3.5rem" }} />
                  +381/65 28 28 678
                </a>
              </nav>
            </div>
            <div className="inf">
              <nav className="inf-inline">
                <MdOutlineEmail style={{ width: "3.5rem" }} />
                stefanpantelic84@gmail.com
              </nav>
            </div>
            <div className="inf">
              <nav className="inf-inline">
                <MdOutlineLocationOn style={{ width: "3.5rem" }} />
                Belgrade,New Belgrade
              </nav>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <nav className="contact-nav">
              <label>Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name..."
              />
            </nav>
            <nav className="contact-nav">
              <label>Email:</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email..."
              />
            </nav>
            <nav className="contact-nav-msg">
              <label>Message:</label>
              <textarea name="message" placeholder="Enter your message" />
              <input type="submit" onSubmit={sendForm} value="Send" />
            </nav>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
