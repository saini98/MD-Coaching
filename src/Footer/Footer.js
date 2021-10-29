import React, {useState} from 'react'
import './footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter,FaEnvelope,FaPhoneAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { db } from '../firebase'
import logo from '../Assets/logo.png';
import student1 from '../Assets/s1.jpg';
// import student2 from '../Assets/s2.jpg'
import student3 from '../Assets/s3.jpg'
import student4 from '../Assets/s4.jpg'
import student5 from '../Assets/s5.jpg'
import student6 from '../Assets/s6.jpg'
import student7 from '../Assets/s7.jpg'
import student8 from '../Assets/s8.jpg'
import student9 from '../Assets/s9.jpg'
import student10 from '../Assets/s10.jpg';
import student11 from '../Assets/s11.jpg';
import student12 from '../Assets/s12.jpg';
import student13 from '../Assets/s13.jpg';
import student14 from '../Assets/s14.jpg';
import student15 from '../Assets/s15.jpg';
import student16 from '../Assets/s16.jpg';


const Footer = () => {
    const [name, setName] = useState("");
   const [mobileNumber, setMobileNumber] = useState("");
   const [email, setEmail] = useState("");
   const [location, setLocation] = useState("");
   const [loader, setLoader] = useState(false);

   const handleSubmit = (e) =>{
       e.preventDefault();
       if (name && email && location && mobileNumber ) {
       setLoader(true);
       db.collection("Enquiry-Form").add({
           name: name,
           mobileNumber: mobileNumber,
           email:email,
           location: location
       })
       .then(() =>{
        setLoader(false);
        alert("Your Enquiry Form is Submitted");
        
       })
       .catch((error) => {
           alert(error.message);
           setLoader(false)
       });

       setName("");
       setMobileNumber("");
       setEmail("");
       setLocation("");
   }
   else if (name === "" ) {
    alert('Name is required')
  }
   else if (mobileNumber === "" ) {
    alert('Mobile Number is required')
  }
  
  else if (email === "" ) {
    alert('Email id is required')
  }
  else if (location === "" ) {
    alert('Message is required')
  }
 
  else {
    alert('all fields are required')
  }
};

    return (
        <footer style={{backgroundColor:'#003d59'}} >
        <div className="container-fluid border"   >
            <div className="container">
                <div className="row " >
                    
                    <div className="col-md-3 py-3" >
                        <div className=" py-3" >
                            <img className="foot_logo" src={logo}  alt='logo' />
                            <div>
                            
                                <p className='mt-3'> Rz-44/271, Hans Park, West sagarpur, Nr Post office, New Delhi - 110046</p><br/>
                                <FaPhoneAlt /><a href="tel:+91 9910059784" className="ml-3 text-white">+91 9910059784</a><br/><br/>
                                <FaPhoneAlt  />  <a href="tel:+91 8920521728" className='text-white ml-3'>  +91 8920521728</a> <br/><br/>
                                <FaEnvelope /> <span className=" mt-4 ml-3">  mdcoaching99@gmail.com</span>
                            </div>
                         
                            
                            <div className='icons' >
                                <a href="https://youtube.com/channel/UCwJNTGyLuVtfrGCMVdX1Cpg" target='_blank' rel="noopener noreferrer"><FaYoutube  style={{ color: 'red' }} /></a>
                               <a href="https://www.instagram.com/mdcoachinglsc/" 
                               ><FaInstagram className=' ml-3 mt-5' style={{ color: '#8a3ab9' }} /></a> 
                                <a href="https://www.facebook.com/mdcoachinglsc/" target='_blank' rel="noopener noreferrer">
                                   <FaFacebookF className='ml-3' style={{ color: 'blue' }} /></a>
                                <a href="https://www.linkedin.com/in/mdcoachinglsc/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn className='ml-3' style={{ color: '#0077b5' }} /></a>
                               
                                <FaTwitter className='ml-3' style={{ color: 'aqua' }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3"  >
                        <div className=" py-3" >
                            <h3>About the Website</h3>
                            <hr/>
                            <p>MD Coaching provides information about NIOS board as well as classes &#38; syllabus for 10th &#38; 12th student of NIOS Board by highly qualified faculty.</p>
                            
                           <div className="d-flex text-white">
                               <div >
                                <Link to='/' className=' text-white' >  Home</Link><br/>
                                <Link className=' text-white'>  About us</Link>
                                <Link to='/QuestionPapersClass10th-12th' className=' text-white'>  Ques.Papers</Link><br/>

                                <Link className=' text-white'> NIOS Admission</Link>
                               </div>
                               <div>
                                
                                <Link className=' text-white'>  Privacy &#38; Policy</Link>
                                <Link className=' text-white'>  Disclaimer &#38; <br /> Copyright</Link>
                               </div>
                            
                           </div> 
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className=" p-3"  >
                            <h3>Our Gallery</h3>
                            <hr/>
                           <img className="imgg" alt='students' src={student1}/>
                           {/* <img className="imgg" src={student2}/> */}
                           <img className="imgg" alt='students' src={student3} />
                           <img className="imgg" alt='students' src={student4}/>
                           <img className="imgg" alt='students' src={student5}/>
                           <img className="imgg" alt='students' src={student6}/>
                           <img className="imgg" alt='students' src={student7}/>
                           <img className="imgg" alt='students' src={student8}/>
                           <img className="imgg" alt='students' src={student9}/>
                           <img className="imgg" alt='students' src={student10}/>
                           <img className="imgg" alt='students' src={student11}/>
                           <img className="imgg" alt='students' src={student12}/>
                           <img className="imgg" alt='students' src={student13}/>
                           <img className="imgg" alt='students' src={student14}/>
                           <img className="imgg" alt='students' src={student15}/>
                           <img className="imgg" alt='students' src={student16}/>
                           
                           

                        </div>
                    </div>

                    <form className="col-md-3 py-3" onSubmit={handleSubmit} >
                        <div className=" p-3" >
                            <h3>Enquire Now</h3>
                            <hr/>
                            
                            <input  className="mt-2" type="text" placeholder="*Name" value={name} onChange={(e) => setName(e.target.value)} />

                        
                            <input className="mt-2" type="number" placeholder="*Mobile Number"value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>

                            <input className="mt-2" type="text" placeholder="*Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <input className="mt-2" type="text" placeholder="*Location" value={location} onChange={(e) => setLocation(e.target.value)} />

                            <div className="mt-4 ml-5">
                                <button className="btn btn-primary text-white ">Submit</button>
                            </div>
                        </div>
                    </form>



                </div>
            </div>


            <div className="row bg-dark" >
                <div className="text-white ml-2">
                    <p className="mt-2">copyright &copy; 2021 All Right reserved  <b>MD Coaching</b>. All Right Reserved</p>
                </div>
                <div className="d-flex mt-2 mr-2">
                    <a className="text-white">
                        Terms of Use
                    </a>
                    <a className="ml-4 text-white">Privacy Policy</a>
                </div>
            </div>
            </div>
    </footer>

    )
}

export default Footer
