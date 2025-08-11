import React from "react";
import { MdEmail } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeadcontent";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="Contact Me" icon={<MdEmail size={40} />} />

      <div className="contact__form-container">
        <form className="contact__form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type your message..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
