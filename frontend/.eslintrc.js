module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        'dot-notation': 'off',
        'import/extensions': 'off', // we like not including .ts at the end of all imports
        'import/prefer-default-export': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-filename-extension': 'off', // we use tsx for file name extensions
        'react/prop-types': 'off', // typescript does much of the validation that prop-types would
        '@typescript-eslint/explicit-function-return-type': 'off', // For now this errors a ton
        '@typescript-eslint/interface-name-prefix': 'off', // We often use IProps as a standard practice
        '@typescript-eslint/no-inferrable-types': 'off', // It is okay to be explicit even for obvious types
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
