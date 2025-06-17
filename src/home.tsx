import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home: React.FC = () => {
  return (
    <>
      <header>
        <h1 className="fluid">Hello my name is Sophia!</h1>
      </header>
      <main>
        <section className="content fluid">
          <h2>
            <span aria-hidden="true">I am a&nbsp;</span>
            <span className="sr-only">I am a programmer.</span>
          </h2>
          <ul aria-hidden="true" style={{ "--count": 22 } as React.CSSProperties}>
            <li style={{ "--i": 0 } as React.CSSProperties}>programmer.</li>
            <li style={{ "--i": 1 } as React.CSSProperties}>designer.</li>
            <li style={{ "--i": 2 } as React.CSSProperties}>solver.</li>
            <li style={{ "--i": 3 } as React.CSSProperties}>builder.</li>
            <li style={{ "--i": 4 } as React.CSSProperties}>developer.</li>
            <li style={{ "--i": 5 } as React.CSSProperties}>learner.</li>
            <li style={{ "--i": 6 } as React.CSSProperties}>researcher.</li>
            <li style={{ "--i": 7 } as React.CSSProperties}>creator.</li>
          </ul>
        </section>
        <section className="about-me">
          <h3>About Me</h3>
          <div className="row">
            <div className="col">
              <img src="/headshot.jpg" alt="Sophia Kist" />
            </div>
            <div className="col">
              <p>
                I’m an aspiring front-end developer based in Gresham, OR, with a passion for web and mobile development, as well as UI/UX design. I hold a BS in Computer Science with a minor in Graphic Design from Walla Walla University. I strive to create clean, intuitive interfaces that elevate the user experience.
              </p>
              <p>
                When I’m not coding or designing, you can find me hiking, rock climbing, playing or watching sports (mostly women's sports of course), or hanging out with my friends and family.
              </p>
            </div>
          </div>
        </section>
        <section className="work" id="work">
            <h3>My Work</h3>
            <div id="app" className="container">
                <Link to="/atlas" className="card-wrap work-card">
                    <div className="card">
                    <div className="card-info">
                        <h1>The Atlas</h1>
                        <p>iOS and Web App</p>
                    </div>
                    </div>
                </Link>
                <Link to="/submitty" className="card-wrap work-card">
                    <div className="card">
                    <div className="card-info">
                        <h1>Submitty</h1>
                        <p>VSCode Extension</p>
                    </div>
                    </div>
                </Link>
                <Link to="/grindhaus" className="card-wrap work-card">
                    <div className="card">
                    <div className="card-info">
                        <h1>Grindhaus Coffee Co.</h1>
                        <p>Website</p>
                    </div>
                    </div>
                </Link>
                <Link to="/optima" className="card-wrap work-card">
                    <div className="card">
                    <div className="card-info">
                        <h1>Optima</h1>
                        <p>Type Specimen</p>
                    </div>
                    </div>
                </Link>
            </div>
        </section>
        <section className="contact">
          <h3>Contact Me</h3>
          <div className="contact-row">
            <form className="contact-form" autoComplete="off">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>

              <button type="submit">Send</button>
            </form>
            <div className="contact-info">
              <div>
                <p>Gresham, OR</p>
                <p><a href="tel:5037049954">(503) 704-9954</a></p>
              </div>
              <div className="socials">
                <a href="https://github.com/sophiakist" target="_blank" aria-label="GitHub">
                  <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 2.7 1.1.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.4.3.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .3"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sophia-kist-3375bb237/" target="_blank" aria-label="LinkedIn">
                  <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="fluid">Sophia Kist &copy; 2025</p>
      </footer>
    </>
  )
}

export default Home