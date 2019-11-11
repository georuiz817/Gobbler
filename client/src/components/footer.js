// functional component # 4
//site footer 
import React from 'react'
import "/Users/dawn/gobbler-project/client/src/Css/footer.css";
import fbPic from "/Users/dawn/gobbler-project/client/src/photos/facebook-logo.png";
import gitHubPic from "/Users/dawn/gobbler-project/client/src/photos/GitHub-Mark.png";
import instaPic from "/Users/dawn/gobbler-project/client/src/photos/Instagram-logo.png";
import linkedinPic from "/Users/dawn/gobbler-project/client/src/photos/linkedin-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="pageContainer">
      <footer className="footer">
          <div className="footerImages">
           <Link to="#"> <img id="fbLogo" src={fbPic} height="30px" alt="n/a"/> </Link> 
           <Link to="#"> <img id="gitLogo" src={gitHubPic} height="30px"  alt="n/a"/> </Link>
           <Link to="#"> <img id="instaLogo" src={instaPic} height="30px"  alt="n/a"/> </Link>
           <Link to="#"> <img id="linkLogo" src={linkedinPic} height="30px"  alt="n/a"/> </Link>
          </div>
       </footer>
    </div>
    )
  }


export default Footer