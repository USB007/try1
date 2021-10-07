
const fs = require('fs')

b = fs.writeFileSync('file.txt',"THIS IS DATA 2")
console.log(b)
console.log("finished reading the file")