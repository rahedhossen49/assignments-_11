import React from 'react';

import '../assets/css/styles.css'; // Import the CSS file

const About = () => {
    //Show how Loop works in JSX
    const contactMe = ["01975539231", "https://github.com/rahedhossen49", "contact.rahedhossen49@gmail.com"]
    return (
        <div className="about">
            <h2>About Section</h2>
            <p>This is about me - Rahed Hossen</p>
            <ol>
                {
                    contactMe.map((item)=>{
                        return(<li className='item'>{item}</li>)
                    })
                }
            </ol>
        </div>
    );
};

export default About;