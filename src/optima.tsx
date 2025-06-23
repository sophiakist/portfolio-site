import React from 'react'
import { HashLink } from 'react-router-hash-link'
import optima1 from './work/optima/optima1.svg'
import optima2 from './work/optima/optima2.svg'
import optima3 from './work/optima/optima3.svg'
import './home.css'

const Optima: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="row">
        <div className="col">
          <h1>Optima</h1>
          <h3>TYPE SPECIMEN</h3>
          <p>A school project designed to showcase the elegance and versatility of the Optima typeface. This specimen highlights the font’s unique blend of classical proportions and modern minimalism, emphasizing its humanist roots and distinctive stroke contrast. The layout and presentation were crafted to reflect the refined beauty Optima is known for, combining thoughtful typography with visual storytelling to honor its timeless design.</p>
        </div>
        <div className="col">
          <img className="work-page-img" src={optima1} alt="Optima Type Specimen Page 1" />
        </div>
      </div>
      <div className="optima-row">
        <img className="work-page-img" src={optima2} alt="Optima Type Specimen Page 2" />
      </div>
      <div className="optima-row">
        <img className="work-page-img" src={optima3} alt="Optima Type Specimen Page 3" />
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Optima