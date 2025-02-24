import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      setErrors({ ...errors, [e.target.name]: "This field is required" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
        {!validateEmail(formData.email) && formData.email && <span className="error">Invalid email</span>}

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}