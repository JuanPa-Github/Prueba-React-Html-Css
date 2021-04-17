import React, { useRef, useState, Component } from "react";
import '../css/container.css';
import Side from './Side.jsx';

export default class Container extends Component {
    render() {
        return (
            <div id="container">
                <Side></Side>
                <div id="principal">

                </div>
                <div class="clearfix">
                </div>
            </div>
        )
    }
}
