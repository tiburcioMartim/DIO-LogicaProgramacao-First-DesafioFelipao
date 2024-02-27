class hero {
    constructor(name, age, type, atack) {
        this.name = name
        this.age = age
        this.type = type
        this.atack = atack
    }

    attack() {
        console.log(`O ${this.type} atacou usando ${this.atack}`)
    }

    explorar() {
        console.log(`O ${this.type} explorou atrás de tesouros.`)
    }
}

let mage = new hero('Gandalf', '230', 'mage', 'magia');
let warrior = new hero('Aragorn', '33', 'warrior', 'espadada');
let monk = new hero('Jigen', '27', 'monk', 'artes marciais');
let ninja = new hero('Naruto', '16', 'ninja', 'rasengan');

// Vetor com objetos
let dungeon = [
    { caverna01: 'fogo', caverna02: 'profunda', caverna03: 'ilusões', caverna04: 'meditação' }, //0
    { caverna05: 'cidade', caverna06: 'deserto', caverna07: 'floresta', caverna08: 'montanha' }, //1
    { caverna09: 'oceano', caverna10: 'planície', caverna11: 'selva', caverna12: 'tundra' }, //2
    { caverna13: 'vulcão', caverna14: 'pantano', caverna15: 'neve', caverna16: 'ruínas' }, //3
    { caverna17: 'caverna de cristal', caverna18: 'vale encantado', caverna19: 'planalto', caverna20: 'jardim secreto' }, //4
    { caverna21: 'ilha misteriosa', caverna22: 'vale dos ventos', caverna23: 'pico celestial', caverna24: 'labirinto sombrio' },// 5
    { caverna25: 'cachoeira etérea', caverna26: 'desfiladeiro sinistro', caverna27: 'geleira perdida', caverna28: 'vale das estrelas' } //6
]

// Função para determinar qual herói ataca com base na caverna escolhida
function determinarAtaque(caverna) {
    if (caverna >= 0 && caverna <= 1) {
        if (caverna == 1) {
            mage.attack();
        } else {
            mage.explorar();
        }
    } else if (caverna >= 2 && caverna <= 3) {
        if (caverna == 2) {
            warrior.attack();
        } else {
            warrior.explorar();
        }
    } else if (caverna >= 4 && caverna <= 5) {
        if (caverna == 5) {
            monk.attack();
        } else {
            monk.explorar();
        }
    } else if (caverna >= 6 && caverna <= 7) {
        if (caverna == 6) {
            ninja.attack();
        } else {
            ninja.explorar();
        }
    } else {
        console.log('Nenhum herói ataca nesta caverna.');
    }
}

let numeroCaverna = Math.floor(Math.random() * dungeon.length); // seleciona a posição aleatória de 1 dos 7 objetos.
let interiorCav = Object.values(dungeon[numeroCaverna]); // Seleciona 1 objeto dentro do vetor e retorna com todos os valores.
let randomInteriorCavIndex = Math.floor(Math.random() * interiorCav.length); // Retorna uma posição aleatória dentro do obj que está dentro do vetor
let randomInteriorCav = interiorCav[randomInteriorCavIndex]; // Entra no objeto e seleciona o valor da propriedade através do índice aleatório

console.log('');
console.log('');
console.log('**********************************************************************************');
console.log(`Caverna escolhida: ${numeroCaverna} - ${randomInteriorCav}`);

determinarAtaque(numeroCaverna); // Determinar qual herói ataca com base na caverna escolhida
console.log('**********************************************************************************');
console.log('');
console.log('');

