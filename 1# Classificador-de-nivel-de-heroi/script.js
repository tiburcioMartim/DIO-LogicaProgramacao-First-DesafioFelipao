/* ==============================================={ FUNCTIONS }============================================================= */
function experience(x){
    nivel[0] = nivel[x];
    console.log('');
    console.log(`O Herói de nome ${nome} está no nível de ${nivel[0]}`); 
    for (let index = 0; index < xp; index += 200) {
        console.log(`+${index} XP`);        
    }
    console.log('');
}

/* =================================================={ CODE }========================================================== */

const nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];
const nome = "Aragorn";
const xp = 10000

if (xp < 1000) {    
    experience(0)

} else if (xp >= 1001 && xp <= 2000) {
    experience(1)

} else if (xp >= 2001 && xp <= 5000) {
    experience(2)

} else if (xp >= 5001 && xp <= 7000) {
    experience(3)

} else if (xp >= 7001 && xp <= 8000) {
    experience(4)

} else if (xp >= 8001 && xp <= 9000) {
    experience(5)

} else if (xp >= 9001 && xp <= 10000) {
    experience(6)

} else if (xp > 10000) {
    experience(7)
}
