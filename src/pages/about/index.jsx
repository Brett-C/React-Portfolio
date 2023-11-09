import React from 'react';
import Brett from '../../images/brett.jpeg'

const About = () => {
  return (
    <div className="container pt-4">
      <img src={Brett} alt="Me" className="profile_image"></img>
      <p className='about_me_p'>Hello! My name is Brett, and I am currently the Food and Beverage Team Leader at Target in Hattiesburg, MS. I have been with the company for over 8 years now, and have been in a leadership role for more than 6 years. I am going through the bootcamp programming course through the University of Minnesota to learn some new skills. I enjoy going on adventures with my
        wife whenever we have free time, and visiting new places. The feeling of overcoming challenges is something that always inspires me to be better at everything I do. I hate feeling like I failed at something, so I always pick myself up and try
        again.</p>

    </div>
  );
}

export default About;