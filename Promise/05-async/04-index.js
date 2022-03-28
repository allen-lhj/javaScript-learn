function logInOrder(urls) {
  // 远程读取所有URL
  const textPromise = urls.map(url => {
    return fetch(url).then(response => response.text());
  })

  // 按次序输出
  textPromise.reduce((chain, textPromise) => {
    return chain.then(() => textPromise)
        .then(text => console.log(text));
  }, Promise.resolve())
}

async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}

async function logOutOrder(urls) {
  // 并发读取远程url
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  })

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}