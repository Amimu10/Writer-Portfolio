// import React from "react";

// const Contact = () => {
//   const contact_info = [
//     { logo: "mail", text: "codeaprogram@gmail.com" },
//     { logo: "logo-whatsapp", text: "123 456 780" },
//     {
//       logo: "location",
//       text: "demo location",
//     },
//   ];
//   return (
//     <section id="contact" className="py-10 px-3 text-white"> 
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//           Contact <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//         <div
//           className="mt-16 flex md:flex-row flex-col
//          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
//         >
//           <form className="flex flex-col flex-1 gap-5">
//             <input type="text" placeholder="Your Name" />
//             <input type="Email" placeholder="Your Email Address" />
//             <textarea placeholder="Your Message" rows={10}></textarea>
//             <button className="btn-primary w-fit">Send Message</button>
//           </form>
//           <div className="flex flex-col  gap-7 ">
//             {contact_info.map((contact, i) => (
//               <div
//                 key={i}
//                 className="flex flex-row  
//                   text-left gap-4 flex-wrap items-center"
//               >
//                 <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
//                   <ion-icon name={contact.logo}></ion-icon>
//                 </div>
//                 <p className="md:text-base text-sm  break-words">
//                   {contact.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;





import React from "react";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactLeft from "./ContactLeft";
import toast from 'react-hot-toast';
import AOS from 'aos';
// import SectionTitle from "../../components/SectionTitle/SectionTitle";
import 'aos/dist/aos.css'; 
AOS.init();
const Contact = () => {


  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (input) => {
    // Regular expression for a valid Gmail address
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
    return gmailRegex.test(input);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate name, email, and message
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid Gmail address');
      return;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Message is required');
      return;
    } else {
      setMessageError(''); 
    }

    // Send email using emailjs 
    emailjs
      .sendForm('service_ivsp792', 'template_v0wtr9k', form.current, 'pOVrWjv0cNWkX3Cm7') 
      .then( 
        (result) => { 
          console.log('Message sent', result.text); 
          toast.success('Message sent successfully!')  
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-[1140px] mx-auto text-white">
    <div
     heading={"Contact Us"}
     subHeading={"We specialize in providing digital solutions tailored to your business needs. From web development to app development, we create cutting-edge products that elevate your online presence. Additionally, clients can hire skilled freelancers for various projects."}
 >

  </div>
 <p className="">
       
     </p>
 <div className="my-14">

   <div data-aos="zoom-out-right" className="grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 px-5 md:gap-5">       
    <div className="col-span-4">  
    <ContactLeft></ContactLeft> 
    </div>
     <div className=" col-span-8">
       <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
         <h4 className="md:text-2xl text-xl font-noto mt-3"><span className="text-primary mr-2">GET IN</span><span className="text-yellow-800 ">TOUCH</span></h4>
         
       </div>
       <form ref={form} onSubmit={sendEmail} className="w-full mx-auto flex flex-col justify-center" noValidate>
         <div className="flex flex-col space-y-5">
           <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 gap-4">
             <div className="w-full md:w-1/2 ">
               <label
                 htmlFor="name"
                 className="block text-light font-semibold text-sm leading-none mb-3 cursor-pointer"
               >
                 Your Name (required)
               </label>
               <input
                 id="name"
                 name="user_name"
                 type="text"
                 placeholder="Enter Your Name"
                 className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-300 border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                 autoComplete="off"
                 spellCheck="false"
                 aria-invalid="false"
                 required
                 value={name}
                 onChange={(e) => setName(e.target.value)}
               />
               <p className="text-red-500 text-xs mt-1">{nameError}</p>
             </div>
             <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
               <label
                 htmlFor="email"
                 className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
               >
                 Your Email (required)
               </label>
               <input
                 id="email"
                 name="user_email"
                 type="email"
                 placeholder="Enter Your Email"
                 className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-300 border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                 autoComplete="off"
                 spellCheck="false"
                 aria-invalid="false"
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <p className="text-red-500 text-xs mt-1">{emailError}</p>
             </div>
           </div>
           <div className="relative">
             <label
               htmlFor="subject"
               className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
             >
               Subject
             </label>
             <input
               id="subject"
               name="subject"
               type="text"
               placeholder="Enter Your Subject"
               className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-300 border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
               autoComplete="off"
               spellCheck="false"
               aria-invalid="false"
            
             />
           </div>
           <div className="relative mb-4">
             <label
               htmlFor="message"
               className="block font-semibold text-sm leading-none mb-3"
             >
               Message
             </label>
             <textarea
               id="message"
               name="message"
               className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 bg-gray-300 border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body text-[#482307] rounded"
               autoComplete="off"
               spellCheck="false"
               rows={4}
               placeholder="Write your message here"
               required
               value={message}
               onChange={(e) => setMessage(e.target.value)}
             ></textarea>
             <p className="text-red-500 text-xs mt-1">{messageError}</p>
           </div>
           <div className="relative">
             <button
               data-variant="flat"
               className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none bg-yellow-800 t-[#extfff] px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:bg-primary hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto rounded"
               type="submit"
             >
               Send Message
             </button>
           </div>
         </div>
       </form>
     </div>
   </div>
</div>
 </div>
  );
};

export default Contact;
