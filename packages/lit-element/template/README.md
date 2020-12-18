# Template

## Project configuration

1. Create .nvmrc and include inside the Node version:

```
v14.15.3
```

2. Add to .gitignore the following directorioes: `coverage`, `.idea` and `.vscode`.
3. Install prettier: `npm i prettier -DE`
4. Create a `.prettierignore` and `.prettierrc.json`
   file.
5. Inside the `.prettierignore` file add the contents of the `.gitignore` file.
6. Add your preferred set of rules inside the `.prettierrc.json`, for example this ones:

    ```json
    {
        "semi": false,
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "avoid",
        "printWidth": 100
    }
    ```

7. Add a pre-commit hook: `npx mrm lint-staged`.
8. Add a format script inside the `package.json`:

    ```json
    ...
    "scripts": {
        "format": "prettier --write ."
    }
    ...
    ```

9. Make sure that in the pre commit lint-staged is being run for all the pertinent files:

```json
...
"lint-staged": {
    "*.{js,ts,css,html,json,md}": "prettier --write"
}
...
```

10. Install Eslint: `npm i eslint -DE`
11. Create an `.eslintrc.js` file and include the following:

        ```js
        module.exports = {
            env: {
                browser: true,
                es2021: true,
                node: true
            },
            root: true,
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                'no-console': 'error',
                '@typescript-eslint/explicit-module-boundary-types': 'off'
            },
        }
        ```
