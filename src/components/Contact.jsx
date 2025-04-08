import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc/Index";
import { slideIn } from "../utils/motion";


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
    
    setForm({...form, [name]: value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_qamc4s8', 'template_yd3uo5m',
      {
        from_name: form.name,
        to_name: 'Indranooj',
        from_email: form.email,
        to_email: process.env.TO_EMAIL,
        message: form.message
      },
      'R39w2-NW0k7cqXAwh'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert('Something went wrong.');
    })
  };

  return (
    <>
      <div className="mt-12 flex flex-col lg:flex lg:flex-row gap-5 overflow-hidden justify-center">
        <div className="text-center">
          <h3 className={`${styles.sectionHeadText} `}>Get in Touch</h3>
          <p className={`${styles.sectionSubText} pb-6 `}>Let's build something together!</p>
          {/* <img className="hidden lg:block" src="https://images.pexels.com/photos/206901/pexels-photo-206901.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
          </div>
        <motion.div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="w-96 flex-[0.75] p-6 lg:p-8 rounded-3xl"
        >

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 p-4 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium pb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-96 bg-[#1a1a1a] py-4 px-2 placeholder:text-[#a1a1a1] text-white rounded-lg outlined-none border font-medium transition duration-300 hover:border-blue-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium pb-2">Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="w-96 bg-[#1a1a1a] py-4 px-2 placeholder:text-[#a1a1a1] text-white rounded-lg outlined-none border font-medium transition duration-300 hover:border-blue-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium pb-2">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="w-96 bg-[#1a1a1a] py-4 px-2 placeholder:text-[#a1a1a1] text-white rounded-lg outlined-none border font-medium transition duration-300 hover:border-blue-500"
              />
            </label>

            <div className="">
              <button
                type="submit"
                className="bg-white py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-black rounded-xl cursor-pointer hover:bg-[#141414] hover:text-white"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
