import React from 'react';


const Contact = () => {
    return (
        <div className="">
            <h1>Contact</h1>
            <form action="/action_page.php">
                <div>
                    <label className='label'>
                        Name:
                    </label>
                    <input type='text' name='name' className='form_name' required/>
                </div>
                <div>
                    <label className='label'>
                        Email Address:
                    </label>
                    <input type='text' name='Email' className='form_name' required />
                </div>
                <div>
                    <label className='label'>
                        Message:
                    </label>
                    <input type='text' name='Message' className='form_message' required />
                </div>
                <input type="submit" value="Submit" className='submitBtn'/>
            </form>
        </div>
    );
}

export default Contact;