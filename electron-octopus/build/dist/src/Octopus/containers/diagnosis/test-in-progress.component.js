import React from 'react';
import './checking-serial-can.component.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TestInProgressBG from '../../assets/images/TestInProgress.gif';
var TestInProgressComponent = function (props) {
    var showTestProgress = props.showTestProgress;
    if (showTestProgress === false) {
        return (React.createElement(React.Fragment, null));
    }
    else if (showTestProgress === true) {
        return (React.createElement("div", { className: 'popup-box' },
            React.createElement("div", { className: 'popup-image' },
                React.createElement("img", { src: TestInProgressBG, alt: "We are testing component now. It will not take more than 2 minutes. Please Wait....." })),
            React.createElement("div", { className: 'popup-text' }, "We are testing component now.")));
    }
    else {
        return React.createElement(React.Fragment, null);
    }
};
export default TestInProgressComponent;
//# sourceMappingURL=test-in-progress.component.js.map