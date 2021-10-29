import React, {useState} from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import {db} from '../firebase';
import firebase from 'firebase'
function ApplyForm() {

    // const [file, setFile] = useState("");

    // Handles file upload event and updates state
    function handleUpload(event) {
     const file = event.target.value.files[0];
     const images = firebase.storage().ref('images');
     images.put(file);
     
      // Add code here to upload file to server
      // ...

    }
     
    
    const [name, setName] = useState("");
    const [Fname, setFname] = useState("");
    const [Mname, setMname] = useState("");
    const [email, setEmail] = useState("");
    const [session, setSession] = useState("");
    const [type, setType] = useState("");
    const [course, setCourse] = useState("");
    const [number, setNumber] = useState("")
    const [dob, setDob] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState("");
    const [zip, setZip] = useState("");
    const [nationality, setNationality] = useState("");
    const [category, setCategory] = useState("");
    const [adhar, setAdhar] = useState("");
    const [year, setYear] = useState("");
    const [subjects, setSubjects] = useState("");
    const [board, setBoard] = useState("");
    const [files, setFiles] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoader(true);
        db.collection("Admission-Form").add({
            name: name,
            Father_name:Fname,
            Mother_name: Mname,
            email:email,
            Admission_session:session,
            Admission_type:type,
            course:course,
            Contact_number: number,
            dob:dob,
            address1:address1,
            address2:address2,
            city:city,
            states:states,
            zip:zip,
            nationality:nationality,
            category:category,
            adhar_number:adhar,
            class10th: {
                year:year,
                subjects:subjects,
                board:board,
                files:files
            }
            
        })
        .then(() =>{
        setLoader(false);
        alert("Your Admission Form is Submitted");
       
        })
        .catch((error) => {
            alert(error.message);
            
            setLoader(false)
        });

        setName("");
        setFname("");
        setMname("");
        setEmail("");
        setSession("");
        setType("");
        setNumber("");
        setDob("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setStates("");
        setZip("");
        setNationality("");
        setCategory("");
        setAdhar("");
        setYear("");
        setSubjects("");
        setBoard("");
        
       
    }
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };
    
    return (
        <>
        <Nav />
        <div className='container-fluid'>
            
            <h1 className='mt-5 mb-5'>Admission Form</h1><br/>
            <form onSubmit={handleSubmit}>
                    <div className ="form-row">
                        <div className ="form-group col-md-4">
                        <label for="inputEmail4">Student Name</label>
                        <input type="text" className ="form-control" id="inputEmail4" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputPassword4">Father Name</label>
                        <input type="text" className ="form-control" id="inputPassword4" placeholder="Father Name" value={Fname} onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputEmail4">Mother Name</label>
                        <input type="text" className ="form-control" id="inputEmail4" placeholder="Mother Name" value={Mname} onChange={(e) => setMname(e.target.value)} />
                        </div>
                    </div>
                    <div className ="form-row">
                        <div className ="form-group col-md-4">
                        <label for="inputEmail4">Admission Session</label>
                        <select className ="form-control" id="inputEmail4" value={session} onChange={(e) => setSession(e.target.value)}>
                            <option >Select</option>
                            <option value="April">April</option>
                            <option value="">October</option>
                        
                        
                        </select>   
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputPassword4">Admission Type</label>
                        <select className ="form-control" id="inputPassword4" value={type} onChange={(e) => setType(e.target.value)}  >
                        <option >Select</option>
                        <option>TOC (if any)</option>
                        <option >Secondary Xth (10th) </option>
                        <option >Senior Secondary XII (12th)</option>
                        </select>
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputPassword4">Course</label>
                        <select className ="form-control" id="inputPassword4" value={course} onChange={(e) => setCourse(e.target.value)}  >
                        <option >Select</option>
                        <option value="">Secondary Xth (10th) </option>
                        <option value="">Senior Secondary XII (12th)</option>
                        </select>
                        </div>
                    </div>
                    <div className ="form-row">
                        <div className ="form-group col-md-4">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className ="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputPassword4">Contact Number</label>
                        <input type="number" className ="form-control" id="inputPassword4" placeholder="Contact Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputEmail4">D.O.B</label>
                        <input type="date" className ="form-control" id="inputEmail4" placeholder="DD/MM/YY" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                    </div>
                    <div className ="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className ="form-control" id="inputAddress" placeholder="1234 Main St" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                    </div>
                    <div className ="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" className ="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                    </div>
                    <div className ="form-row">
                        <div className ="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className ="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className ="form-control" value={states} onChange={(e) => setStates(e.target.value)}>
                            <option >Select</option>
                            <option > Delhi </option>
                            <option >Andhra Pradesh</option>
                            <option> Arunachal Pradesh </option>
                            <option>Assam</option>
                            <option>Bihar  </option>
                            <option> Chhattisgarh </option>
                            <option>Goa</option>
                            <option> Gujarat </option>
                            <option> Haryana </option>
                            <option> Himachal Pradesh </option>
                            <option> Jharkhand </option>
                            <option> Karnataka </option>
                            <option> Kerala </option>
                            <option> Madhya Pradesh </option>
                            <option> Maharashtra </option>
                            <option> Manipur </option>
                            <option> Punjab </option>
                            <option> Rajasthan </option>
                            <option> Tamil Nadu </option>
                            <option> Uttar Pradesh </option>
                         
                        </select>
                        </div>
                        <div className ="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="number" className ="form-control" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)} />
                        </div>
                    </div>

                    <div className ="form-row">
                        <div className ="form-group col-md-6">
                        <label for="inputCity">Nationality</label>
                        <select id="inputState" className ="form-control" value={nationality} onChange={(e) => setNationality(e.target.value)}>
                            <option >Select</option>
                            <option > Indian </option>
                            </select>
                        </div>
                        <div className ="form-group col-md-4">
                        <label for="inputState">Category</label>
                        <select id="inputState" className ="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                            
                            <option >Select</option>
                            <option > General </option>
                            <option >OBC</option>
                            <option> SC </option>
                            <option>ST</option>
                        </select>
                        </div>
                        <div className ="form-group col-md-2">
                        <label for="inputZip">Adhar Card Number</label>
                        <input type="number" className ="form-control" id="inputZip" placeholder='16 digits adhar card number' value={adhar} onChange={(e) => setAdhar(e.target.value)} />
                        </div>

                        <div className ="form-row">
                        <div className ="form-group col-md-1">
                        <label for="inputCity"></label>
                       <p>10th</p>
                        </div>
                        <div className ="form-group col-md-3">
                        <label for="inputState">Year</label>
                        <select id="inputState" className ="form-control" value={year} onChange={(e) => setYear(e.target.value)}>
                            <option >Select</option>
                            <option > 2002</option>
                            <option > 2003</option>
                            <option > 2004</option>
                            <option > 2005</option>
                            <option > 2006</option>
                            <option > 2007</option>
                            <option > 2008</option>
                            <option > 2009</option>
                            <option > 2010</option>
                            <option > 2011</option>
                            <option > 2012</option>
                            <option > 2013</option>
                            <option > 2014</option>
                            <option > 2015</option>
                            <option > 2016</option>
                            <option > 2017</option>
                            <option > 2018</option>
                            <option > 2019</option>
                            <option > 2020</option>
                            <option > 2021</option>

                        </select>
                        
                        </div>
                        <div className ="form-group col-md-3">
                        <label for="inputZip">Subjects</label>
                        <input type="number" className ="form-control" id="inputZip" placeholder="All Subjects"  value={subjects} onChange={(e) => setSubjects(e.target.value)}/>
                        </div>
                        <div className ="form-group col-md-2">
                        <label for="inputZip">Board/University</label>
                        <input type="number" className ="form-control" id="inputZip" placeholder="Board/University" value={board} onChange={(e) => setBoard(e.target.value)} />
                        </div>
                        <div className ="form-group col-md-2">
                        <label for="inputZip">Board/University</label>
                        <input type="file" name="file" id="file" onChange={handleUpload}  value={files} onChange={(e) => setFiles(e.target.value)} />
                        {/* {file && <ImageThumb image={file} className='uploadedImage' />} */}
                        </div>

                    </div>


                    <div className ="form-row">
                        <div class="form-group col-md-1">
                        <label for="inputCity"></label>
                        <p>12th</p>
                        </div>
                        <div class="form-group col-md-3">
                        <label for="inputState">Year</label>
                        <select id="inputState" class="form-control">
                            <option >Select</option>
                            <option > 2002</option>
                            <option > 2003</option>
                            <option > 2004</option>
                            <option > 2005</option>
                            <option > 2006</option>
                            <option > 2007</option>
                            <option > 2008</option>
                            <option > 2009</option>
                            <option > 2010</option>
                            <option > 2011</option>
                            <option > 2012</option>
                            <option > 2013</option>
                            <option > 2014</option>
                            <option > 2015</option>
                            <option > 2016</option>
                            <option > 2017</option>
                            <option > 2018</option>
                            <option > 2019</option>
                            <option > 2020</option>
                            <option > 2021</option>

                        </select>
                        
                        </div>
                        <div class="form-group col-md-3">
                        <label for="inputZip">Subjects</label>
                        <input type="number" class="form-control" id="inputZip" placeholder="All Subjects" />
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Board/University</label>
                        <input type="number" class="form-control" id="inputZip" placeholder="Board/University" />
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Board/University</label>
                        <input type="file" name="file" id="file" onChange={handleUpload} accept="image/*"  />
                        {/* {file && <ImageThumb image={file} className='uploadedImage' />} */}
                        </div>

                    </div>

                    
                    <div class="form-row">
                        <div class="form-group col-md-1">
                        <label for="inputCity"></label>
                       <p>Others</p>
                        </div>
                        <div class="form-group col-md-3">
                        <label for="inputState">Year</label>
                        <select id="inputState" class="form-control">
                            <option >Select</option>
                            <option > 2002</option>
                            <option > 2003</option>
                            <option > 2004</option>
                            <option > 2005</option>
                            <option > 2006</option>
                            <option > 2007</option>
                            <option > 2008</option>
                            <option > 2009</option>
                            <option > 2010</option>
                            <option > 2011</option>
                            <option > 2012</option>
                            <option > 2013</option>
                            <option > 2014</option>
                            <option > 2015</option>
                            <option > 2016</option>
                            <option > 2017</option>
                            <option > 2018</option>
                            <option > 2019</option>
                            <option > 2020</option>
                            <option > 2021</option>

                        </select>
                        
                        </div>
                        <div class="form-group col-md-3">
                        <label for="inputZip">Subjects</label>
                        <input type="number" class="form-control" id="inputZip" placeholder="All Subjects" />
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Board/University</label>
                        <input type="number" class="form-control" id="inputZip" placeholder="Board/University" />
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Board/University</label>
                        <input type="file" name="file" id="file" onChange={handleUpload}  />
                        {/* {file && <ImageThumb image={file} className='uploadedImage' />} */}
                        </div>

                    </div>
                        
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-5 mb-5" style={{background: loader ?   '#ccc' : 'rgb(2,2,110)'}}>Submit</button>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default ApplyForm
