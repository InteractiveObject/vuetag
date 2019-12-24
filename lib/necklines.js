
  const {get } = require("lodash");

  const necklines = [
    {
      name: 'strapless',
      image: 'strapless',
      similar: [],
    },
    {
      name: 'boatneck_bateau',
      image: 'boatneck_bateau',
      similar: [],
    },
    {
      name: 'cowl', //"Col bénitier",
      image: 'cowl',
      similar: [],
    },
    {
      name: 'hooded', //"Col capuche",
      image:'hooded',
      similar: [],
    },
    {
      name: 'square_neck',
      image: 'square_neck',
      similar: [],
    },
    {
      name: 'shawl', //"Col châle",
      image: 'shawl',
      similar: [],
    },
    {
      name: 'funnel_neck', //"Col cheminée",
      image: 'funnel_neck',
      similar: [],
    },
    {
      name: 'collared', //"Col chemise",
      image: 'collared',
      similar: [],
    },
    {
      name: 'peter_pan', //"Col claudine",
      image: 'peter_pan',
      similar: [],
    },
    {
      name: 'keyhole', //"Col goutte",
      image: 'keyhole',
      similar: [],
    },
    {
      name: 'bow', //"Col lavallière / cravate",
      image: 'bow',
      similar: [],
    },
    {
      name: 'mandarin', //"Col mao",
      image: 'mandarin',
      similar: [],
    },
    {
      name: 'crewneck', //"Col ras du cou",
      image: 'crewneck',
      similar: [],
    },
    {
      name: 'highneck',
      image: 'highneck',
      similar: [],
    },
    {
      name: 'henley',
      image: 'henley',
      similar: [],
    },
    {
      name: 'v_neck',
      image: 'v_neck',
      similar: [],
    },
    {
      name: 'zip_neck',
      image: 'zip_neck',
      similar: [],
    },
    {
      name: 'plunge_neck',
      image: 'scoop_neck',
      similar: ['scoop_neck', 'sweetheart_neck'],
    },
    {
      name: 'halter_neck',
      image: 'halter_neck',
      similar: [],
    },
    {
      name: 'off_shoulder',
      image: 'off_shoulder',
      similar: ['one_shoulder'],
    },
  ];
  

  const findNeckline = name =>
  necklines.find(n => n.name == name) ||
  necklines.find(n => n.similar.includes(name) == name);


  module.exports = { necklines, findNeckline }
