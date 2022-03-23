let fs = require('fs');

var p1 = new Promise((resolve, reject) => {
  fs.readFile('./name.txt', 'utf-8', function(err, data) {
    if (data) {
      resolve(data)
    }
  })
})

var p2 = new Promise((resolve, reject) => {
  fs.readFile('./number.txt', 'utf-8', function(err, data) {
    if (data) {
      resolve(data)
    }
  })
})

var p3 = new Promise((resolve, reject) => {
  fs.readFile('./score.txt', 'utf-8', function(err, data) {
    if (data) {
      resolve(data)
    } else {
      reject(new Error('失败'))
    }
  })
})

var p = Promise.all([p1, p2, p3])

// p.then(res => console.log(res)).catch((err) => console.log(err))
// console.log(p)

// 优化代码

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (data) {
        resolve(data);
      }
    })
  })
}

readFile('./name.txt')
  .then((data) => {
    return readFile(data)
  })
  .then((data) => {
    return readFile(data)
  })
  .then((data) => {
    console.log(data)
  })


readFile('./name.txt')
  .then(data => readFile(data))
  .then(data => readFile(data))
  .then(data => console.log(data))

