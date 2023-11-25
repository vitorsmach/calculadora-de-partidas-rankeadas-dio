function calcRanking(vitorias, derrotas){

    const vitoriasNumber = Number(vitorias);
    const derrotasNumber = Number(derrotas);

    const calc = vitoriasNumber - derrotasNumber;

    const resultado =
    calc < 10 ? "Ferro" :
    calc >= 11 && calc <= 20  ? "Bronze" :
    calc >= 21 && calc <= 50  ? "Prata" :
    calc >= 51 && calc <= 80  ? "Ouro" :
    calc >= 81 && calc <= 90  ? "Diamante" :
    calc >= 91 && calc <= 100  ? "Lendário" :
    "Imortal";

    return { calc, resultado };

}

let { calc, resultado } = calcRanking(80, 10);

console.log(`O herói tem de saldo de ${calc} vitórias e está no nível ${resultado}`);