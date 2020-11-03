module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'import'],
    extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript', 'prettier'],
    env: {
        browser: true,
        es6: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                directory: './tsconfig.json',
            },
        },
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/interface-name-prefix': [1, 'always'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'max-len': [
            'error',
            {
                code: 180,
            },
        ],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'import/no-extraneous-dependencies': ['off'],
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        'no-return-assign': 'off',
        '@typescript-eslint/indent': 'off',
        // turn on errors for missing imports
        'import/no-unresolved': 'error',
        'import/no-cycle': 'off',
        'react/destructuring-assignment': 'off',
        'no-param-reassign': 'off',
        // 需要有 empty 的存在
        '@typescript-eslint/no-empty-interface': 'off',
        // 与 prettier 有冲突
        'prefer-destructuring': 'off',
        'react/jsx-wrap-multilines': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
    },
};
