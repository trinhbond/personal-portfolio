import React from 'react'
import "../styles/Contact.css";


export default function Contact() {
    document.title="Contact - Bond Trinh"
  return (
    <div className="Content">
        <h1 className="ContentHeading">Get in touch</h1>
        <p className="ContentParagraph">For work opportunities or inquiries, feel free to contact me 
        and I will get back to you as soon as possible.</p>
        <button className="ContactButton"><a href="mailto:bond.nicktrinh@gmail.com" target="blank">Say Hello</a></button>
    </div>
  )
}
