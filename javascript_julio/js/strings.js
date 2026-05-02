let variavelTeste = "Olá, Mundo!";

- .length
variavelTeste.length; // 12 (conta os caracteres, incluindo espaços e pontuação)
- .split()
variavelTeste.split(", "); // ["Olá", "Mundo!"]
- .toLowerCase()
variavelTeste.toLowerCase(); // "olá, mundo!"
- .toUpperCase()
variavelTeste.toUpperCase(); // "OLÁ, MUNDO!"
- .includes()
variavelTeste.includes("Mundo"); // true (verifica se a string contém "Mundo")
- .replaceAll()
variavelTeste.replaceAll("Mundo", "JavaScript"); // "Olá, JavaScript!"
- .trim()
variavelTeste.trim(); // "Olá, Mundo!" (remove espaços em branco no início e no final)
- .slice()
variavelTeste.slice(0, 4); // "Olá, " (extrai uma parte da string)
- .substring()
variavelTeste.substring(0, 4); // "Olá, " (extrai uma parte da string, similar ao slice)