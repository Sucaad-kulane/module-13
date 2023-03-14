import { FaLinkedin, FaTwitterSquare, FaGithub } from 'react-icons/fa';

const Contact = ({name, title}) => {
    return <div>
        <section className="front">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGHwmhCFbrbiSUkl-tz4SeNDIjSYU-Bp0Aw&usqp=CAU"/>
        </section>
        <h1>Find me here: </h1>
        <li className="list-inline-item mr-3">
              <a href="#">
                <FaLinkedin className="fa-3x fa-fw" />
              </a> 
            </li>
            <li className="list-inline-item mr-3">
              <a href="#">
                <FaTwitterSquare className="fa-3x fa-fw" />
              </a> 
            </li>
            <li className="list-inline-item mr-3">
              <a href="#">
                <FaGithub className="fa-3x fa-fw" />
              </a> 
            </li>
        
    </div>
}
export default Contact;
