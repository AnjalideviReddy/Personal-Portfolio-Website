import React from "react";
import {useNavigate} from 'react-router-dom';
import './styles.scss';
const Home = () => {
           const navigate=useNavigate();
           
           const handleNavigateToContactMePage=()=>{
              navigate("/contact");
           }
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello I'm Reddy Anjali Devi.
                    <br />
                    Front end Developer

                </h1>

            </div>
            <div className="home__contact__me">
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                  
            </div>
            
        </section>

    )
};
export default Home;
