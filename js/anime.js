const request = require("request");

async function animeText() {
  let answer = "bubu";
  const options = {
    method: "GET",
    url: "https://animechan.vercel.app/api/quotes/character?name=saitama"
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const text = JSON.parse(body);
    answer = text[Math.floor(Math.random() * text.length)].quote;
  });
  return answer;
}

function singleText() {
  return "Čia yra random tekstas";
}

function eilerastis() {
  const randomStrings = [
    "Koks baltumas, neapsakomas baltumas!",
    "Kur dangus, kur žemė – neatskirsi.",
    "Krinta sniegas – baltas nerūpestingumas.",
    "Rodos, šūktelsi iš džiaugsmo ir numirsi.",
    "Užsimerksiu, atsigulsiu kur pusnyne",
    "Tartum saulei atsegiosiu, atlaposiu sau krūtinę",
    "Tegul prikrenta į širdį to baltumo",
    "To švaraus, švelnaus ir minkšto nerūpestingumo."
  ];

  return randomStrings[Math.floor(Math.random() * randomStrings.length)];
}

async function randomText(strfun) {
  return strfun();
}

const t1 = randomText(singleText);
const t2 = randomText(eilerastis);
const t3 = await randomText(animeText);

console.log(t1);
console.log(t2);
console.log(t3);