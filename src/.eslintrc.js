module.exports = {
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    plugins: [
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        "react",
        "react-hooks"
    ],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "../tsconfig.json",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always",
                "objects": "always",
                "imports": "ignore",
                "exports": "always",
                "functions": "ignore"
            }
        ],
        "no-cond-assign": "error",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-debugger": "warn",
        "no-duplicate-case": "error",
        "no-empty": "warn",
        "no-extra-semi": "error",
        "no-sparse-arrays": "error",
        "no-unexpected-multiline": "error",
        "valid-typeof": "error",
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "complexity": [
            "error",
            {
                "max": 15
            }
        ],
        "curly": [
            "error",
            "all"
        ],
        "default-case": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-alert": "warn",
        "no-case-declarations": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": [
            "error",
            {
                "allow": [
                    "!!"
                ]
            }
        ],
        "no-implied-eval": "error",
        "no-labels": "error",
        "no-loop-func": "error",
        "no-new-func": "error",
        "no-param-reassign": "error",
        "no-shadow-restricted-names": "error",
        "no-return-assign": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "prefer-promise-reject-errors": "error",
        "radix": "error",
        "require-await": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "yoda": "error",
        "callback-return": "error",
        "handle-callback-err": "error",
        "no-path-concat": "error",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-sync": "error",
        "no-mixed-spaces-and-tabs": "error",
        "jsx-quotes": "error",
        "func-call-spacing": "error",
        "quotes": [
            "error",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "max-len": [
            "error",
            {
                "code": 100
            }
        ],
        "max-lines": [
            "error",
            {
                "max": 400,
                "skipBlankLines": true
            }
        ],
        "max-lines-per-function": [
            "warn",
            {
                "max": 50,
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "max-nested-callbacks": [
            "error",
            {
                "max": 3
            }
        ],
        "max-params": [
            "warn",
            5
        ],
        "max-statements": [
            "warn",
            20,
            {
                "ignoreTopLevelFunctions": true
            }
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 2
            }
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "new-parens": "error",
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-array-constructor": "error",
        "react/jsx-uses-react": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-multi-assign": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": "off",
        "semi": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "error",
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: 'array',
            },
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "comma",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": true
                },
                "overrides": {
                    "interface": {
                        "multiline": {
                            "delimiter": "semi",
                            "requireLast": true
                        }
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "args": "none",
                "ignoreRestSiblings": true,
            },
        ],
        "@typescript-eslint/promise-function-async": "off",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": [
            "warn",
            {
                "allowAllCaps": true,
                "ignore": [],
            },
        ],
        "react/jsx-uses-vars": "warn",
        "react/no-danger-with-children": "warn",
        // Disabled because of undesirable warnings
        // See https://github.com/facebook/create-react-app/issues/5204 for
        // blockers until its re-enabled
        // "react/no-deprecated": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/no-typos": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/style-prop-object": "warn",
        "react/jsx-key": "warn",
        "react/no-access-state-in-setstate": "warn",
        "react/no-find-dom-node": "warn",
        "react/jsx-max-depth": [
            "warn",
            {
                "max": 10
            }
        ],
        "react/jsx-max-props-per-line": [
            "warn",
            {
                "maximum": 4
            }
        ],
        "react/jsx-no-bind": [
            "warn",
            {
                "ignoreDOMComponents": true,
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "allowFunctions": true,
                "allowBind": false
            }
        ],
        "react-hooks/rules-of-hooks": "error",
    }
}
