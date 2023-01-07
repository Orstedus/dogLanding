import './styles/styles.scss'
import logo from './styles/materials/logo.png'
import upshape from './styles/materials/upshape.png'
import downshape from './styles/materials/downshape.png'
import paws from './styles/materials/paws.png'

import instagram from './styles/materials/socials/instagram.png'
import facebook from './styles/materials/socials/facebook.png'
import twitter from './styles/materials/socials/twitter.png'
import whatsup from './styles/materials/socials/whatsup.png'

function App() {
  return (
    <div className="App">
        <div className="header">
          <img src={logo} alt="logo" className="logo"/>
          <img src={upshape} alt="logo" className="upshape"/>
          <div className="navbar">
            <p>Home</p>
            <p>Info</p>
            <p>Gallery</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="content">
          <h1>SHOW YOUR LOVE</h1>
          <h2>Let`s be friends</h2>
          <p>Lorem ipsum dolor sit ametetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>
        <div className="footer">
          <img src={downshape} alt="downshape" className="downshape"/>
          <img src={paws} alt="paws" className="paws"/>
          <div className="fblock">
            <img src={instagram} alt="instagram" className="socicon"/>
            <img src={facebook} alt="facebook" className="socicon"/>
            <img src={twitter} alt="twitter" className="socicon"/>
            <img src={whatsup} alt="whatsup" className="socicon"/>
            <p>www.yoursite.com</p>
          </div>
        </div>
    </div>
  );
}

export default App;
