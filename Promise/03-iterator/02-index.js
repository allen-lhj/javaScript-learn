// 为对象添加迭代器
let obj = {
  start: [1,2,3],
  end: [7,8,9],
  [Symbol.iterator]() {
    var nextIndex = 0,
        arr = [...this.start, ...this.end],
        len = arr.length;
    return {
      next(){
        if (nextIndex < len) {
          return { value: arr[nextIndex++], done: false };
        }
        return { value: undefined, done: true };
      }
    }
  }
}

for(let i of obj) {
  console.log(i)
}