import emailjs from "@emailjs/browser";

const SendEmail = async (
  fromName: string,
  message: string,
  Email: string
): Promise<boolean> => {
  console.log("Sending", Email, fromName, message);
  try {
    // Construct the email parameters
    const templateParams = {
      from_name: fromName,
      message: message,
      reply_to: Email,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_PUBLIC_EMAIL_SERVICE_ID,
      import.meta.env.VITE_PUBLIC_EMAIL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_PUBLIC_EMAIL_PUBLIC_KEY
    );

    console.log("Email sent successfully!", response);
    return true; // Return true if email sent successfully
  } catch (err: any) {
    if (err instanceof emailjs.EmailJSResponseStatus) {
      console.error("EmailJS failed...", err);
    } else {
      console.error("An error occurred while sending the email:", err);
    }
    return false; // Return false if there was an error
  }
};

export default SendEmail;
