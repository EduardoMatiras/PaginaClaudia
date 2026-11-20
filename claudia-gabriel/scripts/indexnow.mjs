// Avisa o Bing (e, por ele, ChatGPT e Copilot), Yandex e outros buscadores sobre páginas novas ou
// alteradas, via IndexNow. Rode DEPOIS que o site estiver publicado: npm run indexnow
const HOST = "www.psiclaudiagabriel.com.br";
const KEY = "f3cfba876c07480b4435da4630d5faca"; // arquivo público em /public/<chave>.txt

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1])
  .filter((u) => !/\.(jpg|jpeg|png|webp)$/i.test(u));

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} (${urlList.length} URLs)`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
