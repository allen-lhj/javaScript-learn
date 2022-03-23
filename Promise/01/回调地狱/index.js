let fs = require('fs');

fs.readFile('./name.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  }
  if (data) {
    console.log(data)
    fs.readFile(data, 'utf-8', (err, data) => {
      console.log(data)
      if (data) {
        fs.readFile(data, 'utf-8', (err, data) => {
          console.log(data)
        })
      }
    })
  }
})