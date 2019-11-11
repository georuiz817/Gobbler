import React from 'react';
import '/Users/dawn/gobbler-project/client/src/Css/sponsors.css';
import butter from '/Users/dawn/gobbler-project/client/src/photos/butter-ball.png';
import ups from '/Users/dawn/gobbler-project/client/src/photos/upsLogo.jpeg';
import army from '/Users/dawn/gobbler-project/client/src/photos/armyL.png';
import judes from '/Users/dawn/gobbler-project/client/src/photos/st-judes.jpeg';
import nintendo from '/Users/dawn/gobbler-project/client/src/photos/nintendoL.png'


const Sponsors = () => {
    return (
  <div>
    <div class="row">
      <div class="column">
        <img src={butter} alt="n/a"/>
        <img src={ups} alt="n/a"/>
        <img src={army} alt="n/a"/>
        <img src={nintendo} alt="n/a"/>
        <img src={judes} alt="n/a"/>
      </div>
    </div>
  </div>
    )
  }


export default Sponsors