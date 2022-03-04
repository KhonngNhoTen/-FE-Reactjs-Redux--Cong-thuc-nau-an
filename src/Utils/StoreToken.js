const CONSTANTS = {
    TOEKEN_KEY:'token',
    REFESH_TOKEN: 'refeshToken'
}

const newAccessToken = (token) => {
    localStorage.setItem(CONSTANTS.TOEKEN_KEY, token);
}

const newRefeshToken = (refeshToken) => {
    localStorage.setItem(CONSTANTS.REFESH_TOKEN, refeshToken);
} 

const expriedToken = () => {
    localStorage.removeItem(CONSTANTS.TOEKEN_KEY);
    localStorage.removeItem(CONSTANTS.REFESH_TOKEN);
}

const saveAllToken = (token, refeshToken) => {
    newAccessToken(token);
    newRefeshToken(refeshToken);
}

export {
    CONSTANTS,
    newAccessToken,
    newRefeshToken,
    expriedToken,
    saveAllToken
}