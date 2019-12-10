import React from 'react';
import butter from '/Users/dawn/gobbler-project/client/src/photos/butter-ball.png';
import ups from '/Users/dawn/gobbler-project/client/src/photos/upsLogo.jpeg';
import army from '/Users/dawn/gobbler-project/client/src/photos/armyL.png';
import judes from '/Users/dawn/gobbler-project/client/src/photos/st-judes.jpeg';
import nintendo from '/Users/dawn/gobbler-project/client/src/photos/nintendoL.png'


const Sponsors = () => {
    return (
  <div>
    <h1>Every time a Gobbler dish is created, it's donated to a person in need.</h1>
    <h1>Please take the time to give credit to the amazing companies who help fund Gobbler today.</h1>
    <h1>Without them this mission would not be possible.</h1>
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