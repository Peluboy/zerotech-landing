import './App.css';
import Calender from './components/Calender';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className='leftSection'>
        
        <div className='nav'>
          <Navbar />
        </div>

        <div className='heroSection'>
          <div className='header'>
            <h5>Get started with Zebrotech</h5>
            <h2>What are you looking up-to?</h2>
            <Search placeholder='Looking for an IT service' />
          </div>

          <div className='grid'>
            <div className='div1'>
            <img src="./assests/cloud.svg" style={{ width:70, right: 10, top:0 }} alt=""/>
              <h3>Cloud</h3>
            </div>

            <div className='div2'>
              <h3>Analytics</h3>
            <img src="./assests/analytics.svg" style={{ width:40, right: 0, top:85 }} alt=""/>
            </div>

            <div className='div3'>
              <h3>Get Free Quotation & No Consultation Fee!</h3>
              <img src="./assests/quotation.svg" style={{ width:230, bottom:5 }} alt=""/>
            </div>

            <div className='div4'>
              <img src="./assests/UI-1.svg" style={{ width:40, right: 20, top:20 }} alt=""/>
              <h3>UI/UX Design</h3>
              <img src="./assests/UI-2.svg" style={{ width:80, bottom:15 }} alt=""/>
            </div>

            <div className='div5'>
              <img src="./assests/CRM-1.svg" style={{ width:40, left: 20, top:25 }} alt=""/>
              <h3>CRM / ERP / ECM / Full Stack / ETL Solutions</h3>
              <img src="./assests/CRM-2.svg" style={{ width:70, right:10, bottom:0 }} alt=""/>
            </div>

            <div className='div6'>
              <img src="./assests/web.svg" style={{ width:40, right: 20, top:20 }} alt=""/>
              <h3>Web / Mobile</h3>
            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='socialMedia'>
            <a href="#">Facebook</a>
            <span className='separator'>|</span>
            <a href="#">LinkedIn</a>
            <span className='separator'>|</span>
            <a href="#">Twitter</a>
          </div>

          <div className='privacy'>
            <a href="#">Privacy Policy</a>
          </div>

        </div>

      </div>
      <div className='rightSection'>
        <div className='rightContainer'>
          <div className='arrow'>
            <img src="./assests/arrow-1.svg" style={{ width:30, right: 20, top:20 }} alt=""/>
          </div>
          <div className='title'>
            <h5>Book a meeting with Consultant.</h5>
            <p>Pick any one</p>
          </div>
          <div className='grps'>
            <div className='grp-1'><h3>We are a <strong>New Startup</strong></h3></div>
            <div className='grp-2'><h3>We are a Mid-Level</h3></div>
            <div className='grp-3'><h3>We are a Big Company</h3></div>
          </div>
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default App;
