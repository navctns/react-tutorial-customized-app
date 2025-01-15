import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Footer from './components/Footer.js';

function App(){
    return (
        <div>
            <Nav/>
            <Promo/>
            <Intro1></Intro1>
            <Intro2></Intro2>
            <Footer/>
        </div>
    )
}

export default App;