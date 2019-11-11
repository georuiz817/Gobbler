import React from 'react';
import '/Users/dawn/gobbler-project/client/src/Css/sponsors.css';
import jet from '/Users/dawn/gobbler-project/client/src/photos/jet.jpg'; 
import butter from '/Users/dawn/gobbler-project/client/src/photos/butter-ball.jpg';
import ups from '/Users/dawn/gobbler-project/client/src/photos/ups-logo.jpeg';
import army from '/Users/dawn/gobbler-project/client/src/photos/Army.png';
import judes from '/Users/dawn/gobbler-project/client/src/photos/st-judes.jpeg';
import nintendo from '/Users/dawn/gobbler-project/client/src/photos/nintendo-logo.jpg'


const Sponsors = () => {
    return (
  <div>
    <div class="row">
      <div class="column">
        <img src={jet} alt="n/a"/>
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