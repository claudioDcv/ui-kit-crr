import React, { Component, Children } from 'react';

import './Wizard.css';
import Dots from './components/Dots';
import CurrentTitle from './components/CurrentTitle';
import Page from './components/Page';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            currentStep: props.initialStep,
        };
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.children.length > state.steps) {
            let old = true;
            let currentTitle = '';
            return {
                ...state,
                steps: props.children.map((e, i) => {
                    const isCurrent = props.initialStep === i;
                    if (isCurrent) {
                        old = false;
                        currentTitle = e.props.title;
                    }
                    return {
                        element: e,
                        current: isCurrent,
                        className: isCurrent ? 'current' : (old ? 'old' : ''),
                        title: e.props.title,
                    };
                }),
                currentTitle,
            }
        }
        return state;
    }

    handlerOnChange(event = null, index) {
        let currentTitle = '';
        const steps = this.state.steps.map((e, i) => {
            if( i === index ) {
                currentTitle = e.element.props ? e.element.props.title : '';
            }
            return {
                ...e,
                current: i === index,
                className: i === index ? 'current' : (i < index ? 'old' : ''),
            };
        });
        this.setState({ steps, currentTitle, currentStep: index }, () => {
            this.props.onChange({
                target: {
                    name: this.props.name,
                    value: index,
                },
                additionalProps: {
                    count: steps.length,
                },
            });
        });
    }

    getChildrenClassName(index) {
        const { steps } = this.state;
        return steps[index].current ? 'current' : '';
    }

    onNext() {
        const step = this.state.currentStep + 1;
        if (step < this.state.steps.length) {
            this.handlerOnChange(null, step);
        }
    }

    onPrevious() {
        const step = this.state.currentStep - 1;
        if (step >= 0) {
            this.handlerOnChange(null, step);
        }
    }

    render() {
        const { steps, currentTitle } = this.state;
        const { children } = this.props;

        return (
            <div className="ui-kit-crr-wizard">

                <Dots count={steps.length} steps={steps} onClick={this.handlerOnChange} />
                <CurrentTitle>{currentTitle}</CurrentTitle>
                <div className="ui-kit-crr-wizard__steps">
                 {Children.map(children, (e, i) => (
                    <Page key={i} className={this.getChildrenClassName(i)}>
                        {e}
                    </Page>
                 ))}
                 </div>
            </div>
        );
    }
}

export default Wizard;