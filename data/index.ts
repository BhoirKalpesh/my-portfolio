export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [

  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Deep Learning projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start  lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },{
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kidney Disease classification Deep Learning Project",
    des: "Implemented Deep Learning Techniques along with MLflow and DVC for experiment tracking and version control , respectively",
    img: "/k.png",
    iconLists: [],
    link: "https://github.com/BhoirKalpesh/Kidney-Disease-Classification-Deep-Learning-Project",
  },

  {
    id: 2,
    title: "Book Recommender system",
    des: "Book recomendation system using machine learning techniques",
    img: "/book recommendation.png",
    iconLists: [],
    link: "https://github.com/BhoirKalpesh/book_recommender_system",
  },
  {
    id: 3,
    title: "Big Mart Sales Prediction",
    des: "Gathered data from kaggle, conducted data preprocessing, feature engineering, selection and resolved data quality issues like duplicates and missing values",
    img: "/bigmart1.png",
    iconLists: [],
    link: "https://github.com/BhoirKalpesh/Big_Mart_Sales_Prediction",
  },

  {
    id: 4,
    title: "Customer orders forecasting",
    des: "This project challenge focuses on predicting the number of orders (grocery deliveries) at selected warehouses for the next 60 days.",
    img: "/rohlik_forecast.png",
    iconLists: [],
    link: "",
  },
];


export const companies = [
  {
    id: 1,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 2,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 3,
    name: "",
    img: "",
    nameImg: "",
  },

];

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning and CyberSecurity Intern",
    desc: "Implemented models for image classification and real-time object detection,built chatbots using NLP techniques, and done hands-on experience in cyber security tools",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    desc: "Developed and implemented foundational machine learning models for various applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/BhoirKalpesh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/KalpeshBhoir_16",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kalpeshbhoir16",
  },
  {
    id:4,
    img: "/kaggle-icon.svg",
    link: "https://www.kaggle.com/kalpeshbhoir"
  }
];
