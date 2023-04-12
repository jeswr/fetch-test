fetch('https://api.github.com/repos/eyereasoner/eye/releases/latest')
  .then(res => res.text())
  .then(text => console.log(text.slice(0, 10)));
