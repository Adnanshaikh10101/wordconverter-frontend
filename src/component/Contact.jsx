import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      alert(data.msg);

      // reset form
      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="containera" style={{ padding: "30px" }}>
      <h1>Contact Me</h1>

      <p>
        If you have any questions, suggestions, or feedback about the Word Converter app,
        feel free to reach out!
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Message</label><br />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            style={{ width: "100%", padding: "10px", marginLeft: "1px" }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;