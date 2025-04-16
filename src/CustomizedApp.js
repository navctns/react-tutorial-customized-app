import NavDynamic from './components/Nav.js';
import Promo from './components/Promo.js';
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Footer from './components/Footer.js';
import TheHeading from './components/passing-props/TheHeading.js';
import TheBag from './components/special-prop-children/TheBag.js';
import TheApples from './components/special-prop-children/TheApples.js';
import ThePears from './components/special-prop-children/ThePears.js';
import ThePromo from './components/styling-methods/ThePromo.js';
import ThePromoInlineStyling from './components/styling-methods/ThePromoInlineStyling.js';
import ThePromoInlineStylingUsingOutsideStyleObject from './components/styling-methods/ThePromoInlineStylingUsingOutsideStyleObject.js';
function App(){
    return (
        <div className="container">
            <NavDynamic items={["Home","About","Services","Contact"]}/>
            <Promo/>
            <Intro1></Intro1>
            <Intro2></Intro2>
            <Footer/>
            <h4>Passing Props</h4>
            <p>Heading component is created passing props to it</p>
            <TheHeading firstName="Jojo"></TheHeading>
            <TheHeading firstName="Ancy"></TheHeading>
            <h4>Usage of special prop: children</h4>
            <p>It has some similarity with slot in Vue</p>
            <h3>Apple component as a child inside Bag component</h3>
            <TheBag children={<TheApples color="yellow" number="5" />}></TheBag>
            <TheBag children={<ThePears friend="Alexy" />}></TheBag>
            <h3>Apple/Pears component as a child inside Bag component - Different syntax</h3>
            <TheBag>
                <TheApples color="yellow" number="5" />
            </TheBag>
            <h3>Methods of Styling</h3>
            <p>Here are different methods of styling</p>
            <h4>By adding link element to index.html to add css file</h4>
            <ThePromo heading="Promo" promoSubHeading="Sub Heading"></ThePromo>
            <h4>Inline Styling</h4>
            <ThePromoInlineStyling heading="Promo" promoSubHeading="Sub Heading"></ThePromoInlineStyling>
            <h4>Inline Styling ( using outside Style object)</h4>
            <ThePromoInlineStylingUsingOutsideStyleObject heading="Promo" promoSubHeading="Sub Heading"></ThePromoInlineStylingUsingOutsideStyleObject>
        </div>
    )
}

export default App;