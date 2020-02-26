import React from "react";
import { 
    App,
    ControlIdentity,
    FAQ,
    Footer,
    Header,
    HowItWorks,
    Main,
    Selv,
    Benefits,
} from '../components/landing'


/**
 * Component which will display a Landing page.
 */
const Landing: React.FC = () => {
    return (
        <div className="landing-page-wrapper">
            <Header />
            <Main />
            <ControlIdentity />
            <Selv />
            <HowItWorks />
            <Benefits />
            <App />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Landing;