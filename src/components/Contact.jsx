import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: console.log(e.target.name.value),
      email: console.log(e.target.email.value),
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xqadyryz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ send JSON
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="py-14 container text-center mx-auto my-[14rem]">
      <h2 className="text-center text-4xl font-sans text-gray-600 my-[6rem]">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xqadyryz"
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          className="w-80 md:w-full p-4 focus:ring-2 my-5 shadow-md rounded-lg bg-green-200"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter Your Email"
          className="w-80 md:w-full p-4 bg-green-200 shadow-md rounded-lg my-5 border"
        />
        <textarea
          name="message"
          required
          className="my-5 w-80 rounded-md md:w-full h-32 p-4 border shadow-md focus:ring-2 outline-none"
          placeholder="Enter Your Message"
        ></textarea>

        <div className="">
          <button
            type="submit"
            className="bg-emerald-500 transition-all duration-500 ease-in-out hover:bg-emerald-700 shadow-md hover:text-gray-100 px-3 py-2 text-white font-semibold rounded-md"
          >
            Send Message
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </section>
  );
};

export default Contact;
