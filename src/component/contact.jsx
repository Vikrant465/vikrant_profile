// components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaYoutube } from 'react-icons/fa';
import axios from 'axios';


import { useForm } from 'react-hook-form';
import { includes } from 'zod/v4';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
// @ts-ignore
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/mail", data);
      console.log(response);
      setSubmitted(true);
      reset(); // Reset form fields after submission
    } catch (err) {
      console.error(err);
      setError('The email service is currently unavailable, please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 dark:bg-background bg-background-dark text-text">
      <div className="container mx-auto px-4 mb-20">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-text-light text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl font-semibold mb-6 text-text-light text-center">Contact</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.p
              className="text-green-500 text-center text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Thank you for your message! I will get back to you soon.
            </motion.p>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className='text-text'>
                <label htmlFor="name" className="block ">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  id="name"
                  type="text"
                  className="w-full p-3 mt-1 bg-gray-700 border text-white border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Your Name"
                />
                {/* @ts-ignore */}
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-text">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Invalid email format'
                    }
                  })}
                  id="email"
                  type="email"
                  className="w-full p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Your Email"
                />
                {/* @ts-ignore */}
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-text">
                  Subject
                </label>
                <input
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: {
                      value: 10,
                      message: 'Subject must be at least 10 characters'
                    }
                  })}
                  id="subject"
                  type="text"
                  className="w-full p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Subject"
                />
                {/* @ts-ignore */}
                {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-text">
                  Message
                </label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 100,
                      message: 'Message must be at least 100 characters'
                    }
                  })}
                  id="message"
                // @ts-ignore
                  className="w-full p-3 mt-1 bg-gray-700 text-white text-text border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                //   rows="5"
                  placeholder="Your Message"
                ></textarea>
                {/* @ts-ignore */}
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit"
                className="w-full bg-accent bg-gray-700 font-semibold py-3 rounded hover:bg-accent-light transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          )}
        </div>

        
      </div>
    </section>
  );
};

export default Contact;