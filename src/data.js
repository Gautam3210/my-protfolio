import avatar from "./images/profile.png";
import reactImg from "./images/react.js.png";
import nodeImg from "./images/node.js.png";
import mongodbImg from "./images/mongodb.png";
import mysqlImg from "./images/mysql.png";
import reduxImg from "./images/redux.png";
import jsImg from "./images/javascript.png";
import cppImg from "./images/c++.png";
import tailwindImg from "./images/tailwind.png";
import gitImg from "./images/git.png";
import htmlImg from "./images/html.png";
import cssImg from "./images/css.png";
import pythonImg from "./images/python.png";

// Project images
// Use public/ paths for project gallery images so <img src="/..."> works in the browser
const chatterImg0 = "/images/projectsImage/Chatter/img0.png";
const chatterImg1 = "/images/projectsImage/Chatter/img1.png";
const chatterImg2 = "/images/projectsImage/Chatter/img2.png";
const chatterImg3 = "/images/projectsImage/Chatter/img3.png";
const chatterImg4 = "/images/projectsImage/Chatter/img4.png";
const chatterImg5 = "/images/projectsImage/Chatter/img5.png";

const quickkeysImg1 = "/images/projectsImage/QuickKeys/img1.png";
const quickkeysImg2 = "/images/projectsImage/QuickKeys/img2.png";
const quickkeysImg3 = "/images/projectsImage/QuickKeys/img3.png";
const quickkeysImg4 = "/images/projectsImage/QuickKeys/img4.png";
const quickkeysImg5 = "/images/projectsImage/QuickKeys/img5.png";
const quickkeysImg6 = "/images/projectsImage/QuickKeys/img6.png";
const quickkeysImg7 = "/images/projectsImage/QuickKeys/img7.png";
const quickkeysImg8 = "/images/projectsImage/QuickKeys/img8.png";

const yourdocImg1 = "/images/projectsImage/YourDoc/img1.png";
const yourdocImg2 = "/images/projectsImage/YourDoc/img2.png";
const yourdocImg3 = "/images/projectsImage/YourDoc/img3.png";
const yourdocImg4 = "/images/projectsImage/YourDoc/img4.png";
const yourdocImg5 = "/images/projectsImage/YourDoc/img5.png";
const yourdocImg6 = "/images/projectsImage/YourDoc/img6.png";
const yourdocImg7 = "/images/projectsImage/YourDoc/img7.png";
const yourdocImg8 = "/images/projectsImage/YourDoc/img8.png";

// Additional projects in public/
const flightImgs = [
  "/images/projectsImage/Flight-booking/img1.png",
  "/images/projectsImage/Flight-booking/img2.png",
  "/images/projectsImage/Flight-booking/img3.png",
  "/images/projectsImage/Flight-booking/img4.png",
  "/images/projectsImage/Flight-booking/img5.png",
  "/images/projectsImage/Flight-booking/img6.png",
  "/images/projectsImage/Flight-booking/img7.png",
];
const myntraImgs = [
  "/images/projectsImage/Myntra-clone/img1.png",
  "/images/projectsImage/Myntra-clone/img2.png",
];
const realEstateImgs = [
  "/images/projectsImage/Real-estate/img1.png",
  "/images/projectsImage/Real-estate/img2.png",
];
const rockPaperImgs = ["/images/projectsImage/Rock-Paper/img1.png"];
const todoImgs = [
  "/images/projectsImage/To-do-list/img1.png",
  "/images/projectsImage/To-do-list/img2.png",
];

export const profile = {
  name: "Gautam Malviya",
  title: "Full Stack Developer",
  location: "Indore, India",
  bio: "I am a passionate full-stack developer with expertise in JavaScript, React.js, Node.js, MongoDB, and C++. I have built impactful projects such as a Doctor Appointment Application and a Car Rental Application, showcasing my ability to design and develop scalable, user-friendly, and efficient solutions. With a strong interest in web development, system design, and emerging technologies like Next.js, Express.js, and microservices, I strive to create applications that deliver seamless user experiences and solve real-world problems.",
  avatarUrl: avatar,
  resumeUrl: "/resume.docx",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/Gautam3210" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gautam3210" },
  { name: "Instagram", url: "https://instagram.com/Gautam._.3210" },
  { name: "Email", url: "mailto:gmalviya3210@gmail.com" },
];

