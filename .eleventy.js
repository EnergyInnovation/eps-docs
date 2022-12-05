module.exports = eleventyConfig => {
  // Copy the "assets" directory to the compiled "_site" folder.
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/dcs')
  eleventyConfig.addPassthroughCopy('src/*.png')
  return {
    dir: {
      input: 'src',
      output: '_site'
    },
    templateFormats: ['html', 'md']
  }
}
