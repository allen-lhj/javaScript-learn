let fs = require('fs');
    const readFile = function(fileName) {
      return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', function(err, data) {
          if (err) { return reject(err); }
          resolve(data);
        })
      })
    }
    async function read() {
      // try {
        // var value = await readFile('./name.txt')
        // var value2 = await readFile(value, 'utf-8')
        let [value, value2] = await Promise.all([readFile('./name.txt', 'utf-8'), readFile('./number.txt', 'utf-8')])
      // console.log(value)
      // return value
      return {value: value, value2: value2}
      // } catch (error) {
      //   console.error(error)
      // }
    }
    var a = read();
    console.log(a)

    a.then((data) => {
      console.log(data)
    })