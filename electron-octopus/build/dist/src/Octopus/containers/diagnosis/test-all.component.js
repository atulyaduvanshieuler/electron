import React from 'react';
var TestAllComponent = function (resObj) {
    var test_status = resObj.test_status, test_errors = resObj.test_errors;
    if (test_status === '') {
        return React.createElement(React.Fragment, null);
    }
    else {
        if (test_status === 'All Tests Passed') {
            return React.createElement("div", { style: { color: 'green' } }, "All Tests Passed");
        }
        else if (test_status == 'Stark Testing Failed') {
            return (React.createElement("div", { style: { color: 'red' } },
                "Stark test Failed", test_errors === null || test_errors === void 0 ? void 0 :
                test_errors.map(function (x, key) {
                    return React.createElement("li", { key: key }, x);
                })));
        }
        else if (test_status === 'Controller Testing Failed') {
            return (React.createElement("div", { style: { color: 'red' } },
                "Controller Testing Failed", test_errors === null || test_errors === void 0 ? void 0 :
                test_errors.map(function (x, key) {
                    return React.createElement("li", { key: key }, x);
                })));
        }
        else if (test_status === 'BMS Testing Failed') {
            return (React.createElement("div", { style: { color: 'red' } },
                "BMS Testing Failed", test_errors === null || test_errors === void 0 ? void 0 :
                test_errors.map(function (x, key) {
                    return React.createElement("li", { key: key }, x);
                })));
        }
        else if (test_status === false) {
            return (React.createElement("div", { style: { color: 'red' } },
                "Testing Failed", test_errors === null || test_errors === void 0 ? void 0 :
                test_errors.map(function (x, key) {
                    return React.createElement("li", { key: key }, x);
                })));
        }
        else {
            return (React.createElement("div", { style: { color: 'red' } },
                "Received something else", test_errors === null || test_errors === void 0 ? void 0 :
                test_errors.map(function (x, key) {
                    return React.createElement("li", { key: key }, x);
                })));
        }
    }
};
export default TestAllComponent;
//# sourceMappingURL=test-all.component.js.map