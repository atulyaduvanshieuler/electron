var EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
export var getLocalStoreItem = function (key) { return JSON.parse(localStorage.getItem(key)); };
export var setLocalStoreItem = function (key, value) { return localStorage.setItem(key, value); };
export var isValidEmail = function (email) { return EMAIL_REGEX.test(email); };
export var checkDateDifference = function (endDate, startDate) { return Math.floor((Date.parse(endDate.toString()) - Date.parse(startDate.toString())) / 86400000); };
//# sourceMappingURL=utils.js.map