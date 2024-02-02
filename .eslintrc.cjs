module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard' // javascript standard 語法規範。
  ],
  ignorePatterns: ['node_modules/**', 'dist/**'], // 排除檢查
  plugins: ['jest'],
  overrides: [
    {
      env: {
        node: true,
        jest: true
      },
      files: ['.eslintrc.{js,cjs}', '**/__tests__/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)', 'tests/**/*.js'],
      plugins: ['jest'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'never']
  }
}
