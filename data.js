const data = {

    //INTRODUCTORY CARD
    introCard: {
      name: "Priya Pal",
      designation: "Software Engineer",
      bio: "A Software Engineer who has developed countless innovative solutions.",
      profileImage: "/path/to/profile.jpg",
      socialLinks: [
        { name: "Dribbble", url: "https://dribbble.com", icon: "fab fa-dribbble" },
        { name: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
        { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram" },
        { name: "Email", url: "mailto:example@gmail.com", icon: "fas fa-envelope" },
      ],
    },

    //HOME PAGE
    homePage: {
      title: "Hello, folks!",
      description:
        "I’m an AI/ML Engineer passionate about solving real-world problems using AI and cutting-edge technologies.",
    },

    //ABOUT PAGE
    aboutPage:{
      title: "About Me",
      description1:
        "I graduated from Smt. Indira Gandhi College Of Engineering and have hands-on experience with Artificial Neural Networks and Research and Development.",
      description2:
        "My work includes projects like the YOLOv8-Based Helmet and Vest Detection System and Fracture Detection Health Network (FDHN), published in IEEE Xplore. I aim to create innovative solutions that address practical challenges and shape the future of technology.",
    },
    
    //SKILLS SECTION
    skillsData : [
      {
        category: "Machine Learning",
        skills: ["Scikit-Learn", "NumPy", "Pandas", "Matplotlib"]
      },
      {
        category: "Deep Learning",
        skills: ["Keras", "CNNs", "RNNs", "YOLO Architecture"]
      },
      {
        category: "Web Development",
        skills: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"]
      }
    ],

    //EXPERIENCE PAGE
    experiencePage : [
      {
        company: "Codify Tech LLP",
        title: "Developer",
        duration: "2 months",
        responsibilities: [
          "Design user interfaces for web and mobile applications.",
          "Develop mobile applications for Android platforms.",
          "Collaborate with developers, designers, and product owners to ensure customer requirements are met.",
          "Proven experience as a Web/App Developer or similar role."
        ],
      },
      {
        company: "Codify Tech LLP",
        title: "Content Writer",
        duration: "3 months",
        responsibilities: [
          "Research industry-related topics (combining online sources, interviews, and studies).",
          "Coordinate with social media and design teams to illustrate articles.",
          "Proven work experience as a Content Writer, Copywriter, or similar role.",
          "Experience doing research using multiple sources.",
        ],
      },
      {
        company: "RAIOT CLUB SIGCE",
        title: "Research Lead",
        duration: "8 months",
        responsibilities: [],
      }
    ],

    //RESEARCH PAPERS PAGE
    researchPapersPage: [
        {
          title: "Fracture Detection Health Network (FDHN): A solution to generate bone fracture insight",
          description:
            "Leveraging the YOLOv8 real-time object detection model, the study focuses on automating and optimizing the bone fracture detection process in X-ray images. The architecture of YOLOv8, with its balanced performance characteristics, plays a key role in this research.",
          date: "Mar 21, 2024",
          link: "https://ieeexplore.ieee.org/document/10469480", 
        },
        {
          title: "YOLOv8-Based Helmet and Vest Detection System for Safety Assessment",
          description:
            "YOLOv8, the cutting-edge object detection model, is designed to excel in high-risk domains like construction and mining. This system ensures safety compliance by detecting helmets and vests with remarkable precision and speed.",
          date: "Oc 17, 2023",
          link: "https://ieeexplore.ieee.org/document/10275958", 
        }
    ],

    //PROJECTS PAGE
    projectsPage:[

    ]
  };
  
  export default data;
  