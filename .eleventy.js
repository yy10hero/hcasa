const { rssPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPassthroughCopy("src/assets", {
    filter: path => !path.endsWith(".php") && !path.includes(".cache_") && !path.includes("elementor/") && !path.includes("wpforms/") && !path.includes("ultimatemember/") && !path.includes("bsk-pdf-manager/")
  });
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.setServerOptions({
    watch: ["_site/**/*"],
  });



  eleventyConfig.addNunjucksFilter("date", function (date, format) {
    if (!date) return "";
    if (date === "now") date = new Date();
    const d = new Date(date);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if (format === "MMMM d, yyyy") {
      return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    }
    if (format === "yyyy") {
      return String(d.getFullYear());
    }
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
  });

  eleventyConfig.addNunjucksFilter("displayTags", function(tags) {
    if (!tags) return [];
    return tags.filter(t => t !== "posts" && t !== "pages");
  });

  eleventyConfig.addNunjucksFilter("capitalize", function(str) {
    if (!str) return "";
    const overrides = { "hcasa": "HCASA", "masters_post": "Masters" };
    if (overrides[str]) return overrides[str];
    return str.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  });

  eleventyConfig.addNunjucksFilter("excerpt", function (content, wordCount) {
    if (!content) return "";
    wordCount = wordCount || 55;
    const stripped = content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    const words = stripped.split(" ");
    if (words.length <= wordCount) return stripped;
    const suffix = " [...]";
    return words.slice(0, wordCount).join(" ") + suffix;
  });

  eleventyConfig.addNunjucksFilter("slice", function(arr, start, end) {
    return arr ? arr.slice(start, end) : [];
  });

  eleventyConfig.addCollection("categories", function(collectionApi) {
    const cats = new Map();
    collectionApi.getFilteredByTag("posts").forEach(item => {
      if (item.data && item.data.categories) {
        item.data.categories.forEach(c => {
          if (!cats.has(c)) cats.set(c, []);
          cats.get(c).push(item);
        });
      }
    });
    return [...cats.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([name, posts]) => ({ name, posts }));
  });

  eleventyConfig.addCollection("archives", function(collectionApi) {
    const months = {};
    collectionApi.getFilteredByTag("posts").forEach(item => {
      if (item.date) {
        const key = item.date.getFullYear() + "-" + String(item.date.getMonth()+1).padStart(2,"0");
        const label = item.date.toLocaleString("en", { year: "numeric", month: "long" });
        if (!months[key]) months[key] = { label, key, posts: [] };
        months[key].posts.push(item);
      }
    });
    return Object.values(months).sort((a,b) => b.key.localeCompare(a.key));
  });

  eleventyConfig.addNunjucksFilter("previousPost", function(collection, pageUrl) {
    if (!collection || !pageUrl) return null;
    const posts = [...collection].sort((a, b) => b.date - a.date);
    const idx = posts.findIndex(p => p.url === pageUrl);
    return idx < posts.length - 1 ? posts[idx + 1] : null;
  });

  eleventyConfig.addNunjucksFilter("nextPost", function(collection, pageUrl) {
    if (!collection || !pageUrl) return null;
    const posts = [...collection].sort((a, b) => b.date - a.date);
    const idx = posts.findIndex(p => p.url === pageUrl);
    return idx > 0 ? posts[idx - 1] : null;
  });

  eleventyConfig.addCollection("authors", function(collectionApi) {
    const authors = new Map();
    collectionApi.getFilteredByGlob("src/posts/**/*.md").forEach(item => {
      if (item.data && item.data.author) {
        if (!authors.has(item.data.author)) authors.set(item.data.author, []);
        authors.get(item.data.author).push(item);
      }
    });
    return [...authors.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([name, posts]) => ({ name, posts }));
  });

  eleventyConfig.addCollection("tagsList", function(collectionApi) {
    const tags = new Map();
    collectionApi.getFilteredByTag("posts").forEach(item => {
      if (item.data && item.data.tags) {
        item.data.tags.forEach(t => {
          if (t === "posts" || t === "pages") return;
          if (!tags.has(t)) tags.set(t, []);
          tags.get(t).push(item);
        });
      }
    });
    return [...tags.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([name, posts]) => ({ name, posts }));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
