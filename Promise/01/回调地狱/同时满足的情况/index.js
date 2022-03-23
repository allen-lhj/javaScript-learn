let fs = require('fs')

let arr = [];

function show(arr) {
  console.log(arr)
}
// 如果我们要在读取文件完成之后，展示出arr。
// 此时我们没有办法知道哪个函数会先执行完，哪个最后执行，
// 但是知道完成之后，数组的length是3，所以每个函数都要进行
// 一次判断，并且最后总会打印出结果
fs.readFile('./name.txt', 'utf-8', (err, data) => {
  if (data) {
    arr.push(data)
  }
  arr.length === 3 && show(arr);
})

fs.readFile('./number.txt', 'utf-8', (err, data) => {
  if (data) {
    arr.push(data)
  }
  arr.length === 3 && show(arr);
})

fs.readFile('./score.txt', 'utf-8', (err, data) => {
  if (data) {
    arr.push(data)
  }
  arr.length === 3 && show(arr);
})