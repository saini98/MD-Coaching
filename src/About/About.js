import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'

function About() {
    return (
        <div>
            <Nav />
            <h2 className='text-center mt-5'>About MD Coaching</h2>
            <div className='p-5 bg-image mt-5'>
                
            <h2>Director's Mesage</h2>
            <hr/>
            

            <h4 className='mt-3'>"All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents" </h4>
            <p className='ml-5'>- APJ Abdul Kalam</p>

           <p className='mt-3'> <b>MD Coaching</b> started its journey in the year 2007, intending to create an environment that is conducive to learning, developing the skills, attitudes and calibre by promoting teaching, training, research and creativity. We ignite nurture and transform innovations by establishing a strong network &#38; collaboration with institutes, industries and universities of repute at the state &#38; national level.</p>

            <p>It’s an institute that is equipped with every facility under one name and one roof. Our mission is to constantly strive to earn greater heights.</p>
            <p>We Provide information as well as Coaching Classes for <b> NIOS Board 10th &#38; 12th </b>Students, Online and Offline, Regular &#38; on weekly basis. We also Guide them to fill the form for Online admission f the NIOS board for Classes 10th &#38; 12th.</p>

            <p>We invite all of you to become a part of MD Coaching and put your step forward toward perfection &#38; excellence.</p>
            
            <p>Md. Imran Khan <br /> Director, <br/> MD Caoching</p>
           

            </div>
            <Footer className='mt-5' />
            
        </div>
    )
}

export default About
