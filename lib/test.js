const vue = require('./index')

console.log(vue.attributes)
console.log(vue.attributesByCategory("bags"))
console.log(vue.attributeValues("bags", "color"))



async function test() {
    const tags = await vue.getTags("",
      "https://firebasestorage.googleapis.com/v0/b/vera-7e904.appspot.com/o/images%2FmOdvj3YfLKRXEeHOmSyRoaILJJX2%2F2883ad10-9c2c-4e93-bbb1-4155e01ab48b.jpg?alt=media&token=3e4ca264-7c89-4c59-9610-1ccbde1da245"
    );
    console.log(tags);
  }
  
  test();