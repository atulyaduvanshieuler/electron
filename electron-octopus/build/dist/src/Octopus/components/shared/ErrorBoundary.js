import { __extends } from "tslib";
import React from 'react';
import Error500Component from "./Error500.component";
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    };
    ErrorBoundary.prototype.render = function () {
        var _a;
        // @ts-ignore
        if ((_a = this.state) === null || _a === void 0 ? void 0 : _a.hasError) {
            // You can render any custom fallback UI
            return React.createElement(Error500Component, null);
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map