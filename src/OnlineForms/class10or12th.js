import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import './class10or12th.css'
function class10or12th() {
    return (
        <div>
            <Nav />
            <div className='classes'>
                <div className='classTenth'>
                    <a href="https://forms.gle/f1c7ruFX2pedhTT5A" target='_blank' rel="noopener noreferrer">CLASS 10TH <br/>(Secondary)</a>
                </div>
                <div className='classTwelfth'>
                <a href="https://forms.gle/yxdQ1AvL4NpQpH1P7" target='_blank' rel="noopener noreferrer">CLASS 12TH<br/>(Senior Secondary)</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default class10or12th
