import React from 'react'; 
import '/Users/dawn/gobbler-project/client/src/Css/home.css'

const homeComponent = () => {
    return(
    <div>
        <h1 id="gobblerHeader">Gobbler</h1>
        <hr className="borderh1"></hr>
        <ol className="gobblerList">
            <li>Create your ideal Thanksgiving dish using our Gobbler form.</li>
            <li>Smile! Your Gobbler dish will be replicated by one of our volunteers
                and served to a person in need this Thanksgiving day.
            </li>
        </ol>
    </div>
         )
}

export default homeComponent
