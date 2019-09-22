const { flatten, uniq, get, lowerCase } = require("lodash");
const axios = require("axios");
const taxonomy = require("./taxonomy");

const categories = Object.keys(taxonomy);

const attributes = uniq(flatten(
  Object.keys(taxonomy).map(c => Object.keys(taxonomy[c]))
))

const attributesByCategory = (category)=> category ? Object.keys(taxonomy[category]) : []

const attributeValues = (categoy, attribute)=> taxonomy[categoy][attribute]


const parse = input => {
  const category = lowerCase(get(input, `category[0]`, null));
  const tags = get(input, `tags`);

  const getTag = name => get(tags, `${name}[0][0]`, null);

  const title = getTag("Title")
  const color_hex = getTag("color_hex")

  let attributes = {};

  attributesByCategory(category)
    .forEach(a => (attributes[a] = getTag(a)));

  return {
    title,
    category,
    color_hex,
    ...attributes
  };
};

const getTags = async (key, url) => {
  const { data } = await axios.post(
    "https://vuetag.madstreetden.com/api/v1/tag",
    {
      api_key: key,
      image_url: url
    }
  );
  if (data.status == "SUCCESS") {
    return parse(data.data[0]);
  } else {
    throw new Error(data.message);
  }
};

module.exports = {
  parse,
  categories,
  attributes,
  attributesByCategory,
  attributeValues,
  getTags
};
