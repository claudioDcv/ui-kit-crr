import React, { Component } from 'react';

class Wizard extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="ui-kit-crr-step">
                {children}
            </div>
        );
    }
}

export default Wizard;