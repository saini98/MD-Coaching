import React from 'react'
import Students from '../Students/Students'
import './cards.css';
import {Link} from 'react-router-dom';
import sideImg from '../Assets/sideImg.jpg';
import marykom from '../Assets/marykom.jpg';
import kavya from '../Assets/kavya.jpg';
import dipika from '../Assets/DIPIKA.jpg';
import somdev from '../Assets/somdev.jpg';
import muktha from '../Assets/muktha.jpg';
import pradhumya from '../Assets/pradhumya.jpg';
import armaan from '../Assets/armaan.jpg';
import ganesh from '../Assets/ganesh.jpg';
import png1 from '../Assets/png1.png';
import png2 from '../Assets/png2.png';
import png3 from '../Assets/png3.jpg'
function Cards() {
    return (
        <div>


            <div className='container-fluid d-md-flex'>
                <div className='card1 text-light'>
                    <h2 className="card-title mt-5 ml-3 shadow">Apply Online for NIOS classes</h2>
                    <p className="card-text backgrond ml-3">Now if you want to join online classes then you can contact on our <a href="tel:+91 9910059784" className='text-danger'>     +91 9910059784 </a> and you will get  all the   information from here.
                    We invite all of you to become a part of MD Coaching and put your step forward toward perfection &#38; excellence.</p>
                    <Link to='/Online-forms' className="btn btn-primary ml-3">Apply Now</Link>
                </div>
                <div className='card2 text-light'>

                    <h2 className="card-title mt-5 ml-3 shadow">Download NIOS Question Papers</h2>
                    <p className="card-text ml-3 ">Nios Class 10th and 12th Earlier Or Nios Question Paper for students appearing for Nios board exams. Experience these papers efficiently and get ready well for your Nios board tests. Students can download these papers in PDF structure with a subject name and subject code.</p>
                    <Link to='/QuestionPapersClass10th-12th' className="btn btn-primary ml-3">Download Now</Link>
                </div>
            </div>



            <hr />
            <div className='container-fluid  text-center'>
                <p  className='h3'>How To Pass From NIOS Board In Class 10th &#38; 12th ?</p>
                <hr />

            </div>
            <div className='container-fluid mt-4 d-md-flex '>

                <div className='image-card mb-5 image-section'>
                    <img src={sideImg} alt="" height={200} width={300} />
                </div>
                <div className='text-card  mt-2 text-section'>
                    <p>There are so many Students who are good in one subject but poor in others which results to FAIL in final exams. <br />In NIOS, you can appear for few subjects in first half of the year and for the remaining subject next half of the session.
                     In this way students can pass a simple subject and a difficult subject first and then pass the remaining subjects later.<br /> If someone has failed in Class 9th or 11th and wants to take the Class 10th Or 12th Exam without class again then NIOS is the best option for them.</p>
                </div>
            </div>

           
            <marquee>  <a href="tel:+91 9910059784" className='text-danger h2'> One click away for getting Admission in MD Coaching <span className='text-primary'>+91 9910059784</span> </a></marquee>
           
            <hr />
            <div className='container-fluid  text-center'>
                <p  className='h3 '>Succesfull Learners of NIOS Board</p>
                <hr />

            </div>

            {/* <!-- Page Content --> */}
                <div className="container">

                

                <div className="row text-center text-lg-left"  >

                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={marykom} alt="marykom" />
                            <p className='h4 mt-2 mt-2'>Mary Kom</p>
                     
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={kavya} alt="kavya" />
                            <p className='h4 mt-2'>Kavya</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={dipika} alt="dipika" />
                            <p className='h4 mt-2'>Dipika</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={somdev} alt="somdev" />
                            <p className='h4 mt-2'>Somdev</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={muktha} alt="muktha" />
                            <p className='h4 mt-2'>Muktha</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={pradhumya} alt="pradhumya" />
                            <p className='h4 mt-2'>Pradhumya</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4">
                   
                            <img className="img-fluid img-thumbnail" src={armaan} alt="armaan" />
                            <p className='h4 mt-2'>Armaan</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mt-4 ">
                   
                            <img className="img-fluid img-thumbnail" src={ganesh} alt="ganesh" />
                            <p className='h4 mt-2'>Ganesh</p>
                    </div>
                   
                </div>

                </div>
                {/* <!-- /.container --> */}


                <hr/>
                <div className='container-fluid  text-center' >
                <p className='h3'>THE BEST NIOS COACHING CENTRE</p>
                <hr />

            </div>
    <div className="container"  >
    <div className="row">
        <div className="col-sm-4 ">
            <div className="card" >
                <img className="card-img-top " src={png1} alt="EXPERIENCED PROFESSIONALS"  height={160}/>
                <div className="card-block">
                    <h4 className="card-title">EXPERIENCED PROFESSIONALS</h4> 
                    <p className="card-text">We have the most experienced faculty of tutors who are truly determined to cover all the concepts and prepare you to give your best in the NIOS Exams.</p>
                    
                </div>
            </div>
        </div>

        <div className="col-sm-4">
            <div className="card"  >
                <img className="card-img-top border-bottom" src={png2} alt="BEST STUDY MATERIALS" height={180} />
                <div className="card-block">
                    <h4 className="card-title">BEST STUDY MATERIALS</h4>
                    <p className="card-text">Study Materials of the MD Coaching are designed by professionals which consist of the latest syllabus, Test series with illustrative examples and Proper Notes. </p>
                    
                </div>
            </div>
        </div>
        
       
        <div className="col-sm-4">
            <div className="card" >
                <img className="card-img-top  " src={png3} alt="AN EMERGING INSTITUTE"  height={180} />
                <div className="card-block">
                    <h4 className="card-title">AN EMERGING INSTITUTE</h4>
                    <p className="card-text">MD Coaching is well known for imparting knowledge to the failed students to achieve extra-ordinary results in their exams and it's one of the most trusted platform.</p>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<marquee> <Link to='/Online-forms' className='text-danger h2'>Admission Open For Academic Course for Secondary (10th) &#38; Sr. Secondary (12th) Apply Now</Link> </marquee>
<Students />
  

        </div>
    )
}

export default Cards
