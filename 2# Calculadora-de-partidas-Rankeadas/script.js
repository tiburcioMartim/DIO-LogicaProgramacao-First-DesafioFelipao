/* ================================================= { FUNCTIONS } ================================================= */
function calculateVictories(pVictorie, pDefeat) {
    let rWinningBalance = pVictorie - pDefeat;
    return rWinningBalance;
}

function rankeChecker(checker) {
    let classification = checker;
    let rRank = rankBase(classification)
    return rRank
}

function rankBase(pVictorie) {
    let ratings = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
    let victorie = pVictorie;
    let rRatings = ''

    if (victorie <= 10) {
        rRatings = ratings[0]; // 'Ferro'

    } else if (victorie > 10 && victorie <= 20) {
        rRatings = ratings[1]; // 'Bronze'

    } else if (victorie > 20 && victorie <= 50) {
        rRatings = ratings[2] // 'Prata'

    } else if (victorie > 50 && victorie <= 80) {
        rRatings = ratings[3] // 'Ouro'

    } else if (victorie > 80 && victorie <= 90) {
        rRatings = ratings[4] // 'Diamante'

    } else if (victorie > 90 && victorie <= 100) {
        rRatings = ratings[5] // 'Lendário'

    } else {
        rRatings = ratings[6] // 'Imortal'
    }

    return rRatings
}

/* ================================================= { CODE } ================================================= */

// Ferro
let victorie = 5
let defeat = 2
let winningBalance = calculateVictories(victorie, defeat);
let rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)


// Bronze
victorie = 15
defeat = 2
winningBalance = calculateVictories(victorie, defeat);
rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)


// Prata
victorie = 25
defeat = 2
winningBalance = calculateVictories(victorie, defeat);
rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)


// Ouro
victorie = 60
defeat = 2
winningBalance = calculateVictories(victorie, defeat);
rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)


// Diamante
victorie = 85
defeat = 2
winningBalance = calculateVictories(victorie, defeat);
rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)


// Lendário
victorie = 95
defeat = 2
winningBalance = calculateVictories(victorie, defeat);
rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)


// Imortal
victorie = 1000
defeat = 5
winningBalance = calculateVictories(victorie, defeat);
rank = rankeChecker(winningBalance)
console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${rank}`)