import React from 'react'
import { HashLink } from 'react-router-hash-link'
import grindhaus1 from './work/grindhaus/grindhaus1.svg'
import grindhaus2 from './work/grindhaus/grindhaus2.svg'
import './home.css'

const Grindhaus: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="atlas">
        <div className="work-images">
          <img src={grindhaus1} alt="Grindhaus Page 1" />
            <img src={grindhaus2} alt="Grindhaus Page 2" />
        </div>
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Grindhaus