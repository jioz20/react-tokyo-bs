import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;


export class TrafficLight extends Component {

    constructor()
    {
        super();

        this.state = {
            'currentColor': GREEN
        }

        setInterval(() => {
            this.setState({
                'currentColor': this.getNextColor(this.state.currentColor)
            })
        }, 1000)
    }

    getNextColor(color)
    {
        switch(color)
        {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
       
        const {currentColor} = this.state;
        console.log("Rendering ...", currentColor);

        return (
            <div className="TrafficLight">
                <div className={classNames('blub', 'red', {'active': currentColor === RED})}></div>
                <div className={classNames('blub', 'orange', {'active': currentColor === ORANGE})}></div>
                <div className={classNames('blub', 'green', {'active': currentColor === GREEN})}></div>
            </div>
        );
    }
}

export default TrafficLight;
