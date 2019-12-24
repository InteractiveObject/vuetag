const vera = require('./lib/index')

// console.log(vera.attributes)
// console.log(vera.attributesByCategory("tops"))
//console.log(vera.attributeValues("footwear", "toe_type"))


console.log(vera.getGroupedAttributesByCategory('tops'))
console.log(vera.getAllAttributesByCategory('tops'))
