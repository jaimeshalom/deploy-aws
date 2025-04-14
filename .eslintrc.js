module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'hexagonal-architecture',

    'import',
    'unused-imports',
    'simple-import-sort',

    'check-file',
    'eslint-plugin-filename-export',

    'eslint-plugin-node',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/recommended',
    'plugin:import/typescript',

    'xo',
    'xo-typescript/space',
    'plugin:unicorn/recommended',

    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'src/generated/', 'src/sdk/'],
  rules: {
    'no-restricted-syntax': ['error', "BinaryExpression[operator='in']"],

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',

    // https://stackoverflow.com/a/62915767
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: ['classMethod'],
        format: ['camelCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: 'Enum$',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],

    // https://github.com/lydell/eslint-plugin-simple-import-sort#example-configuration
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // https://www.npmjs.com/package/eslint-plugin-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    /**
     * https://github.com/CodelyTV/eslint-config-codely/blob/main/typescript.js
     */
    '@typescript-eslint/explicit-module-boundary-types': ['error'],

    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    // '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    // '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],
    '@typescript-eslint/prefer-readonly': ['error'],
    '@typescript-eslint/promise-function-async': [
      'error',
      { checkArrowFunctions: false },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    /**
     *
     */

    /**
     * https://github.com/CodelyTV/eslint-config-codely/blob/main/.eslintrc.js
     */
    // error prevention
    'array-callback-return': ['error', { checkForEach: true }],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'require-atomic-updates': 'error',

    // good practises
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'new-cap': ['error', { capIsNew: false }],
    'no-array-constructor': 'error',
    // 'no-console': ['warn', { allow: ['error'] }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-extend-native': 'error',
    'no-lonely-if': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    yoda: 'error',

    // style
    curly: 'error',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    // plugins
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    /**
     *
     */

    // plugins
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    /**
     * https://www.npmjs.com/package/eslint-plugin-check-file
     */
    // 'check-file/filename-naming-convention': [
    //   'error',
    //   { '**/*.{js,ts}': 'PASCAL_CASE' },
    //   { ignoreMiddleExtensions: true },
    // ],
    'check-file/folder-match-with-fex': [
      'error',
      {
        'I[A-Z]*.ts':
          '**/(interfaces|incoming|incoming/**|outgoing|outgoing/**|templates)/',
        /*'*Entity.ts': '**!/entities/', //<- no permite crear una entidad llamada entidad.*/
        '*Enum.ts': '**/enums/',
        '*Mock.ts': '**/tests/(mocks|mocks/**)/',
        '*.spec.ts': '**/(application|domain|infrastructure)/tests/',
        // '*[DtoRequest|DtoResponse].ts': '**/application/(dtos|dtos/**)/',
        '*Controller.ts': '**/application/controllers/',
        '*UseCase.ts': '**/application/use-cases/',
        '*Schema.ts': '**/schemas/',
        // Empieza por I seguido de mayúscula
        'I[A-Z]*Repository.ts': '**/(outgoing|outgoing/**/repositories)/',
        // No empieza por I seguido de mayúscula
        '[^I][^A-Z]*Repository.ts': '**/(repositories)/',
        '[^I][^A-Z]*Service.ts': '**/(services|services/**)/',
        // '*Model.ts': '**/models/',
      },
    ],
    'check-file/filename-blacklist': [
      'error',
      {
        '**/*Dtos.ts': '*(DtoRequest|DtoResponse).ts',
        '**/*Dto.ts': '*(DtoRequest|DtoResponse).ts',
        '**/*Models.ts': '*Model.ts',
        '**/*Entities.ts': '*Entity.ts',
        '**/*Interfaces.ts': '*Interface.ts',
        '**/*Services.ts': '*Service.ts',
        '**/*Repositories.ts': '*Repository.ts',
        '**/*Schemas.ts': '*Schema.ts',
        '**/*Controllers.ts': '*Controller.ts',
        '**/*Enums.ts': '*Enum.ts',
        '**/*Mocks.ts': '*Mock.ts',
        '**/*Specs.ts': '*Spec.ts',
        '**/*Adapters.ts': '*Adapter.ts',
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'KEBAB_CASE',
      },
    ],

    //
    'filename-export/match-named-export': 'error',
    'filename-export/match-default-export': 'error',

    // https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-promise-executor-return': 'error',
    'require-atomic-updates': ['error', { allowProperties: true }],
    'max-nested-callbacks': ['error', 3],
    'no-return-await': 'error',
    'prefer-promise-reject-errors': 'error',
    'node/handle-callback-err': ['error', '^(e|err|error)$'],
    'node/no-callback-literal': 'error',
    'node/no-sync': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/promise-function-async': 'error',

    /**
     * no-redeclare y @typescript-eslint/no-redeclare
     * son errores que se detectan con typescript
     */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'off',

    /**
     * xo and unicorn
     */
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'capitalized-comments': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'max-params': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    'no-warning-comments': 'off',
    '@typescript-eslint/ban-types': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/expiring-todo-comments': 'off',

    'unicorn/prefer-module': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
  },
  overrides: [
    {
      files: ['src/modules/**/*.ts'],
      rules: {
        'hexagonal-architecture/enforce': ['error'],
      },
    },

    // https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              // Packages `@nestjs` related packages come first.
              ['^@?\\w'],

              // Internal packages.
              ['^(src)(/.*|$)'],

              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.mock.ts', '**/*Mock.ts'],
      rules: {
        'no-unused-vars': 'off',
        'no-console': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: './',

        // use an array
        // project: ['./tsconfig.*?.json'],
      },
      node: {
        extensions: ['.js', '.ts', '.d.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
};
