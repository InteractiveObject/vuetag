const { flatten, uniq, get, lowerCase } = require("lodash");
const {
  taxonomy,
  colors,
  style_and_occasions,
  fashion_styles,
  occasions
} = require("./taxonomy");

const categories = Object.keys(taxonomy);

const attributes = uniq(
  flatten(Object.keys(taxonomy).map(c => Object.keys(taxonomy[c])))
);

const attributesByCategory = category =>
  category ? Object.keys(taxonomy[category]) : [];

const attributeValues = (categoy, attribute) => taxonomy[categoy][attribute];

const colorValues = () => taxonomy[categoy][attribute];

const parse = input => {
  const category = get(input, `productType[0]`, null);
  const tags = get(input, `tags`);

  const getTag = name => get(tags, `${name}[0][0]`, null);

  const title = getTag("Title");
  const color_hex = getTag("color_hex");

  let attributes = {};

  attributesByCategory(category).forEach(a => (attributes[a] = getTag(a)));

  const { style_and_occasion } = attributes
  if(style_and_occasion){
    if(fashion_styles.includes(style_and_occasion)){
      attributes.fashion_style = style_and_occasion
    }else if(occasions.includes(style_and_occasion)){
      attributes.occasion = style_and_occasion
    }
  }

  return {
    title,
    category,
    color_hex,
    style_and_occasion,
    ...attributes
  };
};

module.exports = {
  parse,
  categories,
  attributes,
  attributesByCategory,
  attributeValues,
  colors,
  taxonomy
};
