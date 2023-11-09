import React from 'react';
import Drink from '../../images/martini.jpg';
import Expenses from '../../images/expenses.jpg';
import Password from '../../images/password.jpg';
import Quiz from '../../images/quiz.jpg'
import Todo from '../../images/todo.jpg'
import ReadMe from '../../images/readme.png'
const Portfolio = () => {
  return (
    <section className="project">
        <aside className="title-p">
            <h2 id="Projects">Projects</h2>
        </aside>

        {/* <!-- projects --> */}
        {/* <!-- <div className="test"> --> */}
        <div className="project-container">
            <div className="apps-a">
                <a href="https://capydays.github.io/drinks-for-all/" className="app">
                    {/* <!-- project 1 --> */}
                    <img src={Drink} alt="Martini" className="app_image" />
                    <h3 className='portfolio_h'>Drinks for All!</h3>
                    <p  className='portfolio_p'>This application will let you input any ingredient and it will produce 3 random drinks that use
                        that ingredient. If you aren't sure what ingredient you want to use, you can click on the random
                        button on the second page. The application will also give you a random dad joke on the search
                        results page.</p>
                </a>
                <a href="https://expense-tracker96-1fc2134dee6d.herokuapp.com/profile" class="app">
                    {/* <!-- project 2 --> */}
                    <img src={Expenses} alt="Expenses" className="app_image" />
                    <h3>Expense Tracker</h3>
                    <p className='portfolio_p'>This application will track your expenses after making a budget. To use this application feel free 
                    to make an account, or log in with the email: test@email.com and the password: password123   . This will log into an 
                    acount that was used for testing purposes and shows off all of the functions of the application. 

                    </p>
                </a>
                <a href="https://brett-c.github.io/Password-Generator/" class="app">
                    {/* <!-- project 3 --> */}
                    <img src={Password} alt="Password" className="app_image" />
                    <h3>Password Generator</h3>
                    <p className='portfolio_p'>This application is a basic JavaScript application that will create a random password based on what your
                        selections to the prompts are. Simply hit the Generate Password button and answer the following prompts 
                        that come up at the top of your screen.
                    </p>
                </a>
            </div>
            <div className="apps-b">
                <a href="https://brett-c.github.io/JavaScript-Quiz/" class="app">
                    {/* <!-- project 4 --> */}
                    <img src={Quiz} alt='Quiz' className="app_image" />
                    <h3>JavaScript Quiz</h3>
                    <p className='portfolio_p'>This application is a simple application that will give you 5 questions to answer. For every correct answer you will
                        gain 15 points. For every incorrect question you will not gain any points, but also you will lose 15 seconds off of
                        your time. Better be fast, because you only have 60 seconds to answer your questions.
                    </p>
                </a>
                <a href="https://brett-c.github.io/Daily-Planning-Tool/" class="app">
                    {/* <!-- project 5 --> */}
                    <img src={Todo} alt="To Do" className="app_image" />
                    <h3>Daily Planner</h3>
                    <p className='portfolio_p'>This application is a small daily planner. It uses JavaScript to update the date and time every second, as well as change
                        the time slots based on what time it is. Write down all your ToDos for the day, and save it to your local storage without 
                        fear of it disappearing.
                    </p>
                </a>
                <a href="https://github.com/Brett-C/README-Creator#Installation" class="app">
                    {/* <!-- project 6 --> */}
                    <img src={ReadMe} alt='ReadME' className='app_image' />
                    <h3>README Generator</h3>
                    <p className='portfolio_p'>A simple console application that will create a nice professional README for any project that you work on. Simply just click
                        on the link and clone the repo over to your local system, and run 2 simple commands: npm install (for all packages needed for
                        the application) and node index.js (to start the prompts).
                    </p>
                </a>
            </div>
        </div>
    </section>

  )
};

export default Portfolio;