const { fetch } = require('@inrupt/universal-fetch');

async function main() {
  try {
    const res = await fetch('https://id.dev-next.inrupt.com/inrupte2erequestoressdevnext');
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
