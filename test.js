async function main() {
  try {
    const res = await fetch('https://raw.githubusercontent.com/jeswr/fetch-test/main/data.txt');
    const text = await res.text();
    console.log(text.slice(0, 10), res.status);
    if (res.status !== 200) {
      process.exit(1)
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
