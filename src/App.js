import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'
import { SocialMediaIconsReact } from 'social-media-icons-react';

function App() {
return (
<div className="App">
  <div className='card-container'>
    <div className='card'>
      <div className='card-image'></div>
      <div className='card-content'>
        <h2 className='card-title'>Sergio Cortes</h2>
        <p className='card-profession'>Developer</p>
        <p className='card-website'>www.sergiocortes.codes</p>
        <div className='card-buttons'>
          <button className='card-buton-emaitl'>Email</button>
          <button className='card-button-linked'>LinkedIn</button>
        </div>
        <div className='card-information'>
          <h3>About</h3>
          <p> Rect hs devloper jaskjskhjskhjkdhjkhsahjkh jkh jkhjkshgsghjsgh ghg hfghd d fgdfg d kj kj kj kj klj kjkl
          </p>
          <h3>Interests</h3>
          <p> Rect hs devloper jaskjskhjskhjkdhjkhsahjkh jkh jkhjkshgsghjsgh ghg hfghd d fgdfg d kj kj kj kj klj kjkl
          </p>
        </div>
      </div>
      <div className="card-social-icons">

        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" url='https://twitter.com/' />

        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="facebook" url="https://www.facebook.com" />

        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="instagram" url="https://www.instagram.com" />

        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="github" url="https://github.com" />

      </div>
    </div>
  </div>
</div>
);
}

export default App;