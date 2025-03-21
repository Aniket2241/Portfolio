import React, { useState } from "react";
import { FaSmile } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", feedback: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.feedback) {
      toast.warn("Please fill out all fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    emailjs
      .send(
        "service_0y8cmhp", 
        "template_yxyojq4", 
        {
          name: formData.name,
          message: formData.feedback,
        },
        "8g_6DWPlCx7Y2eV8J"
      )
      .then(
        () => {
          toast.success("Thank you for your feedback!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setFormData({ name: "", feedback: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Something went wrong. Please try again!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <footer className="bg-black py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 opacity-10 blur-3xl"></div>
      <hr className="border border-gray-600 mx-5" />

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl text-gray-200 text-center font-bold">
          Leave a <span className="text-red-500">Feedback</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-10">
          <form
            className="w-full md:w-[45%] bg-gray-800 bg-opacity-90 shadow-lg backdrop-blur-md border border-gray-700 p-6 rounded-lg flex flex-col gap-6 text-white"
            onSubmit={sendEmail}
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Name</label>
              <input
                className="bg-gray-700 p-3 rounded-md w-full border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Feedback</label>
              <textarea
                name="feedback"
                placeholder="Write a feedback..."
                className="bg-gray-700 border border-gray-600 rounded-md p-3 text-blue-300 w-full resize-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all"
                rows="4"
                value={formData.feedback}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-blue-500 text-white font-bold px-6 py-3 rounded-md border border-gray-700 shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              Submit Feedback
            </button>
          </form>

          <div className="w-full md:w-[45%] flex justify-center md:justify-end">
            <div className="relative text-center">
              <FaSmile className="text-[20vw] md:text-[10vw] text-yellow-400 drop-shadow-lg" />
              <h1 className="text-4xl text-gray-300 opacity-90 mt-4 font-mono">
                &lt;Keep Coding/&gt;
              </h1>
            </div>
          </div>
        </div>
      </div>

      
      <ToastContainer />
    </footer>
  );
}
