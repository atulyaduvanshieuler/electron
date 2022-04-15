import { __assign } from "tslib";
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { postRequest } from '../../api-service';
import { useHistory } from 'react-router-dom';
import './run-tests.component.css';
var testingPersonDetailsFormComponent = function () {
    var _a = useState({
        personName: '',
        vehicleEmchNumber: '',
        vehicleChassisNo: '',
        testingCenter: '',
    }), formData = _a[0], updateFormData = _a[1];
    var history = useHistory();
    var onSubmit = function () {
        if (formData.personName == null) {
            alert('Please Enter Your Name');
        }
        else if (formData.vehicleEmchNumber == null) {
            alert('Please Enter Vehicle EMCH Number');
        }
        else if (formData.vehicleChassisNo == '') {
            alert('Please Enter Vehicle Chassis Number');
        }
        else if (formData.testingCenter == '') {
            alert('Please Select Testing Center');
        }
        else {
            postRequest('api/v1/test/vehicle', __assign({}, formData)).then(function (res) {
                //below code will change depending onn the structure of data
                if (res.data === 'Success') {
                    history.push('/test/runtest');
                }
                else {
                    alert(res.data);
                }
            });
        }
    };
    return (React.createElement("div", { className: 'body' },
        React.createElement("h2", null, "Fill your details here:"),
        React.createElement("div", { className: "form-area" },
            React.createElement(Grid, { key: 1, container: true, direction: 'row', spacing: 3 },
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(InputLabel, { id: "person-name" }, "Your Name")),
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(TextField, { title: ' Your Name: ', placeholder: 'Enter Your Name here', type: 'text', value: formData.personName, variant: 'outlined', label: 'Your Name', onChange: function (e) {
                            return updateFormData(__assign(__assign({}, formData), { personName: e.target.value }));
                        }, size: 'small' }))),
            React.createElement("br", null),
            React.createElement(Grid, { key: 2, container: true, direction: 'row', spacing: 3 },
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(InputLabel, { id: "testing-center" }, "Testing Center")),
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(Select, { labelId: "testing-center", id: "testing-center-id", value: formData.testingCenter, onChange: function (e) {
                            return updateFormData(__assign(__assign({}, formData), { testingCenter: e.target.value }));
                        }, size: 'small', sx: { minWidth: 2 / 3 } },
                        React.createElement(MenuItem, { value: 'Assembly-Line' }, "Assembly Line"),
                        React.createElement(MenuItem, { value: 'Noida-Plant' }, "Noida Plant")))),
            React.createElement("br", null),
            React.createElement(Grid, { key: 3, container: true, direction: 'row', spacing: 3 },
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(InputLabel, { id: "vehicle-emch-number" }, "Vehicle EMCH Number")),
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(TextField, { title: 'Vehicle EMCH Number:', placeholder: 'Enter EMCH Number here', type: 'text', value: formData.vehicleEmchNumber, variant: 'outlined', label: 'Vehicle EMCH Number', onChange: function (e) {
                            return updateFormData(__assign(__assign({}, formData), { vehicleEmchNumber: e.target.value }));
                        }, size: 'small' }))),
            React.createElement("br", null),
            React.createElement(Grid, { key: 4, container: true, direction: 'row', spacing: 3 },
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(InputLabel, { id: "vehicle-chassis-number" }, "Vehicle Chassis Number")),
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(TextField, { title: ' Vehicle Chassis Number: ', placeholder: 'Enter Vehicle Chassis Number here', type: 'text', value: formData.vehicleChassisNo, variant: 'outlined', label: 'Vehicle Chassis Number', onChange: function (e) {
                            return updateFormData(__assign(__assign({}, formData), { vehicleChassisNo: e.target.value }));
                        }, size: 'small' }))),
            React.createElement("br", null),
            React.createElement(Grid, { key: 5, container: true, direction: 'row', spacing: 3 },
                React.createElement(Grid, { item: true, md: 3 },
                    React.createElement(Button, { className: "button", variant: "contained", onClick: onSubmit }, "Submit"))))));
};
export default testingPersonDetailsFormComponent;
//# sourceMappingURL=testing-person-details-form.component.js.map