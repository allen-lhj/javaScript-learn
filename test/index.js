// 原始回调地狱

// let fs = require('fs');

// fs.readFile('./name.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     fs.readFile(data, 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err)
//       } else {
//         fs.readFile(data, 'utf-8', (err, data) => {
//           if (data) {
//             console.log(data)
//           }
//         })
//       }
//     })
//   }
// })

// Promsise

// let fs = require('fs');

// function promisify(func) {
//   return function(...arg) {
//     return new Promise((resolve, reject) => {
//       func(...arg, (err, data) => {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(data)
//         }
//       })
//     })
//   }
// }

// var readFile = promisify(fs.readFile)

// readFile('./name.txt', 'utf-8')
//   .then(data => readFile(data, 'utf-8'))
//   .then(data => readFile(data, 'utf-8'))
//   .then(data => console.log(data));

// Generator

const { co } = require('co');
let fs = require('fs');
function promisify(func) {
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

var readFile = promisify(fs.readFile)

function * read() {
  let value1 = yield readFile('./name.txt', 'utf-8');
  let value2 = yield readFile(value1, 'utf-8');
  let value3 = yield readFile(value2, 'utf-8');
  console.log(value3);
}
// co简单逻辑
function Co(iter) {
  return new Promise((resolve, reject) => {
    let next = (data) => {
      let {value, done} = iter.next(data);
      if (done) {
        // 递归出口
        resolve(value)
      } else {
        value.then((val) => {
          next(val)
        },(err) => {
          console.log(err)
        })
      }
    }
    next();
  })
}
var file = co(read())
console.log(file)
// let iter = read();

// let {value, done } = iter.next()
// console.log(value)
// value.then(value1 => {
//   console.log(value1)
//   let {value, done} = iter.next(value1);
//   return value
// }).then(value2 => {
//   console.log(value2);
//   let {value, done} = iter.next(value2);
//   return value;
// }).then(value3 => {
//   console.log(value3)
// })