import React from "react";
import { getLocalStoreItem } from '../../utils';
var WelcomeComponent = function () {
    var _a;
    return (React.createElement("h1", null,
        "Welcome ",
        ((_a = getLocalStoreItem('user')) === null || _a === void 0 ? void 0 : _a.full_name) || 'Stranger',
        "!"));
};
export default WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map