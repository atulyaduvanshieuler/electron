import React from "react";
// @ts-ignore
import loader from '../../../assets/images/loader.svg';
import './loader.component.css';
var Loader = function (props) {
    return (React.createElement("div", { className: props.type },
        React.createElement("img", { src: loader, alt: loader }),
        props.message ? React.createElement("div", null, props.message) : ''));
};
export default Loader;
//# sourceMappingURL=loader.component.js.map