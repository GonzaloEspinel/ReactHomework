import React from "react";
import "./footer.css";
import github from "../../image/github.png";
import linkedin from "../../image/linkedin.png";
import stackoverflow from "../../image/stackoverflow.png";



const Footer = () => (
 <div className="card text-center border-0 footer">
     <div className="card-header">
     <h6>Copyright 2018 -- Gonzalo Espinel contact me at gonzaloespinel@hotmail.com</h6>
     {/* <Link to="https://github.com/GonzaloEspinel"><img className="icon-Footer rounded-circle" alt="github" src={github} /></Link> */}
            <a href="https://github.com/GonzaloEspinel" target="_blank"><img className="icon-Footer rounded-circle" alt="github" src={github} /></a>
            <a href="https://www.linkedin.com/in/gonzalo-espinel" target="_blank"><img className="icon-Footer rounded-circle" alt="linkedin" src={linkedin} /></a>
            <a href="https://stackoverflow.com/users/9249207/gonzalo" target="_blank"><img className="icon-Footer rounded-circle" alt="stackflow" src={stackoverflow} /></a>
    
        </div>
   </div>
);

export default Footer;
