import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";
import paper201 from '../Assets/201-hindi.pdf';
import paper202 from '../Assets/202-english.pdf';
import paper206 from '../Assets/206-urdu.pdf';
import paper209 from '../Assets/209-sanskrit.pdf';

import paper211 from '../Assets/211-maths.pdf';
import paper212 from '../Assets/212-Science.pdf';
import paper213 from '../Assets/213-sst.pdf';
import paper214 from '../Assets/214-economics.pdf';
import paper215 from '../Assets/215-businessstudies.pdf';
import paper216 from '../Assets/216-homescience.pdf';
import paper222 from '../Assets/222-psychology.pdf';
import paper223 from '../Assets/223-indiancultural.pdf';
import paper225 from '../Assets/225-painting.pdf';
import paper229 from '../Assets/229-dataentry.pdf';
import paper301 from '../Assets/301-hindi.pdf';
import paper302 from '../Assets/302-english.pdf';
import paper306 from '../Assets/306-Urdu.pdf';
import paper309 from '../Assets/309-Sanskrit.pdf';
import paper311 from '../Assets/311-maths.pdf';
import paper312 from '../Assets/312-physics.pdf';
import paper313 from '../Assets/313-chemistry.pdf';
import paper314 from '../Assets/314-biology.pdf';
import paper315 from '../Assets/315-history.pdf';
import paper316 from '../Assets/316-geography.pdf';
import paper317 from '../Assets/317-political science.pdf';
import paper318 from '../Assets/318-economics.pdf';
import paper319 from '../Assets/319-business studies.pdf';
import paper321 from '../Assets/321-home science.pdf';
import paper327 from '../Assets/327-word processing.pdf';
import paper328 from '../Assets/328-psychology.pdf';
import paper330 from '../Assets/330-computer science.pdf';
import paper331 from '../Assets/331-sociology.pdf';
import paper332 from '../Assets/332-painting.pdf';
import paper333 from '../Assets/333-enviromental science.pdf';
import paper335 from '../Assets/335-masscommunication.pdf';
import paper336 from '../Assets/336-data entry.pdf';

import {FaArrowAltCircleDown } from 'react-icons/fa'

function papers() {
    return (
        <div>
            <Nav />
            <div className='p-5'>
                
            
                <h1> <span className='text-danger'>Question Papers </span>  Of Previous Years Examination for <span className='text-danger'>10th &#38; 12th</span> </h1>
                <p>Question Papers Of Previous Years Examination For Secondary (10th) (Academic) Senior Secondary (12th) Papers Of NIOS Previous Years 2019</p>
                <p className='text-danger'>NOTE :- CLICK ON DOWNLOAD BUTTON FOR DOWNLOADING QUESTION PAPER </p>
                <table className="table table-bordered table-responsive-md text-center">
                    <thead className='bg-success'>
                        <tr>
                            <th scope="col">SECONDARY LEVEL (X) </th>
                            
                            <th scope="col">Download</th>
                            <th scope="col"> Senior Seconcdary Level (XII)</th>
                            
                            <th scope="col">Download  </th>
                        </tr>
                    </thead>

                    <tbody>
                    
                    <tr>
                        <td> (201)  Hindi </td>
                        <td><a href={paper201} download><FaArrowAltCircleDown /></a></td>
                        <td> (301)  Hindi </td>
                        <td><a href={paper301} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td>(202)  English</td>
                        <td><a href={paper202} download><FaArrowAltCircleDown /></a></td>
                        <td>(302)  English</td>
                        <td><a href={paper302} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                  
                    <tr>
                        
                        <td>(206)  Urdu</td>
                        <td><a href={paper206} download><FaArrowAltCircleDown /></a></td>
                        <td>(306)  Urdu</td>
                        <td><a href={paper306} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                  
                    <tr>
                        
                        <td>(209)  Sanskrit</td>
                        <td><a href={paper209} download><FaArrowAltCircleDown /></a></td>
                        <td>(309)  Sanskrit</td>
                        <td><a href={paper309} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                   
                
                    <tr>
                        
                        <td>(211) Mathematics*</td>
                        <td><a href={paper211} download><FaArrowAltCircleDown /></a></td>
                        <td>(311) Mathematics*</td>
                        <td><a href={paper311} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td>(212) Science and Technology*</td>
                        <td><a href={paper212} download><FaArrowAltCircleDown /></a></td>
                        <td>(312) Physics</td>
                        <td><a href={paper312} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td>(213) Social Science </td>
                        <td><a href={paper213} download><FaArrowAltCircleDown /></a></td>
                        <td>(313) Chemistry </td>
                        <td><a href={paper313} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td> (214) Economics</td>
                        <td><a href={paper214} download><FaArrowAltCircleDown /></a></td>
                        <td> (314) Biology</td>
                        <td><a href={paper314} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td> (215) Business Studies </td>
                        <td><a href={paper215} download><FaArrowAltCircleDown /></a></td>
                        <td>(315) History</td>
                        <td><a href={paper315} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td> (216) Home Science</td>
                        <td><a href={paper216} download><FaArrowAltCircleDown /></a></td>
                        <td>(316) Geography</td>
                        <td><a href={paper316} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td> (222) Psychology</td>
                        <td><a href={paper222} download><FaArrowAltCircleDown /></a></td>
                        <td> (317) Pol Science</td>
                        <td><a href={paper317} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td> (223) Indian Culture and Heritage</td>
                        <td><a href={paper223} download><FaArrowAltCircleDown /></a></td>
                        <td> (318) Economics</td>
                        <td><a href={paper318} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td> (225) Painting</td>
                        <td><a href={paper225} download><FaArrowAltCircleDown /></a></td>
                        <td> (319) Business Studies</td>
                        <td><a href={paper319} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td>(229) Data Entry Operations</td>
                        <td><a href={paper229} download><FaArrowAltCircleDown /></a></td>
                        <td>(321) Home Science</td>
                        <td><a href={paper321} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>  
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(327) Word Processing</td>
                        <td><a href={paper327} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(328) Psychology</td>
                        <td><a href={paper328} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(330) Computer Science</td>
                        <td><a href={paper330} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(331) Sociology</td>
                        <td><a href={paper331} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(332) Painting</td>
                        <td><a href={paper332} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(333) Environmental Science</td>
                        <td><a href={paper333} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(335) Mass Communication</td>
                        <td><a href={paper335} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td>(336) Data Entry</td>
                        <td><a href={paper336} download><FaArrowAltCircleDown /></a></td>
                        
                    </tr>
                        
                    
                    </tbody>
                </table>
                <marquee> <Link to='/Online-forms' className='text-danger h2'>Admission Open For Academic Course for Secondary (10th) &#38; Sr. Secondary (12th) Apply Now</Link> </marquee>

                </div>
                
            <Footer />
        </div>
    )
}

export default papers
