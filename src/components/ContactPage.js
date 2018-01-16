import React, { Component } from 'react'
import './ContactStyle.css'

class ContactPage extends Component {
    render() {
        return (
            <div>
                <form action="mailto:collinashbaugh@gmail.com">
                    <h3>Email</h3>
                    <input type="email" placeholder="Email"/><br/>
                    <h3>Subject</h3>
                    <input type="text" placeholder="Subject"/><br/>
                    <h3>Message</h3>
                    <input type="text" placeholder="Your Message" size="64"/><br/>
                    <input type="submit" value="Send Email" /> 
                </form>
            </div>
        );
    }
}

export default ContactPage