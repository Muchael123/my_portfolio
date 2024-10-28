import React, { useRef, useState } from "react";
import SendEmail from "./SendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const notify = (message: string) => toast.success(message);
  const errNotify = (message: string) => toast.error(message);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate the email
    if (validateEmail(inputEmail)) {
      setEmailError("");
    } else {
      setEmailError("Email is invalid.");
    }
  };

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (loading) return; // Prevent submission if loading
    setLoading(true);

    if (!validateEmail(email) || !name || !message) {
      if (!name) alert("Please enter your name.");
      if (!validateEmail(email)) alert("Please enter a valid email.");
      if (!message) alert("Please enter a message.");
      setLoading(false);
      return;
    }

    if (form.current) {
      try {
        const isSuccess = await SendEmail(name, message, email);
        if (isSuccess) {
          notify("Message sent successfully!");
          form.current.reset();
          setName("");
          setEmail("");
          setMessage("");
        } else {
          errNotify("Failed to send message. Please try again later.");
        }
      } catch (error) {
        errNotify("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-10" id="contact">
      <h2 className="text-2xl font-semibold mb-5">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`bg-gray-200 border ${
            name ? "border-green-500" : "border-yellow-500"
          } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          required
          className={`bg-gray-200 border ${
            emailError
              ? "border-yellow-500"
              : email
              ? "border-green-500"
              : "border-gray-300"
          } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {emailError && <p className="text-yellow-500 text-sm">{emailError}</p>}
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={`bg-gray-200 border ${
            message ? "border-green-500" : "border-yellow-500"
          } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
          rows={5}
        />
        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className={`rounded-lg py-2 transition ${
            loading
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
