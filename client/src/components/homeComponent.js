import React from 'react'; 
import homeLogo from "../photos/large-logo.png";

const homeComponent = () => {
    return(
    <div>
        <img id="gobblerHeader" src={homeLogo} alt="n/a"/>
        <hr className="borderh1"></hr>
    <div className="mainBlock">
        <div className="homeBlockOne">
        
        <p>Create</p>
        <span>Your own Thanksgiving dish. One that you'd want to share no matter who it was with. The dish should represent how you feel this holiday.</span>
        </div>
        <br></br>

        <div className="homeBlockTwo">
            <p>Research</p>
            <span>Any recipe you'd like. Gobbler allows the donator to optionally put in a recipe for the dish they suggested. If they love it, chanches are they can make it tasty</span>
        </div>

       
        <br></br>

        <div className="homeBlockThree">
            <p>Smile</p>
            <span>After the creation our your dish, something special happens. One of our listed sponsors will be donating your created dish to someone in need this Thanksgiving day. Enjoy your time knowing that you've given someone else the chanche too.</span>
        </div>
        </div>
    </div>
         )
}

export default homeComponent
