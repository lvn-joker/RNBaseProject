module.exports = {
    root: true,
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "no-unused-vars": [2, {"vars": "all","args": "after-used", "varsIgnorePattern": "ignored"}]
    }
};
