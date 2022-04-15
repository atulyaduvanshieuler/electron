import { __assign, __awaiter, __generator } from "tslib";
import axios from 'axios';
import environment from './env/environment';
import { ErrorComponent } from './components/shared/error.component';
// import SnackbarComponent from "./components/shared/snackbar.component";
axios.interceptors.request.use(function (config) {
    var _a;
    var authToken = localStorage.getItem('auth');
    if (authToken) {
        config.headers = {
            'Authorization': authToken
        };
    }
    if ((_a = config.url) === null || _a === void 0 ? void 0 : _a.includes('login')) {
        config = __assign(__assign({}, config), { data: __assign(__assign({}, config.data), { fcm_token: '' }) });
    }
    return config;
});
export var getRequest = function (endpoint, params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(environment.BASE_URL, "/").concat(endpoint), {
                    params: params,
                    timeout: 180000
                }).catch(handleError)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var postRequest = function (endpoint, params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .post("".concat(environment.BASE_URL, "/").concat(endpoint), __assign({}, params), {
                    headers: {
                        'client': 'web',
                    },
                    timeout: 180000
                }).catch(handleError)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var handleError = function (error) {
    var _a, _b;
    if (!navigator.onLine) {
        // return SnackbarComponent({message: 'Please check your Internet connection and try again!'});
    }
    if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 500) {
        return ErrorComponent(error.response);
    }
    else if ([401, 403, 404].includes(Number((_b = error.response) === null || _b === void 0 ? void 0 : _b.status))) {
        localStorage.clear();
        return ErrorComponent(error.response);
    }
    else if ((error === null || error === void 0 ? void 0 : error.code) == 'ECONNABORTED') {
        alert('Request timeout. Please try again after refreshing the page.');
    }
    else if ((error === null || error === void 0 ? void 0 : error.message) == 'Network Error') {
        alert('Server Down. Make sure your backend server is responding.');
    }
    else {
        return ErrorComponent(error.response || error);
    }
    throw (error);
};
//# sourceMappingURL=api-service.js.map