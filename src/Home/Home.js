import React, {useEffect, useState} from 'react';
import './Home.css';
import Cards from '../Cards/Cards'
import slider1 from '../Assets/11.jpg'
import slider2 from '../Assets/12.jpg'
import slider3 from '../Assets/13.jpg'
import slider4 from '../Assets/14.jpg';
import { db } from '../firebase'
import {Link} from 'react-router-dom'
const  Home =() => {

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
    alert('Number is required')
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


//    function submit()
//    {
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbzqM9b9xZJd-YSLYtIohmxocUzf_ca3IF2GVeAtpi_9UrkpvRlFFzVtjw7hL_VDKCVR/exec'
//     const form = document.forms['google-sheet']
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => alert("You have successfully submitted."))
//         .catch(error => console.error('Error!', error.message))
//     })
        
//    }

  

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzqM9b9xZJd-YSLYtIohmxocUzf_ca3IF2GVeAtpi_9UrkpvRlFFzVtjw7hL_VDKCVR/exec'
    
    // useEffect(() => {
    //     const form = document.forms['google-sheet']
    //     form.addEventListener('submit', e => {
    //         e.preventDefault()
    //         fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //           .then(response => alert("You have successfully submitted."))
    //           .catch(error => console.error('Error!', error.message))
    //       })
    // }, [])
  
    
     

    // useEffect(() => {
    //     document.title = "MD Coaching"
        
    //   }, []);
      
    return (
        <div>

            {/* Carausel-Start */}
            <div id="carouselExampleIndicators" className="carousel slide w-100 mt-4 p-1"         data-ride="carousel"  >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner " >
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slider1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider4} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                    <span className="sr-only ">Next</span>
                </a>
            </div>
             {/* Carausel-End */}

             {/* Enquiry Form-Start */}
            <div>
                <marquee> <Link to='/Online-forms' className='text-danger h2'>Admission Open For Academic Course for Secondary (10th) &#38; Sr. Secondary (12th) Apply Now</Link> </marquee>

                {/* https://forms.gle/yxdQ1AvL4NpQpH1P7 */}
                
                <h2 className='mt-5  container-fluid'>Enquiry Form</h2><hr/>
            </div>
           
                
           
            <form className=" mb-5 border" onSubmit={handleSubmit}  >
                <input type="text"  className=" mt-3 mb-2 align-enquiry" placeholder='Username' name='Name' value={name} onChange={(e) => setName(e.target.value)}  />
                <input type="number"  className="ml-3 mb-2 " placeholder=' Mobile Number'  name='Phone' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                <input type="email" className="ml-3 mb-2" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text"  className="ml-3 mb-2" placeholder='Location' name='Location' value={location} onChange={(e) => setLocation(e.target.value)} /> 
                <button className="button btn-primary ml-3 rounded mb-3" value="Submit" name='submit' style={{background: loader ?   '#ccc' : 'rgb(2,2,110)'}} >Submit </button>
              
            </form>
           

             {/* Form-end */}

              {/* Nios Admission streams */}

            <div className='text-center'>
                <span className='heading'>NIOS Admission</span>
                <h3 className='mt-4'>Different streams of NIOS board </h3>
            </div>

            <div className="containers ">
                
                <div className="card"  >
                    <div className="face face1">
                    <div className="content">
                       
                        <h2 className="java">1st NIOS Stream - (Saves Time)</h2>
                        <p className="java">9th 10th 11th and 12th failed students can get admission to pass diractlt 10th and 12th in stream of NIOS board- CBSE pattern (Govt of India) </p>
                        <Link to='/Online-forms'><button className='btn btn-warning'>Apply Now</button> </Link>
                    </div>
                    </div>
                    <div className="face face2" >
                    <h2>9th 10th 11th &#38; 12th फेल students सीधे  10th &#38; 12th पास करें</h2>
                    </div>
                </div>

                <div className="card"  >
                    <div className="face face1">
                    <div className="content">
                        z
                        <h2 className="python">2nd NIOS stream - (Saves Year)</h2>
                        <p className="python">Failed students from any recognize board of India can get admission and pass 10th and 12th in the same year through NIOS board in stream 2- CBSE pattern (Govt of India)</p>
                        <Link to='/Online-forms'><button className='btn btn-warning'>Apply Now</button> </Link>                    </div>
                    </div>
                    <div className="face face2">
                    <h2>किसी भी Board  से  फ़ैल students NIOS से  इसी वर्ष  10th &#38; 12th पास करें</h2>
                    </div>
                </div>

                <div className="card"      >
                    <div className="face face1">
                    <div className="content">
                        
                        <h5 className="cSharp">3rd &#38; 4th NIOS stream - (Saves time, year &#38; Pass quickly)</h5>
                        <p className="cSharp">The students failed from any recognise board of India can pass within 45 days through on-Demand Examination system (ODES) by getting admission in NIOS board- CBSE pattern (Govt of India)</p>
                        <Link to='/Online-forms'><button className='btn btn-warning'>Apply Now</button> </Link>                    </div>
                    </div>
                    <div className="face face2" >
                    <h2>फेल students 10th  &#38; 12th 45 दिनो मे पास करें </h2>
                    </div>
                </div>
            </div>

         {/* Online apply  & download papers*/}

         {/* <div className='main-container mt-5'>
             <div className=' image1 rounded ml-2 mb-2'>
                <marquee attribute_name = "attribute_value"attributes style={{color:'red'}}>
                    Apply Now
                </marquee>
                <p className=" image-text h1 ml-2">Apply Online for NIOS <br/> classes</p>
                <p className=" ml-2">Now if you want to join online classes then you can <br/>contact our toll free number -1800-120-6077,<br/> +91-993-5035-316 and you will get all the<br/> information from here.</p>
                <button className='btn btn-primary ml-2'>Apply Now</button>
             </div>

                
             <div className=' image2 rounded ml-2 mb-2'>
                <marquee attribute_name = "attribute_value"attributes style={{color:'red'}}>
                    Download Now
                </marquee>
                <FaCloudDownloadAlt className='download-icon' />
                <p className=" h1 ml-2">Download NIOS Question Papers</p>
                <p className=" ml-2">Nios Class 10th and 12th Earlier Or Nios Question Paper for students appearing for Nios board exams. Experience these papers efficiently and get ready well for your Nios board tests. Students can download these papers in PDF structure with a subject name and subject code.</p>
                <button className='btn btn-primary ml-2'>Download Now</button>
            </div>

         

         </div> */}
            <Cards />
    
        </div>
    )
}

export default Home
