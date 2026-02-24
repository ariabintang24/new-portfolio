import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "4658a01a-af42-457a-bd58-42fbc9dde7cb");

    const loadingToast = toast.loading("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      id="contact-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Let's Work Togerther"
        desc="Have a project in mind? Let's build something amazing together."
      />
      <div className="w-full max-w-3xl">
        <div
          className="
      bg-white dark:bg-black
      border border-gray-200 dark:border-gray-700
      rounded-2xl
      shadow-md dark:shadow-black/30
      p-6 sm:p-10
    "
        >
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={onSubmit}
            className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
          >
            <div>
              <p className="mb-2 text-sm font-medium">Your name</p>
              <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                <img src={assets.person_icon} alt="" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 text-sm outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Email id </p>
              <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                <img src={assets.email_icon} alt="" />
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                  className="w-full p-3 text-sm outline-none"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-medium">Message </p>
              <textarea
                name="message"
                rows={8}
                placeholder="Enter your message"
                className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-100 transition-all"
            >
              Submit <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
