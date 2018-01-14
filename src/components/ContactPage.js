import React, { Component } from 'react'

class ContactPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>Email</h3><br/>
                    <input type="email" placeholder="Email"/><br/>
                    <h3>Subject</h3><br/>
                    <input type="text" placeholder="Subject"/><br/>
                    <h3>Message</h3><br/>
                    <input type="text" placeholder="Your Message"/><br/>
                </form>
            </div>
        );
    }
}

export default ContactPage