export const skills = [
  { name: "React.js", image: reactImg, level: 4 },
  { name: "Redux", image: reduxImg, level: 4 },
  { name: "Node.js", image: nodeImg, level: 4 },
  { name: "JavaScript", image: jsImg, level: 5 },
  { name: "MongoDB", image: mongodbImg, level: 4 },
  { name: "MySQL", image: mysqlImg, level: 5 },
  { name: "C++", image: cppImg, level: 5 },
  { name: "Tailwind CSS", image: tailwindImg, level: 4 },
  { name: "HTML", image: htmlImg, level: 4 },
  { name: "CSS", image: cssImg, level: 4 },
  { name: "Python", image: pythonImg, level: 3 },
  { name: "Git", image: gitImg, level: 4 },
];

export const projects = [
  {
    id: "yourdoc",
    title: "YourDoc",
    description:
      "YourDoc is a platform that allows you to book appointments with doctors",
    image: yourdocImg1,
    images: [
      yourdocImg1,
      yourdocImg2,
      yourdocImg3,
      yourdocImg4,
      yourdocImg5,
      yourdocImg6,
      yourdocImg7,
      yourdocImg8,
    ],
    liveUrl: "https://yourdoc-six.vercel.app/",
    githubUrl: "https://github.com/Gautam3210/Doc-app",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB","Razorpay", "Coudinary", "Tailwind"],
    details: `YourDoc is a comprehensive healthcare platform designed to connect patients with doctors for seamless appointment booking. It features secure user authentication, detailed doctor profiles, appointment scheduling, and real-time notifications, ensuring a smooth and reliable experience for both patients and doctors.

    The platform is built with React (frontend), Node.js & Express (backend), and MongoDB (database), providing a robust and scalable architecture. Key highlights include doctor search with advanced filtering, appointment management, responsive design, and an intuitive user interface.
    
    YourDoc simplifies healthcare access by making the process of finding and booking a doctor efficient, secure, and user-friendly.`,
  },
  {
    id: "quickkeys",
    title: "QuickKeys",
    description:
      "QuickKeys is a platform that allows you to rent cars and lists your cars for rental",
    image: quickkeysImg1,
    images: [
      quickkeysImg1,
      quickkeysImg2,
      quickkeysImg3,
      quickkeysImg4,
      quickkeysImg5,
      quickkeysImg6,
      quickkeysImg7,
      quickkeysImg8,
    ],
    liveUrl: "https://quickk-keys.vercel.app/",
    githubUrl: "https://github.com/Gautam3210/QuickkKeys",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB","Razorpay", "ImageKit", "Tailwind"],
    details:`QuickKeys is a modern car rental platform that enables users to rent cars easily or list their own vehicles for rental. It offers a powerful search and filtering system, secure payment processing, and complete car management tools, ensuring a smooth experience for both renters and owners.

The platform is built with React and Redux (frontend), Node.js & Express (backend), and MongoDB (database), delivering a scalable and efficient architecture. Key features include user authentication, car listing management, booking system, and responsive design, all crafted to provide convenience, reliability, and security.

QuickKeys simplifies car rentals by combining ease of use with robust functionality, making it an ideal solution for modern mobility needs.`,
  },
  {
    id: "chatter",
    title: "Chatter",
    description: "Chatter is platform for chatting with your friends",
    image: chatterImg0,
    images: [
      chatterImg0,
      chatterImg1,
      chatterImg2,
      chatterImg3,
      chatterImg4,
      chatterImg5,
    ],
    liveUrl: "https://chatter-app-three.vercel.app",
    githubUrl: "https://github.com/Gautam3210/chatter-app",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB","Bootstap"],
    details: `Chatter is a real-time messaging platform that enables users to chat instantly with friends and create group conversations. It comes with modern features like instant messaging, file sharing, emoji reactions, and user presence indicators, making conversations more engaging and interactive.

    Developed with Vite (for fast development), Tailwind CSS (for modern UI styling), and MongoDB (for data persistence), the platform ensures both performance and scalability. Key functionalities include real-time messaging, secure user authentication, group chat support, and responsive design, delivering a seamless experience across devices.
    
    Chatter is designed to provide fast, reliable, and interactive communication, whether for personal use or group collaboration.`,
  },
  {
    id: "flight-booking",
    title: "Flight Booking",
    description: "Search and book flights with filters and responsive UI.",
    image: flightImgs[0],
    images: flightImgs,
    liveUrl: "",
    githubUrl: "",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    details:
      `BookUrFlights is a full-stack flight booking platform that enables users to search, book, and manage flights effortlessly. It offers a smooth experience with features like secure user authentication, flight search with advanced filters, booking management, and responsive design.

      The application is built with JavaScript, Node.js, Express, and MongoDB on the backend, paired with a modern frontend framework for an intuitive interface. Key highlights include real-time flight availability, booking history tracking, and user-friendly navigation, ensuring convenience and reliability.
      
      BookUrFlights makes air travel planning simple, efficient, and accessible for everyone.`,
  },
  {
    id: "myntra-clone",
    title: "Myntra Clone",
    description: "E-commerce UI clone featuring product grid and cart basics.",
    image: myntraImgs[0],
    images: myntraImgs,
    liveUrl: "",
    githubUrl: "https://github.com/Gautam3210/myntra-clone",
    tags: ["React.js","Redux","Bootstrap"],
    details:
      `The Myntra UI Clone is an e-commerce web application that replicates the core shopping experience of Myntra. It features a product grid for browsing items, a functional shopping cart, and a clean, responsive user interface.

      Built with modern frontend technologies, the project demonstrates skills in UI design, state management, and interactive components, focusing on delivering a smooth and intuitive shopping experience.
      
      This project highlights the fundamentals of e-commerce workflows, making it a solid foundation for building fully functional online stores.`,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Property listings with cards and detail gallery.",
    image: realEstateImgs[0],
    images: realEstateImgs,
    liveUrl: "",
    githubUrl: "",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    details:
      `RealEstateHub is a real estate web application that showcases property listings through interactive cards and detailed image galleries. Users can explore properties with ease, view essential details, and navigate through responsive layouts designed for a smooth browsing experience.

      Built with modern frontend and backend technologies, the platform focuses on clean UI design, intuitive navigation, and structured data handling, making it efficient for both property seekers and sellers.
      
      This project highlights the essentials of a real estate platform, combining functionality with an engaging user experience.`,
  },
  {
    id: "rock-paper",
    title: "Rock Paper Game",
    description: "Simple rock-paper game UI.",
    image: rockPaperImgs[0],
    images: rockPaperImgs,
    liveUrl: "https://gautam3210.github.io/RPS-game/",
    githubUrl: "https://github.com/Gautam3210/RPS-game",
    tags: ["HTML", "CSS", "JavaScript"],
    details: `Rock Paper Scissors is a fun and interactive web-based game where users can play against the computer in real time. The game features instant result display, simple yet engaging UI, and responsive design, making it enjoyable across devices.

    Developed using JavaScript, HTML, and CSS, the project showcases core concepts of game logic, event handling, and dynamic UI updates.
    
    This project demonstrates the ability to create interactive applications while keeping the experience lightweight, responsive, and engaging.`,
  },
  {
    id: "todo-list",
    title: "To Do List",
    description: "Basic todo list interface with add/remove.",
    image: todoImgs[0],
    images: todoImgs,
    liveUrl: "",
    githubUrl: "https://github.com/Gautam3210/to-do-list",
    tags: ["React", "Redux Toolkit"],
    details: `The To-Do List is a simple yet powerful productivity application that helps users organize and manage daily tasks efficiently. It features task creation, deletion, and completion tracking, along with a clean and responsive user interface for ease of use.

    Built with JavaScript, HTML, and CSS (or React, if you used it), the project highlights concepts of state management, event handling, and dynamic rendering, making it both functional and beginner-friendly.
    
    This project reflects the essentials of a task management tool, focusing on usability and productivity.`,
  },
];
