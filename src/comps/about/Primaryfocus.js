import icon1 from '../../assets/primaryFocus1.svg';
import icon2 from '../../assets/primaryFocus2.svg';
import icon3 from '../../assets/primaryFocus3.svg';
import icon4 from '../../assets/primaryFocus4.svg';
import { nanoid } from 'nanoid'


function Primaryfocus() {

    let primaryFocusArray = [
        {
            icon: icon1,
            heading: "Web Design & Development",
            content: "Creating attractive, easy-to-use websites that work well for businesses and individuals online."
        },
        {
            icon: icon2,
            heading: "Mobile Apps & Games",
            content: "Creating and developing engaging mobile apps and games for iOS and Android devices."
        },
        {
            icon: icon3,
            heading: "Development Solutions",
            content: "Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
        },
        {
            icon: icon4,
            heading: "Marketing & SEO",
            content: "Using SEO and marketing strategies to boost online visibility and promote products or services."
        }
    ]
  return (
    <div className="primary_focus">
        <h2>Primary Focus</h2>
        <div className="primary_focus_cards">
            {
                primaryFocusArray.map((item) => {
                    return(
                        <div key = {nanoid()} className='primary_focus_card'>
                            <img src={item.icon} alt="error" width='40px' height='40px' />
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

export default Primaryfocus