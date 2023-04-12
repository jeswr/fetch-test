fetch('https://api.github.com/repos/eyereasoner/eye/releases/latest')
  .then(res => {
    if (res.status !== 200) {
      process.exit(1);
    }
    return res.text();
  })
  .then(text => console.log(text.slice(0, 10), res.status))
  .catch(() => {
    process.exit(1)
  })
