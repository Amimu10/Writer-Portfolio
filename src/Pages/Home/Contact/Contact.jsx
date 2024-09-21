
// import toast from "react-hot-toast";
// import contactbg from "../../../assets/Contact/cover.jpg"
// import { Parallax } from 'react-parallax';
// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";
// import { TfiEmail } from "react-icons/tfi";
// import { LuPhoneCall } from "react-icons/lu";
// import { TfiLocationPin } from "react-icons/tfi";

// const Contact = () => {

//     const form = useRef();
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [nameError, setNameError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [messageError, setMessageError] = useState("");
  
//     const validateEmail = (input) => {
//       // Regular expression for a valid Gmail address
//       const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
//       return gmailRegex.test(input);
//     };
  
//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       // Validate name, email, and message
//       if (!name.trim()) {
//         setNameError("Name is required");
//         return;
//       } else {
//         setNameError("");
//       }
  
//       if (!email.trim()) {
//         setEmailError("Email is required");
//         return;
//       } else if (!validateEmail(email)) {
//         setEmailError("Please enter a valid Gmail address");
//         return;
//       } else {
//         setEmailError("");
//       }
  
//       if (!message.trim()) {
//         setMessageError("Message is required");
//         return;
//       } else {
//         setMessageError("");
//       }
  
//       // Send email using emailjs
//       emailjs
//         .sendForm(
//           "service_xtr23kq",
//           "template_zwcw4cl",
//           form.current,
//           "3qvhTSby4Lwl7pfSd"
//         )
//         .then(
//           (result) => {
//             console.log("Message sent", result.text);
//             toast.success("Message sent successfully!");
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     };

