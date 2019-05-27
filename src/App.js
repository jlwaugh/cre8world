import React, { Component } from 'react';
import Projects from './components/GetProject.js';

class App extends Component {
    state = {
        projects: []
    };

    componentDidMount() {
        fetch('https://www.cre8.xyz/api/project?limit=8')
            .then(res => res.json())
            .then((data) => {
                this.setState({ projects: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Projects projects={this.state.projects} />
        )
    }
}

export default App;
