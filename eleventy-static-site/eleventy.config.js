module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  eleventyConfig.addPassthroughCopy("public");
  
  // Create questions collection from the data file
  eleventyConfig.addCollection("questions", function(collectionApi) {
    // Get the questions from the data file
    const questionsData = require('./_data/questions.json');
    
    // Create virtual items for each question
    return questionsData.map((question, index) => {
      return {
        // Create a URL for each question
        url: `/questions/${question.title.toLowerCase().replace(/\s+/g, '-')}/`,
        data: {
          title: question.title,
          question: question.question,
          tags: ['questions']
        },
        // Required for 11ty collections
        inputPath: `_data/questions.json`,
        fileSlug: question.title.toLowerCase().replace(/\s+/g, '-')
      };
    });
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk"
  };
};