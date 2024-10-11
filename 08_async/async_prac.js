function timeout(color) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(color);
      document.body.style.backgroundColor = color;
    }, 1000);
  });
}

async function exec() {
  await timeout("red");
  await timeout("orange");
  await timeout("yellow");
  await timeout("green");
  await timeout("blue");
}

exec();
