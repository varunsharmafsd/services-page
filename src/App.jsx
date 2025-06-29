import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  useEffect(() => {
    document.body.style.margin = 0;
    document.documentElement.style.height = '100%';
    document.getElementById('root').style.height = '100%';
  }, []);

  return (
    <div className="containers">
      <Helmet>
        <title>Sharma Solutions | Education & Services</title>
        <meta name="description" content="Get academic support, LIC investment guidance, and admission help. Sharma Solutions is your trusted partner." />
      </Helmet>

      <div className="cards">
        <img src="/logo.png" alt="Logo" className="logo" loading="lazy" />
        <h1 className="heading">Sharma Solutions</h1>
        <p className="subheading">Your Trusted Partner in Education & Services</p>

        <p className="message">
          This page showcases our services. A full-featured website with complete details and advanced features is launching soon — final updates are in progress, and the Final commits are currently under review.
        </p>



        <h3 className="subheading" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Our Services:</h3>
        <p className="message">
          📚 Academic coaching for Class 1st to 10th (All Subjects)<br />
          🖨️ Printing, passport-size photos, online form filling & more <br />
          📘 Help with 10th/12th Open Schooling (BOSSE & NIOS)<br />
          🎓 Guidance for UG & PG admissions across India (Compare 45+ Universities)<br />
          🧠 Skill-based learning for real-world success<br />
          💰 Get LIC investment guidance — from a brand trusted by over <strong>250 million people</strong> across India.<br /><br />
          Get all services under one roof .
         
        </p>

        <div className="notice">
          🚧 Full Featured Website launch in progress...  final commits under review.
        </div>

        <div className="cta-container text-center py-5 ">
          <h2 className="cta-title mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="cta-description mb-4">
            Don't wait! Book a free trial class today or get in touch with us to learn more about our courses and offerings.
          </p>

          {/* Row 1: Call & Email */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-3">
            <a
              href="tel:+918920869603"
              className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
            >
              <FontAwesomeIcon icon={faPhone} /> +91 89208-69603
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=scc.edu.in@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
            >
              <FontAwesomeIcon icon={faEnvelope} /> scc.edu.in@gmail.com
            </a>
          </div>
        </div>
        <br></br>
        <p className="bottomLine"> • Learn •  &nbsp;&nbsp;&nbsp;&nbsp;  • Decide • &nbsp;&nbsp;&nbsp;&nbsp; • Succeed •</p>
      </div>


      <div className="whatsapp">
        <span className="tooltip">Chat with us</span>

        <a href="https://wa.me/918920869603" target="_blank" rel="noopener noreferrer">
          <img src="/ws.jpg" alt="WhatsApp" className="whatsappImg" loading="lazy" />
        </a>
      </div>


      <footer className="footer">
        <p>© 2025 Sharma Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
