import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './Contact.css';
import { Link } from 'react-router-dom'
import { db } from '../firebase'
// import emailjs from 'emailjs-com';
import { FaPencilAlt, FaPhoneAlt, FaEnvelope, FaUserAlt } from 'react-icons/fa'
function Contact() {
  // function sendEmail(e){
  //   e.preventDefault();
  //   emailjs.sendForm('service_kc6rsjh', 'template_d41vrd9', e.target, 
  //   'user_eaLIOhnUhDF67K0qi5wuZ')
  //   .then((result) => {
  //     console.log(result.text);
  // }, (error) => {
  //     console.log(error.text);
  // });
  // e.target.reset();
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [number, setNumber] = useState("");
  const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && email && messages && number ) {
      setLoader(true);
      db.collection("Contact-Form").add({
        name: name,
        email: email,
        messages: messages,
        number: number
      })
        .then(() => {
          setLoader(false);
          alert("Your Contact Form is Submitted");
          e.target.reset();
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false)
        });

      setName("");
      setEmail("");
      setMessages("");
      setNumber("");

    }
    else if (name === "" ) {
      alert('Name is required')
    }
    else if (email === "" ) {
      alert('Email id is required')
    }
      else if (number === "" ) {
      alert('Mobile Number is required')
    }
    else if (messages === "" ) {
      alert('Message is required')
    }
   
  
    else {
      alert('all fields are required')
    }
  };

  return (
    <div>
      <Nav />
      {/* <!--Section: Contact v.1--> */}
      <section className="section pb-5 container"  >

        {/* <!--Section heading--> */}
        <h2 className="section-heading h1 pt-4">CONTACT US</h2>
        {/* <!--Section description--> */}
        <p className="section-description pb-4">MD Coaching provides the information about NIOS Board(National Institute Of Open Schooling) as well as Coaching Classes, Syllabus And Tuition For 10th (Secondary) &#38; 12th (Senior Secondary) Students Of NIOS Board by renowned and highly qualified faculty and staff. MD Coaching also guides to fill the form for <Link to='/Online-forms' className='text-danger'> Online Admissions</Link>  in all streams ff NIOS Board for 10th &#38; 12th students. <br /><br />

          The Best Coaching Institutes is MD Coaching. Kindly write to  us using our contact form if  you have any query. Students studying in MD Coaching Institute can also write to us to give their reviews and feedback.</p>
        <form onSubmit={handleSubmit}>
          <div className="row">

            {/* <!--Grid column--> */}
            <div className="col-lg-5 mb-4">

              {/* <!--Form with header--> */}
              <div className="card">

                <div className="card-body">
                  {/* <!--Header--> */}
                  <div className="form-header blue accent-1">
                    <h3><FaEnvelope /> Write to us:</h3>
                  </div>

                  <p>We'll write rarely, but with only the best content.</p>
                  <br />

                  {/* <!--Body--> */}
                  <div className="md-form ">
                    <FaUserAlt />
                    <input type="text" id="form-name" className="form-control" name='name' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />

                  </div>

                  <div className="md-form mt-4">
                    <FaEnvelope />
                    <input type="text" id="form-email" className="form-control" name='email' placeholder='Email Id ' value={email} onChange={(e) => setEmail(e.target.value)} />

                  </div>

                  <div className="md-form mt-4">
                    <FaPhoneAlt />
                    <input type="number" id="form-Subject" className="form-control" placeholder='Mobile Number' value={number} onChange={(e) => setNumber(e.target.value)} />

                  </div>

                  <div className="md-form mt-4">
                    <FaPencilAlt />
                    <textarea id="form-text" className="form-control md-textarea" rows="3" name='message' placeholder='Type Your Message Here...............' value={messages} onChange={(e) => setMessages(e.target.value)}></textarea>


                  </div>
                  {/* <div className='md-form'>
          <input type="file" id="myFile" name="filename"  />
          
          </div> */}

                  <div className="text-center mt-4">
                    <button className="btn btn-light-blue text-white" style={{ background: loader ? '#ccc' : 'rgb(2,2,110)' }}>Submit</button>
                  </div>

                </div>

              </div>
              {/* <!--Form with header--> */}

            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-7">

              {/* <!--Google map--> */}
              <div id="map-container-google-11" className="z-depth-1-half map-container-6 md" style={{ height: '400px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.830018315542!2d77.09721075002614!3d28.604875791998026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b08e32be005%3A0xecc57b01797617e4!2sMD%20Coaching%20%3A%20LSC!5e0!3m2!1sen!2sin!4v1623435277762!5m2!1sen!2sin" allowfullscreen="" loading="lazy" title="frame"></iframe>

              </div>

              <br />
              {/* <!--Buttons--> */}
              <div className="row text-center">
                <div className="col-md-4">

                  <p>MD Coaching : LSC</p>
                  <p>Sagarpur, Delhi</p>
                  <a href="mailto:mdcoaching99@gmail.com">mdcoaching99@gmail.com</a>
                </div>

                <div className="col-md-4">

                  <a href="tel:+91 9910059784" className='text-danger'> +91 9910059784 </a> <br /><br />

                  <a href="tel:+91 8920521728" className='text-danger'> +91 8920521728</a> <br /><br />


                </div>

                <div className="col-md-4">
                  <p>Mon - Sat <br /><br /> 9:00 AM - 7:00 PM</p>

                </div>
              </div>

            </div>
            {/* <!--Grid column--> */}

          </div>
        </form>

      </section>
      <Footer />
      {/* <!--Section: Contact v.1--> */}
    </div>
  )
}

export default Contact
