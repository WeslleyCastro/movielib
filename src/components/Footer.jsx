import "./Footer.css"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

function Footer() {
  return ( 
    <footer>
      <ul>
        <li><a href="https://www.linkedin.com/in/weslley-castro-da-silva/" target="_blank"><BsLinkedin/></a></li>
        <li><a href="https://github.com/WeslleyCastro" target="_blank"><BsGithub/></a></li>
        <li><a href="https://www.instagram.com/weslleyrds_/" target="_blank"><BsInstagram/></a></li>
      </ul>
      <small className="info">Weslley Castro | 2023</small>
    </footer>
   );
}

export default Footer;