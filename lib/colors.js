const {get } = require("lodash");

const colors = [
  { name: "black", value: "#161616" },
  { name: "dark_grey", value: "#404040" },
  { name: "light_grey", value: "#D3D3D3" },
  { name: "white", value: "#FFFFFF" },
  { name: "off_white", value: "#F4EFEB" },
  { name: "chocolate", value: "#825635" },
  { name: "brown", value: "#7e3300" },
  { name: "camel", value: "#d2a579" },
  { name: "beige", value: "#f2e7bf" },
  { name: "burgundy", value: "#803740" },
  { name: "dark_red", value: "#8B0000" },
  { name: "red", value: "#E40000" },
  { name: "coral", value: "#f2bfb4" },
  { name: "orange", value: "#FF581B" },
  { name: "mustard", value: "#E4C03C" },
  { name: "yellow", value: "#FFDF2D" },
  { name: "light_yellow", value: "#FFE96F" },
  { name: "purple", value: "#A330A3" },
  { name: "fuschia", value: "#ae2865" },
  { name: "pink", value: "#FFC0CB" },
  { name: "light_pink", value: "#fee7f0" },
  { name: "rosewood", value: "#e1c8d1" },
  { name: "lilac", value: "#c8a2c8" },
  { name: "navy", value: "#000066" },
  { name: "blue", value: "#2970b7" },
  { name: "light_blue", value: "#ADD8E6" },
  { name: "turquoise", value: "#40E0D0" },
  { name: "duck_blue", value: "#006c80" },
  { name: "dark_green", value: "#005000" },
  { name: "green", value: "#008000" },
  { name: "olive", value: "#A3BB9E" },
  { name: "light_green", value: "#BBDED6" },
  { name: "khaki", value: "#787942" },
  { name: "jean", value: "#8BA7D5" },
  { name: "gold", value: "#DAA520" },
  { name: "silver", value: "#C1C1C1" }
];

const getColorHexByName = name =>
  get(
    colors.find(n => n.name == name),
    "value",
    null
  );

  module.exports = {
      colors,
      getColorHexByName
  }
