/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
    printWidth: 80,
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'auto',
    useTabs: false,
    proseWrap: 'preserve',
}

module.exports = config
