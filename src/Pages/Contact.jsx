import "./Common.css";

function Contact() {
  return (
    <div className="page contact">
      <h2>Contact Us</h2>
      <p>Have questions or want to get in touch? We'd love to hear from you!</p>
    <div className="contact-wrapper">

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Your message..." rows="5" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
