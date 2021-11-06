function randomText() {
    return "Čia yra random tekstas";
  }
  
  function reallyRandomText() {
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
  
  function textGenerator(rand) {
    return rand();
  }
  
  const text1 = textGenerator(randomText);
  const text2 = textGenerator(reallyRandomText);
  
  console.log("---1---", text1);
  console.log("---2---", text2);