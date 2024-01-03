import React from 'react'
import './about.css'
import skill1 from '../../assets/skill/skill1.png';
import skill2 from '../../assets/skill/skill2.png';
import skill3 from '../../assets/skill/skill3.png';
import skill4 from '../../assets/skill/skill4.png';
import skill5 from '../../assets/skill/skill5.png';
import skill6 from '../../assets/skill/skill6.png';
import skill7 from '../../assets/skill/skill7.png';
import skill8 from '../../assets/skill/skill8.png';
import skill9 from '../../assets/skill/skill9.png';
import skill10 from '../../assets/skill/skill10.png';
import skill11 from '../../assets/skill/skill11.png';
import skill12 from '../../assets/skill/skill12.png';
import skill13 from '../../assets/skill/skill13.png';
import skill14 from '../../assets/skill/skill14.png';
import skill15 from '../../assets/skill/skill15.png';
import skill16 from '../../assets/skill/skill16.png';
import skill17 from '../../assets/skill/skill17.png';
import skill18 from '../../assets/skill/skill18.png';

const Skills = () => {

    let imageArray = [
        skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18
    ]

  return (
    <div className="Skills">
        <h2>Development Skills</h2>
        <div className="image_container">
            {
                imageArray.map((image,i) =>{
                    return(
                        <img src={image} alt="error" key={i}/>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Skills