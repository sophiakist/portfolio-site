import React from 'react'
import { HashLink } from 'react-router-hash-link'
import atlaslogin from './work/atlas/atlaslogin.png'
import atlashome1 from './work/atlas/atlashome1.png'
import atlashome2 from './work/atlas/atlashome2.png'
import atlasmenu1 from './work/atlas/atlasmenu1.png'
import atlasmenu2 from './work/atlas/atlasmenu2.png'
import atlasmenu3 from './work/atlas/atlasmenu3.png'
import atlasreserve from './work/atlas/atlasreserve.png'
import atlasscan from './work/atlas/atlasscan.png'
import atlasweb from './work/atlas/atlasweb.png'
import './work.css'

const Atlas: React.FC = () => {
  return (
  <>
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="row">
        <div className="col">
          <h1>The Atlas</h1>
          <h3>AN IOS AND WEB APP</h3>
          <p>Developed by students for students, this project aimed to boost community engagement with Walla Walla University’s campus coffee shop. Created as part of our senior project, I led the design and development of the user interface, ensuring a welcoming and user-friendly experience.</p>
          <div className="metrics">
            <div className="row">
              <div className="col">
                <h3>Imapct:</h3>
                <p>Reached over 1,000 users, including students, faculty, and community members.</p>
              </div>
              <div className="col">
                <h3>Features:</h3>
                <p>Supports WWU Single Sign-On (SSO) for students and faculty, with a guest access option for community members.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlaslogin} alt="Atlas Login Page" />
        </div>
        <div className="col">
          <h2>Brand Design</h2>
          <div className="brand-colors">
            <div className="color-item">
              <div
                className="color-box"
                style={{ backgroundColor: '#333F48' }}
              ></div>
              <div className="color-info">
                <p><strong>RGB:</strong> 51, 63, 72</p>
                <p><strong>HEX:</strong> 333F48</p>
                <p><strong>CMYK:</strong> 65, 43, 26, 78</p>
              </div>
            </div>
            <div className="color-item">
              <div
                className="color-box"
                style={{ backgroundColor: '#CD7C5B' }}
              ></div>
              <div className="color-info">
                <p><strong>RGB:</strong> 205, 124, 91</p>
                <p><strong>HEX:</strong> CD7C5B</p>
                <p><strong>CMYK:</strong> 0, 53, 69, 9</p>
              </div>
            </div>
            <div className="color-item">
              <div
                className="color-box"
                style={{ backgroundColor: '#E4D9C5' }}
              ></div>
              <div className="color-info">
                <p><strong>RGB:</strong> 228, 217, 197</p>
                <p><strong>HEX:</strong> E4D9C5</p>
                <p><strong>CMYK:</strong> 0, 6, 16, 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Home Screen</h1>
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlashome1} alt="Atlas Home Screen 1" />
        </div>
        <div className="home-details">
          <div className="col">
            <h3>Quick Info Dropdowns</h3>
            <p>Allows for fast access to key details</p>
            <h3>Announcements</h3>
            <p>Keeps users in the loop with latest events, updates, and news from The Atlas</p>
          </div>
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlashome2} alt="Atlas Home Screen 2" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Menu Screen</h1>
          <p>A dynamic, easy-to-update menu managed by staff, giving users a clear view of current offerings.</p>
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlasmenu1} alt="Atlas Menu Screen 1" />
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlasmenu2} alt="Atlas Menu Screen 2" />
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlasmenu3} alt="Atlas Menu Screen 3" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Scan Screen</h1>
          <p>Engaging QR code rewards system. Each scan fills a “bean,” and once all beans are white, users can earn a free drink.</p>
          <h1>Reservation Screen</h1>
          <p>Simple booking system that lets customers reserve tables, the full space, club event slots, or drip coffee service for special occassions.</p>
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlasscan} alt="Atlas Scan Screen" />
        </div>
        <div className="col">
          <img className="work-phone-img" src={atlasreserve} alt="Atlas Reservation Screen" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Desktop Experience</h1>
          <p>The Atlas on desktop offers a spacious layout with expanded menus and bold announcements, tailored for easier navigation and visibility on larger screens.</p>
        </div>
        <div className="col">
          <img className="work-web-img" src={atlasweb} alt="Atlas Web Experience" />
        </div>
      </div>
      <footer>
        <p>Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  </>
  )
}

export default Atlas