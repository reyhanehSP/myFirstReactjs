import React from 'react';
import Navbar from "./components/navbar";
import AboutSection from './components/aboutsection';
import Services from "./components/services";
import Works from "./components/works";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <AboutSection/>
                <Services/>
                <Works/>
            </div>
        );
    }
}

export default App;
