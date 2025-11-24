import type { Content } from '@/types/types';

export const content: Content = {
  pages: [
    { name: "About me", to: "/" },
    { name: "Projects", to: "/projects" },
  ],

  about: {
    heroTitle: "Hi I'm Albin Nilsson!",
    heroText: "Welcome to my portfolio!\nHere you can get to know me a little, follow my developer journey and look at what projects I'm working on!",
    about: [
      {
        title: "About me",
        text: "I am a junior software developer from Örebro, Sweden with a strong foundation in both Java and TypeScript. My main areas of focus include building scalable and responsive applications, with experience in both frontend and backend development.\n\n",
      },
      {
        title: "Technologies",
        text: "Technologies I am proficient in:\n\nFrontend:\n- React\n- React Native (Expo)\n- HTML5, CSS3, Tailwind CSS\n\nBackend:\n- Java (Spring Boot)\n- Node.js\n- Next.js\n\nOther:\n- MySQL\n- MongoDB\n- REST and GraphQL APIs\n- Git and version control\n- Agile development practices\n- Unit testing and debugging\n\nI am passionate about learning new technologies and continuously improving my development skills through hands-on projects and collaboration.",
      },
      {
        title: "Education",
        text: "I graduated as a software developer from Lernia YH in May 2025",
      },
    ],
  },

  projects: {
    heroTitle: "My Projects",
    heroText: "On this page you can see some of the projects I am working on right now or have worked on in the past!",
    projects: [
      {
        title: "Super Planner",
        text: "Super Planner is a project I am currently developing to showcase my skills in React Native (Expo). The app is an all-in-one planning platform that allows users to create and manage various planning items, including Todo lists, calendars, routines, and journals, with potential for more in the future. It is a monolithic application with a Spring Boot backend and a React Native (Expo) frontend.\n\nThe backend uses a MySQL database, GraphQL for API queries, and JWT authentication for secure user access.\nThe frontend leverages Apollo Client with Codegen, enabling full type safety across the frontend and backend, ensuring reliable and predictable GraphQL interactions.",
        frontEnd: ["TypeScript", "React Native (Expo)", "Apollo"],
        backEnd: ["Java", "Spring Boot", "GraphQL", "Spring Security", "Spring Data JPA", "MySql"],
        github: "https://github.com/AlbinNils98/super-planner",
        deployLink: "",
        images: [
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760178323/sp-welcome_dnqelx.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760178321/sp-login_gkytcr.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760178322/sp-register_hangyu.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760178322/sp-main_eazcwf.png"
        ],
      },
      {
        title: "Restaurant Booking Demo",
        text: "Restaurant Booking Demo is a project i built to showcase my skills in React, GraphQL, and TypeScript, while also exploring business models.\nCustomers can easily browse menus and book tables at their chosen restaurants, and staff can manage menus, restaurant information, and table reservations through an admin interface.\n\nThe backend is powered by Node.js, Express, and GraphQL (Yoga), with MongoDB for data storage, JWT cookie authentication, and mailersend API for notifications.\nThe frontend uses React with Apollo Client and Codegen, providing full type safety across the frontend and backend for reliable GraphQL interactions. It also leverages Material UI to create a polished, responsive user interface.\n\nIf you want to try out the admin interface, go to /login and use the following credentials:\n email: albin@example.com\npassword: password\n\nGo ahead and play around with the menus, tables, reservations, and restaurants — I can always reset the data.",
        frontEnd: ["TypeScript", "React", "Material UI", "Apollo"],
        backEnd: ["TypeScript", "Node.js", "Express", "GraphQL", "MongoDB"],
        github: "https://github.com/AlbinNils98/restaurant-booking-demo",
        deployLink: "https://restaurant-booking-demo.vercel.app",
        images: ["https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175826/rbd-main_vve5gx.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175826/rbd-dark_ypmnif.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175827/rbd-menu_jlfblc.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175826/rbd-booking_pzozxe.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175827/rdb-admin_y8diyi.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175825/rbd-admin-menu_qivjcl.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175825/rbd-admin-reserv_pzlwvc.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760175826/rbd-admin-res_yqkzn4.png"

        ],
      },
      {
        title: "Study Timer",
        text: "Study Timer is a simple desktop application i developed during my time as a student to help manage breaks between study sessions. The application is built in Java, with the user interface implemented using JavaFX.",
        frontEnd: ["Java", "JavaFX"],
        backEnd: [],
        github: "https://github.com/AlbinNils98/StudyTimer",
        deployLink: "",
        images: [
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760100993/studyTimer_n2qzqp.png",
        ],
      },
      {
        title: "GameArc",
        text: "GameArc was a fullstack project I worked on as a degree project for my software developer education.\n\nIt is a platform that allows users to search for any game they want, thanks to its integration with the IGDB API. It helps users keep track of, rate, comment on, and archive the games they've played.\nThe application is built with a Spring Boot backend and a React frontend, using a MySQL database to store user data and game activity. User authentication is handled securely through Spring Security, ensuring that only authorized users can access and manage their gaming history. Together, these technologies provide a seamless and secure experience for organizing your personal game archive.\n\nIn addition to developing the application, I also created both the UI design and the system design, giving me hands-on experience in planning and structuring a complete application from both a visual and architectural perspective.",
        frontEnd: ["TypeScript", "React", "Tailwind CSS", "Axios"],
        backEnd: ["Java", "Spring Boot", "IGDB API", "Spring Security", "Spring Data JPA", "MySql"],
        github: "https://github.com/AlbinNils98/GameArc",
        deployLink: "",
        images: [
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760100956/gameArcDiscover_hjitla.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760100955/gameArcAdd_qav9x9.png",
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760100955/gameArcArchive_oqg5ob.png",
        ],
      },
      {
        title: "Portfolio",
        text: "This site!\nI'm currently in the process of building this portfolio site to showcase my work and projects. It's being developed using React and for now it is only a frontend application. The site is still a work in progress, but it reflects my focus on clean, responsive and accessible interfaces, as well as continuous improvement.",
        frontEnd: ["TypeScript", "React", "Tailwind CSS"],
        backEnd: [],
        github: "https://github.com/AlbinNils98/Portfolio",
        deployLink: "",
        images: [
          "https://res.cloudinary.com/dhzhoadhj/image/upload/v1760100980/portfolio_fnbnvs.png",
        ],
      },
    ],
  },
};