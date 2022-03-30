
// ES6中使用默认参数
function foo(x = 2, y) {
  return x + y;
}

let result = foo(undefined, 2);
console.log(result);

// 箭头函数

let f = v => v;

// 等价于
let z = function v() {
  return v;
}
// 如果箭头函数的代码块多于一条，就要用大扩号扩起来，并且需要return语句才能返回
// 箭头函数有几个使用注意点。

// （1）箭头函数没有自己的this对象。

// （2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数

