import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Wizard from './components/wizard/Wizard';
import Step from './components/wizard/Step';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialStep: 0,
      wizardExample: 0,
      countSteps: 0,
    };
    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.Wizard = React.createRef();
  }

  handlerOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      countSteps: event.additionalProps.count,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Wizard
            ref={this.Wizard}
            onChange={this.handlerOnChange}
            name="wizardExample"
            initialStep={this.state.initialStep}
          >
            <Step title="Title 01">first content</Step>
            <Step title="Title 02">second content</Step>
            <Step title="Title 03">third content</Step>
            <Step title={(<span><strong>4</strong> El</span>)}>
              other content
            </Step>
            <Step title="Title 05">
              <div>last content</div>
            </Step>
          </Wizard>
          <hr />
          <button
            onClick={() => this.Wizard.current.onPrevious()}
            disabled={this.state.wizardExample === 0}
          >Prev</button>
          <button
            onClick={() => this.Wizard.current.onNext()}
            disabled={this.state.wizardExample + 1 === this.state.countSteps}
          >Next</button>
        </div>
      </div>
    );
  }
}

export default App;
