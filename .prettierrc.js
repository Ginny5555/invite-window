module.exports = {
  // other configurations...
  vueIndentScriptAndStyle: true,
  quoteProps: 'preserve',
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.html', '*.vue'],
      options: {
        printWidth: 120,
        htmlWhitespaceSensitivity: 'ignore',
        proseWrap: 'never',
        vueIndentScriptAndStyle: false,
        // turn off quotes format for .vue files
        vueTemplateOptions: {
          // disable enforcement of a specific quote style in templates
          // (prettier will use the original quotes if the file already had them)
          compilerOptions: { isCustomElement: tag => tag.startsWith('b-') }
        },
      },
    },
  ],
};