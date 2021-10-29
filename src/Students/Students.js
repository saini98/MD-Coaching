import React from 'react'
import student1 from '../Assets/s1.jpg'
import student3 from '../Assets/s3.jpg'
import student4 from '../Assets/s4.jpg'
import student5 from '../Assets/s5.jpg'
import student6 from '../Assets/s6.jpg'
import student7 from '../Assets/s7.jpg'
import student8 from '../Assets/s8.jpg'
import student9 from '../Assets/s9.jpg'
import student16 from '../Assets/s16.jpg';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Footer from '../Footer/Footer'
function Students() {
    return (
        <section className="pt-5 pb-5">
            <hr />
  <div className="container">
    <div className="row"  >
        <div className="col-6 ">
            <h3 className="mb-3">MD Coaching's Successful Students  </h3>
        </div>
        <div className="col-6 text-right">
            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <FaArrowLeft />
            </a>
            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <FaArrowRight />
            </a>
        </div>
        <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x200" src={student1} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Simran Kaur</h4>
                                        <p className="card-text">270459183693</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student16} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Sandeep Kumar</h4>
                                        <p className="card-text">270309173104</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student3} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Mohammad Shamim</h4>
                                        <p className="card-text">270309172057</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student4} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Riya Walecha</h4>
                                        <p className="card-text">270459192017</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student5} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Varun Gupta</h4>
                                        <p className="card-text">270433182212</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student6} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Rahul</h4>
                                        <p className="card-text">270459182018</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student7} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Ankit Kumar</h4>
                                        <p className="card-text">270266172155</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student8} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Vaibhav Tanwar</h4>
                                        <p className="card-text">270309193180</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img  alt="100%x280" src={student9} width={300} height={200} />
                                    <div className="card-body">
                                        <h4 className="card-title">Mohit</h4>
                                        <p className="card-text">270459182129</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
</section>

    )
}

export default Students
