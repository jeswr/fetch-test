async function main() {
  try {
    const res = await fetch('https://api.github.com/repos/eyereasoner/eye/releases/latest');
    const text = await res.text();
    console.log(text, res.status);
    if (res.status !== 200) {
      process.exit(1)
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
