module.exports = {
  // When enabling the markdown plugin, include * before each line
  plugins: ["plugins/markdown"],
  markdown: {
    // JSDoc looks for Markdown-formatted text in the following jsdoc tags
    // [description, see, throws, returns, param, property, author]
    // Additional tags
    tags: ["example"],
    excludeTags: ["author"],
    // Wrap text using <br> at line breaks
    hardwrap: true,
    idInHeadings: true,
  },
  source: {
    include: ["lib"],
    exclude: ["lib/ignore.js"],
  },
  opts: {
    // template: "templates/default",
    template: "node_modules/docdash",
    destination: "docs",
    recurse: true,
    readme: "README.md",
    tutorials: "guides",
  },
  templates: {
    // Configuring the default template
    default: {
      staticFiles: {
        include: ["public"],
      },
      includeDate: false,
    },
  },
};
