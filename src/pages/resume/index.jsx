import React from 'react';
const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container_resume">
            <h1 className='resume_h'>Resume</h1>
            <button onClick={onButtonClick}>My Resume</button>
            <ul className='resume_ul'> Front-End Proficiencies
                <li className='resume_li'>HTML</li>
                <li className='resume_li'>CSS</li>
                <li className='resume_li'>Bootstrap</li>
                <li className='resume_li'>JavaScript</li>
            </ul>
            <ul className='resume_ul'> Back-End Proficiencies
                <li className='resume_li'>node.js</li>
                <li className='resume_li'>Express.js</li>
                <li className='resume_li'>Mongo.Db</li>
            </ul>
        </div>
    );
}

export default Resume;