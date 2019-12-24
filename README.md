# Installation

    npm install @vera-fashion-app/taxonomy

# Usage
    const vera = require('@vera-fashion-app/taxonomy')

# API


Get grouped attributes by category:

    vera.getGroupedAttributesByCategory('tops')

get all attributes for category :

    vera.getAllAttributesByCategory('tops')

Get attributes values :

    vera.attributeValues("footwear", "toe_type")


Get drawers list :

    console.log(vera.drawers)


Get colors list :

    console.log(vera.colors)

Get color value :

    vera.getColorHexByName('black')

Get necklines list :

    vera.necklines


Get patterns list:

    vera.patterns


