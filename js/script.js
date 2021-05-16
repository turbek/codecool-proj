let COOKIE_SETTING = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false
}

/**
 * @param {Object} setting - example: { statistics: true }  
 */
function saveSetting(setting) {
    COOKIE_SETTING = { ...COOKIE_SETTING, ...setting };
}

//WRITE YOUR CODE HERE