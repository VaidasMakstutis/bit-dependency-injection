function randomABC() {
    const randoChars = "abcdefghijklmnopqrstuvwxyz";
    return randoChars.charAt(Math.floor(Math.random()*randoChars.length));
}

function randomHex() {
    const randoChars = "abcdef0123456789";
    return randoChars.charAt(Math.floor(Math.random()*randoChars.length));
}

/**
 * Sugeneruoja nurodyto ilgio atsitiktiniu simboliu stringa
 */

function uuid(size, randomizeFunction) {
    let string = "";
    for (i = 0; i < size; i++) {
        string += randomizeFunction();
    }
    return string;
}

const userID1 = uuid(10, randomABC);
const userID2 = uuid(10, randomHex);

console.log("userID1 (ABC)", userID1);   //pvz.: rsgdfgfgfg
console.log("userID2 (HEX)", userID2);   //pvz.: 4f51a5a9d5