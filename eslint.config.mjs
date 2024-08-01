import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks"
],},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
];
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    "prettier"
  ],
};