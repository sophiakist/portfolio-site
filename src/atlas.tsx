import React from 'react'
import { HashLink } from 'react-router-hash-link'
import atlas1 from './work/atlas/atlas1.png'
import atlas2 from './work/atlas/atlas2.png'
import atlas3 from './work/atlas/atlas3.png'
import atlas4 from './work/atlas/atlas4.png'
import atlas5 from './work/atlas/atlas5.png'
import './home.css'

const Atlas: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="atlas">
        <div className="work-images">
          <img src={atlas1} alt="Atlas Page 1" />
          <img src={atlas2} alt="Atlas Page 2" />
          <img src={atlas3} alt="Atlas Page 3" />
          <img src={atlas4} alt="Atlas Page 4" />
          <img src={atlas5} alt="Atlas Page 5" />
        </div>
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Atlas