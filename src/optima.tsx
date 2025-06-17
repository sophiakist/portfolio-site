import React from 'react'
import { HashLink } from 'react-router-hash-link'
import optima1 from './work/optima/optima1.svg'
import optima2 from './work/optima/optima2.svg'
import optima3 from './work/optima/optima3.svg'
import './home.css'

const Optima: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="atlas">
        <div className="work-images">
          <img src={optima1} alt="Optima Page 1" />
          <img src={optima2} alt="Optima Page 2" />
          <img src={optima3} alt="Optima Page 3" />
        </div>
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Optima