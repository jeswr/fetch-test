fetch('https://raw.githubusercontent.com/jeswr/fetch-test/main/data.txt')
  .then(res => res.text())
  .then(text => console.log(text));
