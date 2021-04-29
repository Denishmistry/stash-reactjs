
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import './assets/css/main.css';
import NavBar from './pages/components/navbar';
import ContactSection from "./pages//components/contactus";
import Footer from './pages/components/footer';
import PageWrapper from './pages/pagewrapper';



function App() {
  return (
    <div className="App">
        <Router basename="/">
         <div className="App">
            <div id="page" className="page one-page-style">
                <NavBar/>
                <PageWrapper/> 
                <ContactSection/>
                <Footer/>       
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
