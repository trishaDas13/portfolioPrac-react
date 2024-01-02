import React from 'react';
import icon1 from '../../assets/activity1.png'
import icon2 from '../../assets/activity2.png'
import icon3 from '../../assets/activity3.png'
import icon4 from '../../assets/activity4.png'
import { nanoid } from 'nanoid'

const Activities = () => {

    let activityArray = [
        {
            icon: icon1,
            heading: "Investments",
            content:"Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"
        },
        {
            icon: icon2,
            heading: "Music",
            content:"Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"
        },
        {
            icon: icon3,
            heading: "Traveling",
            content:"Exploring new places, learn about different cultures and create lifelong memories."
        },{
            icon: icon4,
            heading: "Photography",
            content:"Capturing precious moments and memories through the lens of a camera."
        }
    ]

  return (
    <div className='activities'>
    <h2>Favorite Activities</h2>
    <div className='activity'>
        {
            activityArray.map((item)=>{
                return(
                    <div className= "activity_card" key={nanoid()}>
                        <img src={item.icon} alt="error" />
                        <h4>{item.heading}</h4>
                        <p>{item.content}</p>
                    </div>
                );
            })
        }
    </div>
    </div>
    
  )
}

export default Activities