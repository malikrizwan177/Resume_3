import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_jwe2i7o",
        "template_xywf6xc",
        {
          from_name: form.name,
          to_name: "Muhammad Rizwan Malik",
          from_email: form.email,
          to_email: "malik.rizwan1777@gmail.com",
          message: form.message,
        },
        "xaXiDx6V6nWk2B-td"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Something went wrong! Kindly check your connection and try again"
          );
        }
      );
  };

  return (
    <section>
      <div className="py-10 md:py-20 lg:py-32 lg:px-20 flex flex-col">
        <p className="heading">Contact Me</p>
        <hr />
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10 ">
          <input
            type="text"
            name="name"
            autoComplete="none"
            value={form.value}
            onChange={handleChange}
            placeholder="Name*"
            className="shadow-inner contactinput mbg rounded-lg p-4 focus:outline-none text-white"
          />
          <input
            type="email"
            name="email"
            autoComplete="none"
            value={form.value}
            onChange={handleChange}
            placeholder="Email ID*"
            className="shadow-inner contactinput mbg rounded-lg p-4 focus:outline-none text-white"
          />
          <textarea
            name="message"
            rows="7"
            value={form.value}
            onChange={handleChange}
            placeholder="Message*"
            className="shadow-inner contactinput mbg rounded-lg p-4 focus:outline-none text-white"
          />
          <button className="btn text-white mx-auto" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
