import React from 'react';
import { getLocalStoreItem } from '../../utils';
//Planned of having other error components into this
export var ErrorComponent = function (error) {
    return (React.createElement(React.Fragment, null, error && (error === null || error === void 0 ? void 0 : error.status) === 500
        ? location.replace('/error-500')
        : (!getLocalStoreItem('auth') || [401, 403].includes(error === null || error === void 0 ? void 0 : error.status))
            ? location.replace('/')
            : (error === null || error === void 0 ? void 0 : error.status) === 404
                ? location.replace('/error-404')
                : undefined));
};
//# sourceMappingURL=error.component.js.map