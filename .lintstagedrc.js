module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(js|jsx|js)': (filenames) => [
    `pnpm eslint ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
};
