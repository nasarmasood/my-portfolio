'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { CiLocationOn } from "react-icons/ci";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

type contactOption = 'email' | 'address' | 'phone';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

function ContactSection() {
  const [selectedIcon, setSelectedIcon] = useState<string>();
  const [selectedContactOption, setSelectedContactOption] = useState<contactOption>();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const sendEmail = (values: any, { resetForm }: any) => {
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        to_email: "nasarmasood111@gmail.com",
      },
      "YOUR_PUBLIC_KEY"
    )
      .then(() => {
        alert("Message sent successfully!");
        resetForm();
      })
      .catch((error) => {
        alert("Failed to send message. Error: " + error.text);
      });
  };

  return (
    <div id='contact' className='container-wrapper bg-white'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='container shadow-[0px_50px_12px_0px_rgba(0,_0,_0,_0.12)] '
      >
        <div className="p-[40px] flex flex-col md:flex-row items-center gap-5">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[40%]'
          >
            <p className='font-semibold text-[38px] mb-3'>Contact Me</p>
            <p className='text-[18px] text-grey-dark'>Contact Details</p>

            {/* ADDRESS */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedContactOption('address')}
              className={`flex items-center p-[12px] gap-2 rounded-[5px] mt-4 w-[70%] cursor-pointer
                ${selectedContactOption == 'address' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}
            >
              <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px] '>
                <CiLocationOn style={{ fontSize: '30px' }} />
              </div>
              <div>
                <p className='text-[14px]'>Address</p>
                <p className='font-medium text-[16px]'>Dahrm Pura Lahore</p>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedContactOption('email')}
              className={`flex items-center p-[12px] gap-2 rounded-[5px] mt-4 w-[70%] cursor-pointer
                ${selectedContactOption == 'email' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}
            >
              <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px] '>
                <CiLocationOn style={{ fontSize: '30px' }} />
              </div>
              <div>
                <p className='text-[14px]'>Email</p>
                <p className='font-medium text-[16px]'>nasarmasood111@gmail.com</p>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedContactOption('phone')}
              className={`flex items-center p-[12px] gap-2 rounded-[5px] mt-4 w-[70%] cursor-pointer
                ${selectedContactOption == 'phone' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}
            >
              <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px] '>
                <CiLocationOn style={{ fontSize: '30px' }} />
              </div>
              <div>
                <p className='text-[14px]'>Phone</p>
                <p className='font-medium text-[16px]'>+92307-5325854</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE • CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[60%]"
          >
            <p className='text-grey-dark text-[18px] mt-7'>
              Send me a message using the form—I’ll get back to you soon.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ isSubmitting }) => (
                <Form className='mt-7'>

                  {/* NAME */}
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name*"
                    className="w-full border-0 border-b-[1px] [border-bottom-color:#E6E8EB]
                      focus:[border-bottom-color:#A53DFF] focus:outline-none
                      placeholder:text-[#697484] placeholder:text-sm py-2"
                  />
                  <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />

                  {/* EMAIL */}
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className="w-full border-0 border-b-[1px] [border-bottom-color:#E6E8EB]
                      focus:[border-bottom-color:#A53DFF] focus:outline-none
                      placeholder:text-[#697484] placeholder:text-sm py-2"
                  />
                  <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

                  {/* LOCATION (optional field) */}
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border-0 border-b-[1px] [border-bottom-color:#E6E8EB]
                      focus:[border-bottom-color:#A53DFF] focus:outline-none
                      placeholder:text-[#697484] placeholder:text-sm py-2"
                  />

                  {/* SUBJECT */}
                  <Field
                    name="subject"
                    type="text"
                    placeholder="Subject*"
                    className="w-full border-0 border-b-[1px] [border-bottom-color:#E6E8EB]
                      focus:[border-bottom-color:#A53DFF] focus:outline-none
                      placeholder:text-[#697484] placeholder:text-sm py-2 mt-2"
                  />
                  <ErrorMessage name="subject" component="p" className="text-red-500 text-sm" />

                  {/* MESSAGE */}
                  <Field
                    name="message"
                    type="text"
                    placeholder="Message*"
                    className="w-full border-0 border-b-[1px] [border-bottom-color:#E6E8EB]
                      focus:[border-bottom-color:#A53DFF] focus:outline-none
                      placeholder:text-[#697484] placeholder:text-sm py-2 mt-2"
                  />
                  <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(165, 61, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-[24px] py-[12px] mt-8
                      bg-primary text-white rounded-lg w-[130px] text-center"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </motion.button>

                </Form>
              )}
            </Formik>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