//     return (
//         <div>
//         <Parallax
//         className=""
//         blur={{ min: -50, max: 50 }}
//         bgImage={contactbg}
//         bgImageAlt="img"
//         strength={-100}
//       >
//         <div className="hero">
//           <div className="hero-content text-neutral-content text-center font-cinzel ">
//             <div className="text-primary mt-52">
//               <h3 className="lg:text-[45px] mdZ:text-[32px] text-[24px] font-semibold ">
//                 CONTACT US
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div style={{ height: "350px" }} />
//       </Parallax>
//       <div className="grid lg:grid-cols-2 mrid-cols-1 gap-28 lg:px-12 px-5 my-24">
//         <div>
//             <h3 className="font-inter lg:text-[42px] md:text-[32px] text-[24px] text-secondary mb-14">Get In Touch</h3>
//             <form ref={form} onSubmit={sendEmail} className="w-full" noValidate>
//             <div className="flex flex-col space-y-5">
//             <div className="relative">
//                 <label
//                   htmlFor="name"
//                   className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
//                 >
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-[#989898] focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
//                   autoComplete="off"
//                   spellCheck="false"
//                   aria-invalid="false"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="relative">
//                 <label
//                   htmlFor="phone"
//                   className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="text"
//                   placeholder="Enter Your Phone Number"
//                   className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-[#989898] focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
//                   autoComplete="off"
//                   spellCheck="false"
//                   aria-invalid="false"
//                   required
//                   value={phone}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="relative">
//                 <label
//                   htmlFor="email"
//                   className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="text"
//                   placeholder="Enter Your Email"
//                   className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-[#989898] focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
//                   autoComplete="off"
//                   spellCheck="false"
//                   aria-invalid="false"
//                   required
//                   value={email}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="relative mb-4">
//                 <label
//                   htmlFor="message"
//                   className="block font-semibold text-sm leading-none mb-3"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 border border-[#989898] focus:shadow focus:outline-none focus:border-heading placeholder-body text-[#482307] rounded"
//                   autoComplete="off"
//                   spellCheck="false"
//                   rows={4}
//                   placeholder="Write your message here"
//                   required
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//                 <p className="text-red-500 text-xs mt-1">{messageError}</p>
//               </div>
//               <div className=" text-left mt-4">
//                 <button
//                   data-variant="flat"
//                   className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body justify-center border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto rounded text-center mb-12 border border-secondary border-1 text-secondary hover:text-white hover:bg-primary hover:border-none"
//                   type="submit"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div>
//            <h3 className="font-inter lg:text-[42px] md:text-[32px] text-[24px] text-secondary mb-14">Talk To Us</h3>
//             <div className="flex items-center gap-6">
//             <div className="rounded-full px-2 py-2 border border-primary w-[40px] h-[40px]">
//             <TfiEmail className="flex items-center justify-center text-[22px]"/>
//             </div>
//              <div>
//               <h5 className="text-neutral lg:text-[24px] text-[18px]">EMAIL</h5>
//               <p className="font-merriweather text-primary lg:text-[18px]">amimulahsan164@gmail.com</p>
//              </div>
//             </div>
//             <div className="flex items-center gap-6 mt-6">
//             <div className="rounded-full px-2 py-2 border border-primary w-[40px] h-[40px]">
//             <LuPhoneCall className="flex items-center justify-center text-[22px]"/>            </div>
//              <div>
//               <h5 className="text-neutral lg:text-[24px] text-[18px]">PHONE NUMBER</h5>
//               <p className="font-merriweather text-primary lg:text-[18px]">+8801935633612</p>
//              </div>
//             </div>
//             <div className="flex items-center gap-6 mt-6">
//             <div className="rounded-full px-2 py-2 border border-primary w-[40px] h-[40px]">
//             <TfiLocationPin  className="flex items-center justify-center text-[22px]"/>
//             </div>
//              <div>
//               <h5 className="text-neutral lg:text-[24px] text-[18px]">ADDRESS</h5>
//               <p className="font-merriweather text-primary lg:text-[18px]">DHAKA, 1000. DHAKA, BANGLADESH</p>
//              </div>
//             </div>
//         </div>
//       </div>
//         </div>
//     );
// };

// export default Contact;


import toast from "react-hot-toast";
import contactbg from "../../../assets/Contact/cover.jpg";
import { Parallax } from 'react-parallax';
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";

const Contact = () => {

    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); // Added phone state
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState(""); // Added phone error state
    const [messageError, setMessageError] = useState("");

    const validateEmail = (input) => {
        // Regular expression for a valid Gmail address
        const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
        return gmailRegex.test(input);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate name, email, phone, and message
        if (!name.trim()) {
            setNameError("Name is required");
            return;
        } else {
            setNameError("");
        }

        if (!email.trim()) {
            setEmailError("Email is required");
            return;
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid Gmail address");
            return;
        } else {
            setEmailError("");
        }

        if (!phone.trim()) {
            setPhoneError("Phone number is required");
            return;
        } else {
            setPhoneError("");
        }

        if (!message.trim()) {
            setMessageError("Message is required");
            return;
        } else {
            setMessageError("");
        }

        // Send email using emailjs
        emailjs
            .sendForm(
                "service_xtr23kq",
                "template_zwcw4cl",
                form.current,
                "3qvhTSby4Lwl7pfSd"
            )
            .then(
                (result) => {
                    console.log("Message sent", result.text);
                    toast.success("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <Parallax
                className=""
                blur={{ min: -50, max: 50 }}
                bgImage={contactbg}
                bgImageAlt="img"
                strength={-100}
            >
                <div className="hero">
                    <div className="hero-content text-neutral-content text-center font-cinzel ">
                        <div className="text-primary mt-52">
                            <h3 className="lg:text-[45px] md:text-[32px] text-[24px] font-semibold ">
                                CONTACT US
                            </h3>
                        </div>
                    </div>
                </div>
                <div style={{ height: "350px" }} />
            </Parallax>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-28 lg:px-12 px-5 my-24">
                <div>
                    <h3 className="font-inter lg:text-[42px] md:text-[32px] text-[24px] text-secondary mb-14">Get In Touch</h3>
                    <form ref={form} onSubmit={sendEmail} className="w-full" noValidate>
                        <div className="flex flex-col space-y-5">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-[#989898] focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                                    autoComplete="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <p className="text-red-500 text-xs mt-1">{nameError}</p>
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="phone"
                                    className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                >
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Enter Your Phone Number"
                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-[#989898] focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                                    autoComplete="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} // Corrected state update
                                />
                                <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-[#989898] focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                                    autoComplete="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p className="text-red-500 text-xs mt-1">{emailError}</p>
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
                                    className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 border border-[#989898] focus:shadow focus:outline-none focus:border-heading placeholder-body text-[#482307] rounded"
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
                            <div className="text-left mt-4">
                                <button
                                    data-variant="flat"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body justify-center border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto rounded text-center mb-12 border border-secondary border-1 text-secondary hover:text-white hover:bg-primary hover:border-none"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 className="font-inter lg:text-[42px] md:text-[32px] text-[24px] text-secondary mb-14">Talk To Us</h3>
                    <div className="flex items-center gap-6">
                        <div className="rounded-full px-2 py-2 border border-primary w-[40px] h-[40px]">
                            <TfiEmail className="flex items-center justify-center text-[22px]" />
                        </div>
                        <div>
                            <h5 className="text-neutral lg:text-[24px] text-[18px]">EMAIL</h5>
                            <p className="font-merriweather text-primary lg:text-[18px]">amimulahsan164@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mt-6">
                        <div className="rounded-full px-2 py-2 border border-primary w-[40px] h-[40px]">
                            <LuPhoneCall className="flex items-center justify-center text-[22px]" />
                        </div>
                        <div>
                            <h5 className="text-neutral lg:text-[24px] text-[18px]">PHONE NUMBER</h5>
                            <p className="font-merriweather text-primary lg:text-[18px]">+8801935633612</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mt-6">
                        <div className="rounded-full px-2 py-2 border border-primary w-[40px] h-[40px]">
                            <TfiLocationPin className="flex items-center justify-center text-[22px]" />
                        </div>
                        <div>
                            <h5 className="text-neutral lg:text-[24px] text-[18px]">ADDRESS</h5>
                            <p className="font-merriweather text-primary lg:text-[18px]">DHAKA, 1000. DHAKA, BANGLADESH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
