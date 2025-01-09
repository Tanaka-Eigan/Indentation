module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'], // Includes the Prettier plugin
  rules: {
    'prettier/prettier': ['error'], // Ensures Prettier errors are treated as ESLint errors
    'react/react-in-jsx-scope': 'off', // For Next.js, React is always in scope
  },
};
