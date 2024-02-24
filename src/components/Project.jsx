// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/images/crypto-gurdian.png";
// import project2 from "../assets/images/flickfrenz.png";
// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

// const Project = () => {
//   const projects = [

//     {
//       img: project1,
//       name: "Crypto Gurdian Blog",
//     },

//     {
//       img: project2,
//       name: "Flickfrenzy Blog",
//       live_Demo: "https://flickfrenz.blogspot.com/",
//     },

//     {
//       img: project3,
//       name: "Fifty Billionaire Blog",
//       live_Demo: "https://fiftyblillion.blogspot.com/",
//     },

//     {
//       img: project4,
//       name: "React Nav",
//       github_link:
//         "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
//       live_Demo: "https://reacttailwindnavbar.netlify.app",
//     },

//     {
//       img: project5, 
//       name: "Vue Country",  
//       github_link: "https://github.com/Sridhar-C-25",
//       live_link: "https://vuecountry05.netlify.app",
//     },

//   ];
//   return (
//     <section id="projects" className="py-10 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Projects</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
//       </div>
//       <br />
//       <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
//         <div className="lg:w-2/3 w-full">
//           <Swiper
//             slidesPerview={1.2}
//             spaceBetween={20}
//             breakpoints={{
//               768: {
//                 slidesPerView: 2,
//               },
//             }}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination, Autoplay]}
//           >
//             {projects.map((project_info, i) => (
//               <SwiperSlide key={i}>
//                 <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
//                   <img src={project_info.img} alt="" className="rounded-lg h-[180px] w-full" />
          
//                   <div className="flex mt-3 items-center justify-between">
//                   <h3 className="text-xl my-4">{project_info.name}</h3>
//                     <a
//                       href={project_info.live_link}
//                       target="_blank"
//                       className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="lg:block hidden">
//           <img src={project_person} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/crypto-gurdian.png";
import project2 from "../assets/images/flickfrenz.png";
import project3 from "../assets/images/fiftybillion.png";
import project4 from "../assets/images/Exploring The First Truth Cover.png";
import project5 from "../assets/images/The Honest Barber.png";
import project6 from "../assets/images/The Last Word Cover.png"; // Import project6 image
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Blog- Crypto Gurdian",
      live_link: "http://www.crypto-gurdian.com/",
    },
    {
      img: project2,
      name: "Blog- Flickfrenzy",
      live_link: "https://flickfrenz.blogspot.com/",
    },
    {
      img: project3,
      name: "Blog- Fifty Billionaire",
      live_link: "https://fiftyblillion.blogspot.com/",
    },
    {
      img: project4,
      name: "Ebook- Exploring The First Truth",
      live_link: "https://drive.google.com/file/d/1P5VwxVyyMeHt-N0Ne_tuIFO-3Q4d_4dz/view?usp=sharing",
    },
    {
      img: project5,
      name: "Ebook- The Honest Barber",
      live_link: "https://drive.google.com/file/d/1sSySUUZdM458Gs1kmGMih6aMnA3BrCRl/view?usp=sharing",
    },
    {
      img: project6,
      name: "Ebook- The Last Word",
      live_link: "https://drive.google.com/file/d/1S8Gl-nX6-5P6PQNtw8ZXWXz8bJQ9V1BU/view?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg h-[180px] w-full" />
          
                  <div className="flex mt-3 items-center justify-between">
                    <h3 className="text-md my-4">{project_info.name}</h3>
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
        </div>
      </div>
    </section>
  );
};

export default Project;
