
const {flatten, get, isEqual, findIndex, pick} = require('lodash');

const product_by_attributes = [
    {
      category: [
        'polo_shirts',
        'blouses',
        'shirts',
        't_shirts',
        'tank_tops',
        'sweaters',
        'sweatshirts',
        'tops',
      ],
      attributes: [
        [
          'type',
          'color',
          'fashion_style',
          'sleeve_length',
          'top_length',
          'occasion',
        ],
        ['material', 'pattern', 'neckline', 'size'],
      ],
    },
    {
      category: ['cardigans_and_shrugs'],
      attributes: [
        [
          'type',
          'color',
          'fashion_style',
          'sleeve_length',
          'top_length',
          'occasion',
        ],
        ['material', 'pattern', 'size'],
      ],
    },
    {
      category: ['jackets'],
      attributes: [
        ['type', 'color', 'fashion_style', 'sleeve_length', 'jacket_length'],
        ['occasion', 'material', 'pattern', 'size'],
      ],
    },
    {
      category: ['coats'],
      attributes: [
        ['type', 'color', 'fashion_style', 'sleeve_length', 'coat_length'],
        ['occasion', 'material', 'pattern', 'size'],
      ],
    },
    {
      category: ['dresses'],
      attributes: [
        ['color', 'fashion_style', 'sleeve_length', 'dress_length', 'occasion'],
        ['material', 'pattern', 'neckline', 'size', 'style'],
        ['type'],
      ],
    },
    {
      category: ['pants'],
      attributes: [
        ['color', 'fashion_style', 'length', 'occasion', 'material'],
        ['pattern', 'size', 'fit', 'type'],
      ],
    },
    {
      category: ['jeans'],
      attributes: [
        ['denim_wash', 'fashion_style', 'length', 'occasion', 'type'],
        ['size', 'design_details'],
      ],
    },
    {
      category: ['shorts', 'skirts'],
      attributes: [
        ['color', 'fashion_style', 'length', 'occasion', 'material'],
        ['pattern', 'size', 'type'],
      ],
    },
    {
      category: ['shorts'],
      attributes: [
        ['color', 'fashion_style', 'length', 'occasion', 'material'],
        ['pattern', 'size', 'type'],
      ],
    },
    {
      category: ['jumpsuits', 'rompers'],
      attributes: [
        ['color', 'fashion_style', 'sleeve_length', 'length', 'occasion'],
        ['material', 'pattern', 'neckline', 'size'],
      ],
    },
    {
      category: ['footwear'],
      attributes: [
        ['type', 'color', 'fashion_style', 'occasion', 'narrow_material'],
        ['pattern', 'heel_height', 'heel_type', 'toe_type', 'toe_style'],
        ['size', 'design_details', 'boot_height'],
      ],
    },
    {
      category: ['bags'],
      attributes: [
        ['type', 'color', 'fashion_style', 'occasion', 'narrow_material'],
        ['pattern', 'design_details'],
      ],
    },
  ];
  

  const getGroupedAttributesByCategory = category => {
    const e = product_by_attributes.find(p => p.category.includes(category));
    return e ? e.attributes : [];
  };
  
  const getAllAttributesByCategory = category => {
    return flatten(getGroupedAttributesByCategory(category));
  };

  module.exports = {
    getGroupedAttributesByCategory,
    getAllAttributesByCategory
  }