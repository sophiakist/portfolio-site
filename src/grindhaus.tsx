import React from 'react'
import { HashLink } from 'react-router-hash-link'
import grindhausabout from './work/grindhaus/grindhausabout.png'
import grindhausevents from './work/grindhaus/grindhausevents.png'
import grindhaushome from './work/grindhaus/grindhaushome.png'
import './home.css'

const Grindhaus: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="row">
        <div className="col">
          <h1>Grindhaus</h1>
          <h1>Coffee Co.</h1>
          <h3>WEBISTE FOR MOCK CLIENT</h3>
          <p><strong>Tools: </strong>React, HTML/CSS</p>
          <p>A fictional café website designed and built for a mock client to highlight front-end development and UI/UX skills. The site captures the modern-industrial aesthetic and community-centered vibe of a small artisan coffee shop.</p>
        </div>
        <div className="col">
          <img className="work-web-img" src={grindhaushome} alt="Grindhaus Home Page" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img className="work-web-img" src={grindhausabout} alt="Grindhaus About Page" />
          <p>The events screen was designed to spotlight weekly happenings such as open mic nights, art pop-ups, and community meetups — reinforcing Grindhaus Coffee Co.'s role as a neighborhood gathering space. Each event card is styled to stand out, making it easy for visitors to see what’s coming up and feel encouraged to join.</p>
        </div>
        <div className="col">
          <p>The owner story section adds a personal layer to the site, giving context to the café’s mission and helping establish trust and familiarity. Together, these sections create a sense of place and community that reflects the values behind the brand.</p>
          <img className="work-web-img" src={grindhausevents} alt="Grindhaus Events Page" />
        </div>
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Grindhaus