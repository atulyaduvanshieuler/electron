import React, { useState } from 'react';
import { Button } from '@mui/material';
import { getRequest } from '../../api-service';
import { useHistory } from 'react-router-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import './run-tests.component.css';
import './start-testing.component.css';
import VerifyingSerialComponent from './checking-serial-can.component';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import octopusBG from '../../assets/images/Octopus.gif';
var startTestingComponent = function () {
    var history = useHistory();
    var _a = useState('basic-body'), cssClass = _a[0], updateCSSClass = _a[1];
    var _b = useState(false), serWaiting = _b[0], updateserWaiting = _b[1];
    var onSubmit = function () {
        //this will update state, so that we know serial and CAN components are being checked now.
        updateserWaiting(true);
        //this will change css class and will basically blur the background
        updateCSSClass('blur-basic-body');
        getRequest('api/v1/test/connect-check-ser-can', {})
            .then(function (res) {
            updateserWaiting(false);
            updateCSSClass('basic-body');
            if (res.data === 'Success') {
                history.push('/test/filldetails');
            }
            else {
                alert(res.data);
            }
        });
    };
    return (React.createElement(StyledEngineProvider, { injectFirst: true },
        React.createElement("div", null,
            React.createElement("div", { className: cssClass },
                React.createElement(Button, { className: "round-button", variant: "contained", onClick: onSubmit }, "Connect to Serial And CAN"),
                React.createElement("div", { className: 'gif-frame' },
                    React.createElement("img", { src: octopusBG, alt: "Octopus-Diagnosis" }))),
            serWaiting && React.createElement(VerifyingSerialComponent, { showSer: serWaiting }))));
};
export default startTestingComponent;
//# sourceMappingURL=start-testing.component.js.map