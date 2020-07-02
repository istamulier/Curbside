import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
constructor(props) {
  super(props)
}

render () { if (5<10) {
  return (
    <div>
      <h1 className="openhead"> Writings by and for Oakland's Unhoused Communities. </h1>
      <h3> Select housing and economic justice projects you're interested in, and find readings related to each. </h3>
      
      
      
      <p className="button-container">
        <a href="http://www.37mlk.com" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left" />37MLK Community</a>
        <a href="#/Action2" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Street Spirit</a>
        <a href="#/Action3" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left" />Love and Justice Org</a>
        <a href="#/Action4" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Village: Feed the People</a>
        <a href="#/Action5" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Street Sheet</a>
        <a href="#/Action1" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Trans Housing Network</a>
        <a href="#/Action2" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Critical Resistance</a>
        <a href="#/Action3" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>East Oakland Collective</a>
        <a href="#/Action4" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Where Do We Go Berkeley</a>
        <a href="#/Action5" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Resource Generation</a>
        <a href="#/Action1" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Causa Justa</a>
        <a href="#/Action2" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Punks With Lunch</a>
        <a href="#/Action3" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Black Housing Union</a>
        <a href="#/Action4" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Mission Graduates</a>
        <a href="#/Action5" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left"/>Anti-Eviction Mapping Project</a>
        <a href="#/Action5" className="button"><img src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-2/512/Hashtag_hex_sign-512.png" width="18" height="18" alt="" align="left" />Anti-Displacement Coalition</a>
      </p>




      <Link to="/signup"><button type="button" className="homepage-signup-button">Get Started</button></Link>
    
      <h4>Already have an account? <Link to="/login">Sign In</Link></h4>

      <h3 className="greenfistbar">  Articles on the housing crisis   <img className="greenfist" src="https://www.iconspng.com/uploads/eco-green-power-icon/eco-green-power-icon.png" width="38" height="38" />    By those most impacted  <img className="greenfist" src="https://www.iconspng.com/uploads/eco-green-power-icon/eco-green-power-icon.png" width="38" height="38"/>  An archive of solidarity </h3>
      <div className="noprofitheader">People over profit.</div>
      <div className="noprofit">We don't charge membership, target you with ads, or sell your data. Ever.</div>
      <div class="row">
        <div class="column"> <div className="col1"><Link to="/signup"><button type="button" className="homepage-signup-button-2">Get Started</button></Link></div></div>
        <div class="column">We do things differently.<div className="wediff">At Curbside, we believe the most important voices regarding the Bay's housing crisis and its solutions are those of unhoused people themselves, and other folks whose knowedge of homelessness comes from lived experiences and not ivory tower degrees. Curbside collates and archives a diversity of voices from Oaklanders who are unhoused, formerly unhoused, and/or precariously housed individuals in solidarity with their unhoused neighbors. We take inspiration from other unhoused-led publications like Street Spirit, Street Sheet, and honor the wisdom and power of the Oakland's curbside communities. </div></div>
      </div>
    <div className="linebreak">_____________________________________________</div>
    <div class="row2">
      <div class="column2">Over 4,000 Oaklanders<br></br>are currently<br></br>homeless. </div>
        <div className="column3"><div className="qmark">"</div>In Oakland, the Bay Area’s deep-rooted housing crisis is starkly visible. In makeshift encampments, the city's homeless live in tents, old cars, and mobile homes clustered together in parking lots. Vacant houses, all chipped paint and rotting wood, stand feet away from newly renovated properties that tech industry transplants would swoop up in a heartbeat.
        <br></br>
        <br></br>
        Rachel Hahn
        </div>
    </div>
    <div className="onearchiveheader"> One archive. Unlimited solidarity. </div>
    <div className="onearchive"><br></br>Read stories from multiple liberation projects throughout Oakland.<br></br>Join now: We all do better when we all do better.</div>
      <div className="linebreak">_____________________________________________</div>
      <div className="lastheadline">Difference isn't our deficit;<br></br>it's our operating system.</div>
      <Link to="/signup"><button type="button" className="homepage-signup-button-3">Get Started</button></Link>
    
      <div className="navbar-bottom">
        <a href="#/"><img src="http://lettersandnumbers.org/freealphabetletters/black/alphabet_letter_c.jpg" width="70" height="70"></img></a>
        <a href="http://www.37mlk.com">Read more about 37MLK, a curbside community founded by this site's developer</a>
        <a href="#contact">Contact 37MLK or this site's developer.</a>
        <a href="http://www.facebook.com/37MLKgarden"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" width="57" height="57"></img></a>
      </div>
    
    </div>

   

  )}
}


}

export default HomePage