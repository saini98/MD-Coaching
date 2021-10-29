import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import NiosClass10th from './NiosClass/NiosClass10th';
import class10th from './SubjectLists/class10th';
import class12th from './SubjectLists/class12th';
import papers from './QuestionPapers/papers'
import { BrowserRouter, Route} from "react-router-dom";
import Contact from './Contact/Contact';
import About from './About/About';

import class10or12th from './OnlineForms/class10or12th';
import NiosClass12th from './NiosClass/NiosClass12th';


function App() {
  return (
    <BrowserRouter>
    
    <Route path="/" exact component={Nav} />
    <Route path="/" exact component={Home} />
    <Route path="/NiosClass10" exact component={NiosClass10th} />
    <Route path="/NiosClass12" exact component={NiosClass12th} />
    <Route path="/SubjectListClass10th" component={class10th} />
    <Route path="/SubjectListClass12th" component={class12th} />
    <Route path="/QuestionPapersClass10th-12th" component={papers} />
    <Route path="/Contact_us" component ={Contact} />
    <Route path="/About_us" component ={About} />
    <Route path="/Online-forms" component={class10or12th} />


    </BrowserRouter>
  
  );
}

export default App;
