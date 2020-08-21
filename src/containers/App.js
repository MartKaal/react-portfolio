import React, { Component } from 'react';
import './App.css';

import Wrapper from '../components/UI/Wrapper/Wrapper';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Nav />
            </Wrapper>
        );
    }
}

export default App;
