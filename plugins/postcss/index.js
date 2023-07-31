const pxtorem = require('postcss-pxtorem');

module.exports = (context, options) => {
    return {
      name: 'post-css',
      configurePostCss(postcssOptions) {
        // Appends new PostCSS plugin.
        postcssOptions.plugins.push(pxtorem({
          propList: ["*"]
        }));
        return postcssOptions;
      },
    };
  }

