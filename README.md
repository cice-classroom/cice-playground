# CICE - Playground

## Índice

1. Trabajando con Git
2. Ecmascript 2015 (ES6) e Introducción a Node JS
3. Creación de servidorescon NodeJS e Introducción al Framework ExpressJS
4. Securizando Y Pintando Datos desde el Servidor
5. Diseño y Desarrollo APIs
6. Desarrollo WebApp
7. Almacenamiento de Datos
8. Real-time y Testing
9. Deploy
10. ReactJS
11. React-Router
12. Redux/ Redux – Thunk
13. Reactividad RxJS
14. Testing y Side Server Rendering

## Objetivos

## Entorno

### CRA

1.  `npx create-react-app <NOMBRE APLICACIÓN> --template typescript`
2.  Quitar las `^` de las dependencias del `package.json`
3.  Eliminar `yarn.lock` si existe y si decidimos usar `npm` para la gestión de dependencias.
4.  Instalar dependencias de nuevo `npm i`
5.  Actualizar dependencias con `npx npm-check -u -E`
6.  Crear fichero `.env` con el siguiente contenido dentro: `SKIP_PREFLIGHT_CHECK=true`
7.  Crear fichero `.editorconfig` con lo siguiente:

    ```
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    trim_trailing_whitespace = true
    insert_final_newline = true
    charset = utf-8

    [*.md]
    indent_size = 4

    ```

8.  Crear fichero `.prettierrc` con lo siguiente:

    ```
    {
     "semi": false,
     "singleQuote": true,
     "printWidth": 100,
     "arrowParens": "avoid",
     "trailingComma": "none"
    }

    ```

9.  Endurecer la configuración del `tsconfig.json` con las siguientes opciones:

    ```json
    {
        "compilerOptions": {
            "strict": true,
            "noFallthroughCasesInSwitch": true,
            "noUnusedParameters": true,
            "noUnusedLocals": true,
            "alwaysStrict": true,
            "forceConsistentCasingInFileNames": true
        }
    }
    ```

10. Instalar prettier: `npm i prettier -DE`
11. Añadir script de formateo al `package.json`:
    ```json
    {
        "scripts": {
            "format": "prettier --write \"modules/**/*.{js,jsx,ts,tsx,json,css,md}\""
        }
    }
    ```
12. Añadir git hook con husky + lint-staged ejecutando el siguiente comando: `npx mrm lint-staged`
13. Añadir un hook de pre-push en el `package.json` que ejecute los test automáticamente cuando se haga push:
    ```json
    {
        "husky": {
            "hooks": {
                "pre-commit": "lint-staged",
                "pre-push": "npm test"
            }
        }
    }
    ```
