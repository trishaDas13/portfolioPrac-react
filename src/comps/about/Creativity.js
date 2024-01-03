import React from 'react'
import { nanoid } from 'nanoid'

function Creativity() {
    let creativityArray = [
        {
            icon: (<svg width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fedb71" d="M928 224H780.816L704 96H320l-76.8 128H96c-32 0-96 32-96 95.008V832c0 53.008 48 96 89.328 96H930c42 0 94-44.992 94-94.992V320c0-32-32-96-96-96m32 609.008c0 12.624-20.463 30.288-29.999 31.008H89.521c-7.408-.609-25.52-15.04-25.52-32.016V319.008c0-20.272 27.232-30.496 32-31.008h183.44l76.8-128h313.647l57.12 96.945l17.6 31.055H928c22.56 0 31.68 29.472 32 32zM512.001 320c-123.712 0-224 100.288-224 224s100.288 224 224 224s224-100.288 224-224s-100.288-224-224-224m0 384c-88.224 0-160-71.776-160-160s71.776-160 160-160s160 71.776 160 160s-71.776 160-160 160"/>
                </svg>),
            heading: "Visual Storytelling",
            content: "Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."
        },
        {
            icon: (<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#fedb71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                        <path d="m3.3 7l8.7 5l8.7-5M12 22V12"/>
                    </g>
                </svg>),
            heading: "Digital Content Creation",
            content: "Creatiing dynamic digital content, such as 3D models, graphics or animations."
        }
    ]
  return (
    <div className="primary_focus creativity">
        <h2>Exploring Creativity</h2>
        <div className="primary_focus_cards creativity_cards">
            {
                creativityArray.map((item) => {
                    return(
                        <div key = {nanoid()} className='primary_focus_card creativity_card'>
                            <div className="icon">{item.icon}</div>
                            <div className="content">
                                <h4>{item.heading}</h4>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Creativity;