function makeIterator(arr) {
  var nextIndex = 0;
  return {
    next() {
      if (nextIndex < arr.length) {
        return {value: arr[nextIndex++], done: false};
      }
      return { value: undefined, done: true}
    }
  }
}

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

// 迭代器模式 结构化模式： 从源以一次一个的方式抽取

// 迭代器： 是一种有序的，连续的，继续抽取的组织方式

// 内部迭代器：