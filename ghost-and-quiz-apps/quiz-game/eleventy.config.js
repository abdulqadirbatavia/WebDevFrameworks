const ghostContentAPI = require("@tryghost/content-api");

// Init Ghost API with your REAL key
const api = new ghostContentAPI({
  url: "http://localhost:2368",
  key: "95cdcbbe9c6ad883b2a4da55c1",  // ← Your actual API key
  version: "v5.0",
});

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });
  
  // Get REAL questions from Ghost CMS
  eleventyConfig.addGlobalData("questions", () =>
    api.posts.browse({ 
      filter: "tag:question",
      include: "tags",
      limit: 20
    }).catch((err) => {
      console.error("Ghost API Error:", err);
      return [];
    })
  );
};