import React from "react";
import './profile.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div id="container">

        <header>
            <div className="quoteoftheday">Profile</div>
            <div className="name">Memon.</div>
        </header>

        <article>

            <div className="quote">
                <h1>A Coders Life: Problematic but Charismatic.</h1>
            </div>

            <div className="quoteby">
                <h4>Unzilla Memon</h4>
            </div>

        </article>

        <footer>

            <div className="skills">
                <h6>Menu</h6>
                <ul>
                    <li><Link to="/">Introduction</Link></li>
                    <li><Link to="education">Education</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>


        <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>      
        </Switch>



        </footer>
    </div>

</Router>
  );
}

function Introduction() {
    return <div className="content">
        <p>I, Unzilla Memon is a Front-End Developer.
          I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </p>
    </div>;
  }

function Education() {
    return <div className="content">
    <ul align="left">
        <li><p>BE in Software Engineering(3.97 CGPA)                              
            <br />
            Mehran University of Engineering and Technology,
            <br />Jamshoro, Sindh Pak</p>
        </li>
        <li><p>Fronted Developer at <a href="https://interns.pk/">interns.pk</a></p></li>
    </ul>
     </div>;
  }
  
  
  
  function Contact() {
    return <div className="content">
        <p>Email: <a href="17sw29@students.muet.edu.pk">17sw29@students.muet.edu.pk</a></p>
        <p>Mobile No: 03354220594</p>
    </div>;
  }