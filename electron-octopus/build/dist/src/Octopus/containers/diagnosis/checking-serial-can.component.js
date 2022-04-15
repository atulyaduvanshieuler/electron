import React from 'react';
import './checking-serial-can.component.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TestingSerCAN from '../../assets/images/TestingSerialCAN.gif';
var VerifyingSerialComponent = function (props) {
    var showSer = props.showSer;
    if (showSer === false) {
        return (React.createElement(React.Fragment, null));
    }
    else if (showSer === true) {
        return (React.createElement("div", { className: 'popup-box' },
            React.createElement("div", { className: 'popup-image' },
                React.createElement("img", { src: TestingSerCAN, alt: "Checking Serial Connection. Please Wait....." })),
            React.createElement("div", { className: 'popup-text' }, "Please Wait... While i am checking your Serial and CAN connections.")));
    }
    else {
        return React.createElement(React.Fragment, null);
    }
};
export default VerifyingSerialComponent;
//# sourceMappingURL=checking-serial-can.component.js.map