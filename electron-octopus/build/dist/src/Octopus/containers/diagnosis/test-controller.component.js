import React from 'react';
var TestControllerComponent = function (resObj) {
    var test_status = resObj.test_status, test_errors = resObj.test_errors;
    if (test_status === '') {
        return React.createElement(React.Fragment, null);
    }
    else if (test_status === true) {
        return React.createElement("div", { style: { color: 'green' } }, "Controller Test Passed");
    }
    else {
        return (React.createElement("div", { style: { color: 'red' } },
            React.createElement("span", null, "Controller Test Failed"), test_errors === null || test_errors === void 0 ? void 0 :
            test_errors.map(function (x, key) { return (React.createElement("li", { key: key }, x)); })));
    }
};
export default TestControllerComponent;
//# sourceMappingURL=test-controller.component.js.map