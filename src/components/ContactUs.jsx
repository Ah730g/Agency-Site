import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '6944fab0-a755-4275-b960-86da30caa613');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!');
        event.target.reset();
      } else {
        console.log('Error', data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="flex flex-col items-center py-30 gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
      id="contact"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution we craft digital solutions that move your business forward"
      />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full"
        onSubmit={onSubmit}
      >
        <div className="grid sm:grid-cols-2 gap-5 ">
          <div>
            <p className="text-sm font-medium">Your name</p>
            <div className="flex gap-2 items-center border border-gray-300 rounded-xl dark:border-gray-400 p-3 mt-2">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full outline-none text-sm"
                name="name"
                required
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Email id</p>
            <div className="flex items-center border gap-2  border-gray-300 rounded-xl dark:border-gray-400 p-3 mt-2">
              <img src={assets.email_icon} alt="" />
              <input
                type="email"
                placeholder="Enter your name"
                className="w-full outline-none text-sm"
                name="email"
                required
              />
            </div>
          </div>
          <div className="col-span-full">
            <p className="text-sm font-medium">Message</p>
            <textarea
              name="message"
              className="mt-2 resize-none h-55 border border-gray-300 rounded-xl dark:border-gray-400 p-3 w-full outline-none text-sm"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>
        <button
          className="bg-primary px-10 py-3 text-white cursor-pointer flex gap-2 items-center rounded-full mt-3 
        transition-all hover:scale-103 text-sm"
        >
          Submit
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </motion.form>
    </div>
  );
};

export default ContactUs;
