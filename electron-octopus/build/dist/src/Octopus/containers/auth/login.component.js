import { __awaiter, __generator } from "tslib";
import React, { useEffect, useState } from "react";
import { postRequest } from "../../api-service";
import API from '../../API_ENDPOINTS.constant';
import Loader from "../../components/shared/loader/loader.component";
import LOADER_TYPE from "../../loader.constant";
import { setLocalStoreItem } from "../../utils";
import './login.component.css';
// @ts-ignore
import eulerLogo from '../../assets/images/eul-logo-theme.svg';
import AppPath from "../../AppPath.constants";
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';
var Login = function () {
    var _a = useState(''), email = _a[0], updateEmail = _a[1];
    var _b = useState(''), password = _b[0], updatePassword = _b[1];
    var _c = useState({ message: '', isError: false }), formError = _c[0], updateFormError = _c[1];
    var _d = useState(false), loader = _d[0], updateLoader = _d[1];
    // const EMAIL_RULE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    useEffect(function () {
        updateFormError(formError);
    }, [formError]);
    var handleEmailInput = function (event) {
        // if (!EMAIL_RULE.test(event.target.value)) {
        // 	updateFormError({message: 'Please enter valid email', isError: true});
        // } else {
        // 	updateFormError({message: '', isError: false});
        // }
        updateEmail(event.target.value);
    };
    var handlePasswordInput = function (event) {
        if (event.target.value.length < 4) {
            updatePassword(event.target.value);
            updateFormError({ message: 'Please enter password (min 4 characters)', isError: true });
        }
        else {
            updatePassword(event.target.value);
            updateFormError({ message: '', isError: false });
        }
    };
    var _e = useState(false), showPassword = _e[0], setShowPassword = _e[1];
    var handlePasswordToggle = function () {
        setShowPassword(function (prev) { return !prev; });
    };
    var handleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(email && password)) return [3 /*break*/, 2];
                    updateLoader(true);
                    return [4 /*yield*/, postRequest(API.LOGIN, {
                            user_key: email,
                            password: password
                        })];
                case 1:
                    response = _a.sent();
                    if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
                        updateLoader(false);
                        // @ts-ignore
                        setLocalStoreItem('user', JSON.stringify(response && (response.data)));
                        // @ts-ignore
                        setLocalStoreItem('auth', response && response.data && response.data.token);
                        // @ts-ignore
                        setLocalStoreItem('user_id', getUserIdFromToken(response.data.token));
                        location.assign(AppPath.WELCOME);
                    }
                    else {
                        updateLoader(false);
                        updateFormError({ message: 'Invalid Credentials', isError: true });
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var getUserIdFromToken = function (token) {
        if (token) {
            return JSON.parse(atob(token.split('.')[1])).user_id;
        }
    };
    return (React.createElement("div", { className: 'login-container' },
        React.createElement("div", { className: 'left-section' },
            React.createElement("div", { className: 'clip' }),
            React.createElement("div", { className: 'left-section-content' },
                React.createElement("div", { className: 'left-section-heading' }, 'Euler Motors'),
                React.createElement("div", { className: 'left-section-subheading' }, 'Moving Today For Tomorrow'))),
        React.createElement("div", { className: 'form-container' },
            React.createElement("form", { className: 'form', autoComplete: 'on' },
                React.createElement("img", { src: eulerLogo, alt: 'euler-logo' }),
                React.createElement("div", { className: 'login-title' }, "Please login to continue"),
                React.createElement(TextField, { title: 'email', placeholder: 'Username or E-mail or Phone number', type: 'email', value: email, label: 'Username/E-mail/Phone', variant: 'outlined', onChange: handleEmailInput }),
                React.createElement(TextField, { title: 'password', placeholder: '°°°°°°°°°°°', type: showPassword ? 'text' : 'password', value: password, label: 'Password', variant: 'outlined', onChange: handlePasswordInput, InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: "end" },
                            React.createElement(IconButton, { onClick: handlePasswordToggle, edge: "end" }, showPassword ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null))))
                    } }),
                (formError === null || formError === void 0 ? void 0 : formError.isError) ? React.createElement("div", { className: 'error-text' }, formError.message) : '',
                loader
                    ? React.createElement(Loader, { type: LOADER_TYPE.COMPONENT })
                    : React.createElement("button", { type: "button", disabled: (formError === null || formError === void 0 ? void 0 : formError.isError) || !email || !password, onClick: handleLogin }, "Sign In")))));
};
export default Login;
//# sourceMappingURL=login.component.js.map