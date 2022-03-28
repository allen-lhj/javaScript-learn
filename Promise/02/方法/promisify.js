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


readFile('./name.txt', 'utf-8')
.then(data => readFile(data, 'utf-8'))
.then(data => readFile(data, 'utf-8'))
.then(data => console.log(data))

async function read() {
  var value = await readFile('./name.txt', 'utf-8');
  // console.log(value)
  return value;
}
var a = read()
console.log(a)
// readFile('./name.txt', 'utf-8')
// .then(data => readFile(data, 'utf-8'))
// .then(data => readFile(data, 'utf-8'))
// .then(data => console.log(data))


// function * read() {
//   let value1 = yield readFile('./name.txt', 'utf-8');
//   let value2 = yield readFile(value1, 'utf-8');
//   let value3 = yield readFile(value2, 'utf-8')
//   console.log(value3);
// }

// let iter = read();

let {value, done} = iter.next()
value.then((value1) => {
  console.log(value1)
  let {value, done} =  iter.next(value1);
  value.then(value2 => {
    console.log(value2)
    let {value, done} = iter.next(value2)
    value.then(value3 => {
      console.log(value3)
    })
  })
})

// function Co(iter) {
//   return new Promise((resolve, reject) => {
//     let next = (data) => {
//       let {value, done} = iter.next(data);
//       if (done) {
//         // 递归出口
//         resolve(value)
//       } else {
//         value.then((val) => {
//           next(val)
//         },(err) => {
//           console.log(err)
//         })
//       }
//     }
//     next();
//   })
// }

// let promise = Co(read())

// promise.then((val) => {
//   console.log(val)
// })