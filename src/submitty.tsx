import React from 'react'
import { HashLink } from 'react-router-hash-link'
import submitty from './work/submitty/submitty.png'
import './work.css'

const Submitty: React.FC = () => {
  return (
    <div className="work-page">
      <HashLink smooth to="/#work">
        <button className="back-btn">← Back</button>
      </HashLink>
      <div className="row">
        <div className="col">
          <h1>Submitty</h1>
          <h3>VSCODE EXTENSION</h3>
          <p>Laid the foundations for the Submitty VSCode extension, including the creation of a UI layout and a mockup version presented to the Submitty team. Developed the extension to enhance efficiency for over 100 students using Submitty within VSCode and improved grading accessibility by integrating Submitty’s APIs for seamless interaction. Utilized TypeScript and HTML, with JWTs for authentication.</p>
        </div>
        <div className="col">
          <img className="work-web-img" src={submitty} alt="Submitty VSCode Extension" />
        </div>
      </div>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </div>
  )
}

export default Submitty