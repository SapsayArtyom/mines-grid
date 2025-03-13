module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "__IS_DEV__": true,
    },
    "rules": {
        "@typescript-eslint/no-explicit-any": "warn",
        "no-useless-constructor":"off",
        "@typescript-eslint/no-unused-vars": ["warn", {
            "args": "none"
        }],
        "@typescript-eslint/no-empty-function": ["error", { "allow": ["constructors"] }],
        "linebreak-style": 0,
        "global-require": 0,
        "eslint linebreak-style": [0, "error", "windows"],       
        "no-console": "off",
        "no-unused-vars": "warn",
        "no-plusplus": "off",
        "prefer-const": "warn",
        "no-underscore-dangle": "off",
        "max-len": ["error", 180, {
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreComments": true,
            "ignoreTemplateLiterals": true,
            "ignoreTrailingComments": true,
            "ignoreRegExpLiterals": true
        }],
        "lines-between-class-members": "off", //+
        "import/extensions": "off", //+
        "import/no-cycle": "off", //оставляем варнинг
        "no-await-in-loop": "off", //+
        "no-async-promise-executor": "off", //+
        // "no-shadow": ["error", { "allow": ["resolve"], "ignoreEnum": true }], //+ 
        "no-param-reassign": "off", //оставляем, с longame нюансы
        "no-nested-ternary": "off", //+
        "@typescript-eslint/ban-ts-comment": "off", //+
        "no-restricted-syntax": "off", //+
        "no-prototype-builtins": "off", //+
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "class-methods-use-this": "off",
        "no-continue": "off",
        "semi": [1, "always"],
        "react/react-in-jsx-scope": "off"
    }
};
