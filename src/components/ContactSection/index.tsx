'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { CiLocationOn ,CiMail, CiPhone} from "react-icons/ci";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from 'react-hot-toast';


type contactOption = 'email' | 'address' | 'phone';


interface formvalues {
    name: string,
    email: string,
    subject: string,
    message: string,
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

function ContactSection() {
  const [selectedIcon, setSelectedIcon] = useState<string>();
  const [selectedContactOption, setSelectedContactOption] = useState<contactOption>();
const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  


 async function handleSubmit(values: formvalues, { resetForm }: any) {
  setStatus("sending");

  const res = await fetch("/apis/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values), // send values directly
  });

  if (res.ok) {
    setStatus("success");
    toast.success("Email Sent");
    resetForm();
  } else {
    const error = await res.json();
    toast.error(error.message || "Something went wrong");
    setStatus("error");
  }
}

  return (
    <div id='contact' className='container-wrapper bg-white'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='container shadow-[0px_50px_12px_0px_rgba(0,_0,_0,_0.12)] '
      >
        <div className='p-[40px]'>
            <p className='font-semibold text-[38px] mb-3 text-center'>Contact Me</p>

        <div className="flex flex-col md:flex-row items-start gap-5">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[40%]'
          >

            {/* ADDRESS */}
<motion.div
  whileHover={{ scale: 1.02, x: 5 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    navigator.clipboard.writeText("Dahrm Pura Lahore");
    setSelectedContactOption('address');
  }}
  className={`group relative flex items-center p-[12px] gap-2 rounded-[5px] mt-4 w-[90%] cursor-pointer
    ${selectedContactOption === 'address' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}
>
  <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px]'>
    <CiLocationOn style={{ fontSize: '30px' }} />
  </div>
  <div className="flex-1">
    <p className='text-[14px]'>Address</p>
    <p className='font-medium text-[16px]'>Dahrm Pura Lahore</p>
  </div>

  {/* Tooltip - now works! */}
  <span className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                   pointer-events-none transition-opacity duration-200
                   bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap z-10">
    Click to copy
  </span>
</motion.div>

{/* EMAIL */}
<motion.div
  whileHover={{ scale: 1.02, x: 5 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    navigator.clipboard.writeText("nasarmasood111@gmail.com");
    setSelectedContactOption('email');
  }}
  className={`relative flex items-center p-[12px] gap-2 rounded-[5px] mt-4 w-[90%] cursor-pointer group
    ${selectedContactOption === 'email' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}
>
  <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px]'>
    <CiMail style={{ fontSize: '30px' }} />
  </div>
  <div className="flex-1">
    <p className='text-[14px]'>Email</p>
    <p className='font-medium text-[16px]'>nasarmasood111@gmail.com</p>
  </div>

  <span className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                   pointer-events-none transition-opacity duration-200
                   bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap z-10">
    Click to copy
  </span>
</motion.div>

{/* PHONE */}
<motion.div
  whileHover={{ scale: 1.02, x: 5 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    navigator.clipboard.writeText("+92307-5325854");
    setSelectedContactOption('phone');
  }}
  className={`relative flex items-center p-[12px] gap-2 rounded-[5px] mt-4 w-[90%] cursor-pointer group
    ${selectedContactOption === 'phone' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}
>
  <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px]'>
    <CiPhone style={{ fontSize: '30px' }} />
  </div>
  <div className="flex-1">
    <p className='text-[14px]'>Phone</p>
    <p className='font-medium text-[16px]'>+92307-5325854</p>
  </div>

  <span className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                   pointer-events-none transition-opacity duration-200
                   bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap z-10">
    Click to copy
  </span>
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
            <p className='text-grey-dark text-[18px] mt-4'>
              Send me a message using the form—I’ll get back to you soon.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
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
              
                  <Field
  as="textarea"
  name="message"
                    placeholder="Message*"
  rows={4}                    // optional: control height
  className="w-full border-0 border-b-[1px] border-b-[#E6E8EB]
             focus:border-b-[#A53DFF] focus:outline-none
             placeholder:text-[#697484] placeholder:text-sm 
             py-2 resize-none"     // resize-none is optional (prevents user resize)
/>
                  <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={status=='sending'}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(165, 61, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-[24px] py-[12px] mt-8
                      bg-primary text-white rounded-lg w-[130px] text-center"
                  >
                    {status=='sending' ? "Sending..." : "Submit"}
                  </motion.button>

                </Form>
              )}
            </Formik>
          </motion.div>

        </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
