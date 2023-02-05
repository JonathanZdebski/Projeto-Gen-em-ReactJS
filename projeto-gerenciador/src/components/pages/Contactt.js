import { useState } from "react";
import styles from "../pages/Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/contactt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      // eslint-disable-next-line no-unused-vars
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setMessage("Email enviado!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.Contactt}>
      <div>
        <h1 className={styles.h1}>Contato</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className={styles.message}
          type="description"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className={styles.button} type="handleSubmit">
          <p>Enviar</p>
        </button>

        <div className="setMessage">{message ? <p>{}</p> : null}</div>
      </form>
    </div>
  );
}

export default Contact;
