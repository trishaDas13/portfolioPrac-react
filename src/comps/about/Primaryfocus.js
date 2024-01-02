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
            heading: "Web Design & Development",
            content: "Creating attractive, easy-to-use websites that work well for businesses and individuals online."
        },
        {
            icon: icon3,
            heading: "Web Design & Development",
            content: "Creating attractive, easy-to-use websites that work well for businesses and individuals online."
        },
        {
            icon: icon4,
            heading: "Web Design & Development",
            content: "Creating attractive, easy-to-use websites that work well for businesses and individuals online."
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
                            <img src={item.icon} alt="error" width='50px' height='100px' />
                            <div className="content">
                                <h3>{item.heading}</h3>
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