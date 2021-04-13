import React from 'react';
import AboutSection from './components/aboutsection';
import SkillSection from "./components/skillsection";
import Services from "./components/services";
import Navbar from "./components/navbar";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <AboutSection/>
                <Services/>
                <SkillSection/>
            </div>
        );
    }
}

export default App;
