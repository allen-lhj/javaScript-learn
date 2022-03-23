let fs = require('fs')

function promisify (func) {
  return function(...arg) {
    return new Promise((resolve, reject) => {
      func(...arg, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

let readFile = promisify(fs.readFile)

readFile('./name.txt', 'utf-8').then(data => console.log(data))