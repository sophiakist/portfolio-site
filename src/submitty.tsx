import React from 'react'
import { HashLink } from 'react-router-hash-link'
import submitty from './work/submitty/submitty.svg'
import './home.css'

const Submitty: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="atlas">
        <div className="work-images">
          <img src={submitty} alt="Submitty" />
        </div>
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Submitty