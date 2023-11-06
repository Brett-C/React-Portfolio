import React from 'react';


const Portfolio = () => {
  return (
    <section class="project">
        <aside class="title-p">
            <h2 id="Projects">Projects</h2>
        </aside>

        {/* <!-- projects --> */}
        {/* <!-- <div class="test"> --> */}
        <div class="project-container">
            <div class="apps-a">
                <a href="https://capydays.github.io/drinks-for-all/" class="app">
                    {/* <!-- project 1 --> */}
                    {/* <img src="./Assets/Pictures/martini 2.jpg"> */}
                    <h3>Drinks for All!</h3>
                    <p>This application will let you input any ingredient and it will produce 3 random drinks that use
                        that ingredient. If you aren't sure what ingredient you want to use, you can click on the random
                        button on the second page. The application will also give you a random dad joke on the search
                        results page.</p>
                </a>
                <a href="http://www.google.com" class="app">
                    {/* <!-- project 2 --> */}
                    {/* <img src="./Assets/Pictures/place holder.png"> */}
                    <h3>Application #2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Neque egestas congue quisque egestas. Arcu risus quis varius quam
                        quisque
                        id.</p>
                </a>
                <a href="http://www.google.com" class="app">
                    {/* <!-- project 3 --> */}
                    {/* <image src="./Assets/Pictures/place holder.png"> */}
                    <h3>Application #3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Neque egestas congue quisque egestas. Arcu risus quis varius quam
                        quisque
                        id.</p>
                </a>
            </div>
            <div class="apps-b">
                <a href="http://www.google.com" class="app">
                    {/* <!-- project 4 --> */}
                    {/* <image src="./Assets/Pictures/place holder.png"> */}
                    <h3>Application #4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Neque egestas congue quisque egestas. Arcu risus quis varius quam
                        quisque
                        id.</p>
                </a>
                <a href="http://www.google.com" class="app">
                    {/* <!-- project 5 --> */}
                    {/* <image src="./Assets/Pictures/place holder.png"> */}
                    <h3>Application #5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Neque egestas congue quisque egestas. Arcu risus quis varius quam
                        quisque
                        id.</p>
                </a>
                <a href="http://www.google.com" class="app">
                    {/* <!-- project 6 --> */}
                    {/* <image src="./Assets/Pictures/place holder.png"> */}
                    <h3>Application #6</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Neque egestas congue quisque egestas. Arcu risus quis varius quam
                        quisque
                        id.</p>
                </a>
            </div>
        </div>
    </section>

  )
};

export default Portfolio;