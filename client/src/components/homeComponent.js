import React from 'react'; 
import Doggo from '../photos/doggo.jpg'

const homeComponent = () => {
    return(
<div>
    <div className="mainBlock">
        <img class="rounded float-right" alt="n/a" height="300px" src={Doggo} />
        <h1>Create</h1>
        <p>Your own Thanksgiving dish. One that you'd want to share no matter who it was with. The dish should represent how you feel this holiday.</p>
        <br></br>
        
        <h1>Research</h1>
        <p>Any recipe you'd like. Gobbler allows the donator to optionally put in a recipe for the dish they suggested. If they love it, chanches are they can make it tasty.</p>
        <br></br>
        
        <h1>Smile</h1>
        <p>After the creation our your dish, something special happens. One of our listed sponsors will be donating your created dish to someone in need this Thanksgiving day. Enjoy your time knowing that you've given someone else the chanche too.</p>
        </div>
</div>
 

    )
}



export default homeComponent
