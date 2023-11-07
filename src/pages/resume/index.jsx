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
            <h1>Resume</h1>
            <button onClick={onButtonClick}>My Resume</button>
            <ul> Front-End Proficiencies
                <li>CSS</li>
                <li>CSS</li>
                <li>CSS</li>
                <li>CSS</li>
            </ul>
            <ul> Back-End Proficiencies
                <li>CSS</li>
                <li>CSS</li>
                <li>CSS</li>
                <li>CSS</li>

            </ul>
        </div>
    );
}

export default Resume;