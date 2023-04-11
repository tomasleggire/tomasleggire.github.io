import { useState } from "react";
import imageOne from '../icons/slider-icons/computadora.png';
import imageTwo from '../icons/slider-icons/engranaje.png';
import imageThree from '../icons/slider-icons/engranaje-framework.png';
import imageFour from '../icons/slider-icons/internet.png';
import imageFive from '../icons/slider-icons/presentacion.png';
import imageSix from '../icons/slider-icons/frasco.png';

import imagenUno from "../images/imagesPortfolio/itemPort1.png";
import imagenDos from "../images/imagesPortfolio/itemPort2.png";
import imagenTres from "../images/imagesPortfolio/itemPort3.png";
import imagenCuatro from "../images/imagesPortfolio/itemPort4.png";

import imagenModalUno from "../images/imagesModalPortfolio/item1.PNG";
import imagenModalDos from "../images/imagesModalPortfolio/item2.PNG";
import imagenModalTres from "../images/imagesModalPortfolio/item3.PNG";
import imagenModalCuatro from "../images/imagesModalPortfolio/item4.PNG";

const useInitialState = () => {
  const optionsState = [
    {
      image: imageOne,
      text: "A responsive design makes your website accessible to all users, regardless of their device",
      title: "MOBILE-FRIENDLY",
    },
    {
      image: imageTwo,
      text: "Proficiency in the core web technologies of HTML, CSS, and JavaScript",
      title: "PROFICIENCY",
    },
    {
      image: imageThree,
      text: "Experience with React and ability to use it to build complex web applications",
      title: "FRONT-END FRAMEWORKS",
    },
    {
      image: imageFour,
      text: "Web accessibility and ability to design and develop websites for everyone",
      title: "WEB ACCESSIBILITY",
    },
    {
      image: imageFive,
      text: "Experience with version control systems like Git for managing and collaborating on projects",
      title: "VERSION CONTROL",
    },
    {
      image: imageSix,
      text: "Ability to write unit tests for code and use testing frameworks to ensure code quality",
      title: "TESTING",
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      image: imagenUno,
      title: "C.R.U.D",
      text: "Web design/development",
      modal: {
        image: imagenModalUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 2,
      image: imagenDos,
      title: "Weather React App",
      text: "Web design/development",
      modal: {
        image: imagenModalDos,
        title: "Weather React App",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 3,
      image: imagenTres,
      title: "Ecommerce Product Page",
      text: "Web design/development",
      modal: {
        image: imagenModalTres,
        title: "Ecommerce Product Page",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 4,
      image: imagenCuatro,
      title: "Interactive Card Form",
      text: "Web design/development",
      modal: {
        image: imagenModalCuatro,
        title: "Interactive Card Form",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 5,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 6,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 7,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 8,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 9,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 10,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 11,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
    {
      id: 12,
      image: imagenUno,
      title: "Mobile First",
      text: "Web design/development",
      modal: {
        image: imagenUno,
        title: "C.R.U.D",
        text: "Web design/development",
        parrafe:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
      },
    },
  ];

  const [mainItemModalPort, setMainItemModalPort] = useState({
    image: imagenModalDos,
    title: "C.R.U.D",
    text: "Web design/development",
    parrafe:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi facere recusandae qui aliquid molestiae reiciendis adipisci deleniti maiores, hic eos fugit amet veritatis ab possimus, tempora ex eaque nostrum.",
  });

  const changeMainModalItem = (id) => {
    const indexItem = portfolioItems.findIndex((item) => item.id === id);
    const newMainItem = {
      ...portfolioItems[indexItem].modal
    };
    setMainItemModalPort(newMainItem);
  };

  return {
    optionsState,
    portfolioItems,
    mainItemModalPort,
    setMainItemModalPort,
    changeMainModalItem,
  };
};
export default useInitialState;
