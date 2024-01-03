import React from "react";
import image1 from "../../assets/more/more1.jpg";
import image2 from "../../assets/more/more2.jpg";
import image3 from "../../assets/more/more3.png";
import {nanoid} from "nanoid";
import Title from "../title/Title";
import './more.css';


const More = () => {
  let data = [
    {
      img: image1,
      specification1: "Marketing & BizDev",
      specification2: "Content Creator",
      title: "Pigletz",
      description:
        "I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.",
      button1svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539a6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539a6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855c.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5m2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"
          />
        </svg>
      ),
      button1names: "Website",
      button2svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4s4-1.832 4-4s-1.832-4-4-4m0 6c-1.065 0-2-.935-2-2s.935-2 2-2s2 .935 2 2s-.935 2-2 2"
          />
          <path
            fill="#f4d46f"
            d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11z"
          />
        </svg>
      ),
      button2names: "Instagram",
      button3svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8m189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8"
          />
        </svg>
      ),
      button3names: "Youtube",
    },
    {
      img: image2,
      specification1: "Beat Making",
      specification2: "Sound Design",
      title: "Music Production",
      description:
        "Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.",
      button1svg: (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path fill="#f4d46f" d="M4 3v9.4c-.4-.2-.9-.4-1.5-.4c-1.4 0-2.5.9-2.5 2s1.1 2 2.5 2S5 15.1 5 14V6.7l7-2.3v5.1c-.4-.3-.9-.5-1.5-.5C9.1 9 8 9.9 8 11s1.1 2 2.5 2s2.5-.9 2.5-2V0z"/>
</svg>),
      button1names: "Spotify",
      button2svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4s4-1.832 4-4s-1.832-4-4-4m0 6c-1.065 0-2-.935-2-2s.935-2 2-2s2 .935 2 2s-.935 2-2 2"
          />
          <path
            fill="#f4d46f"
            d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11z"
          />
        </svg>
      ),
      button2names: "Instagram",
      button3svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8m189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8"
          />
        </svg>
      ),
      button3names: "Youtube",
    },
    {
      img: image3,
      specification1: "Multimedia Design",
      specification2: "3D Rendering",
      title: "Digital Content Creation",
      description:
        "My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.",
        button1svg: (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f4d46f"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539a6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539a6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855c.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5m2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"
            />
          </svg>
        ),
        button1names: "Website",
      button2svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4s4-1.832 4-4s-1.832-4-4-4m0 6c-1.065 0-2-.935-2-2s.935-2 2-2s2 .935 2 2s-.935 2-2 2"
          />
          <path
            fill="#f4d46f"
            d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11z"
          />
        </svg>
      ),
      button2names: "Instagram",
      button3svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4d46f"
            d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8m189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8"
          />
        </svg>
      ),
      button3names: "Youtube",
    },
  ];
  return (
    <>
    <Title title="Side Projects"/>
        <div className="more">
      {
        data.map((item)=>{
          return(
            
        <div className="more_card" key={nanoid()}>
          <img src={item.img} alt="" width="100%" height="100%"/>
         <div className="content">
         <div className="specification">
            <p>{item.specification1}</p>
            <p>•</p>
            <p>{item.specification2}</p>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
         </div>
          <div className="btns">
            <button>{item.button1svg}{item.button1names}</button>
            <button>{item.button2svg}{item.button2names}</button>
            <button>{item.button3svg}{item.button3names}</button>
          </div>
        </div>
          )
        })
      }
    </div>
    </>

  );
};

export default More;
