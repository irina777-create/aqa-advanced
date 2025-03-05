import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/**.mjs', '**/**.js']},
  // {ignores: ['**/**.js']},
  {languageOptions:
        {
          globals: globals.node,
          ecmaVersion: 'latest',
          sourceType: 'module'
        }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
  },
  {
    rules: {
      "no-unused-vars": 0,
      "@stylistic/js/indent": ["error", 3, { "SwitchCase": 3 }],
      "@stylistic/js/space-in-parens": ["error", "never"],
    }
  }
];
