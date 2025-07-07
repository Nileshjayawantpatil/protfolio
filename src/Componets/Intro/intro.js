import React from "react";
import bg from "../../accepts/image.png";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../accepts/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
      <spam className="introtext">Hello,</spam>
      <spam className='Text-content'>I'M<spam className="intro-name">Nilesh <br/>website Designer</spam> </spam>
 
        <p className="introPara">
          I am skilled a a web designer with exprience in creating appleing and
          user friendlly website
        </p>

        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me"  className='btnImg'/>
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
