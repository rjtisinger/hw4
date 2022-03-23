/* Richard J Tisinger
3/17/22
Dr. Lo's ITEC 225-01
Radford U
*/

const key = "key";

function binaryToDecimal(binaryIn = document.getElementById("binIn").value) {
    if (binaryIn == null || binaryIn == "") {
        alert("Please enter a number")
        return null;
    }
    let starting = 0;
    let working = 0;
    while (binaryIn > 0) {

        if (binaryIn % 10 != 1 && binaryIn % 10 != 0) {
            alert("Not a valid binary number");
            return null;
        }

        // working % 10 gives only the lowest (placed) digit
        working += (binaryIn % 10) * Math.pow(2, starting);

        starting++;
        // parseInt b/c I don't want any floats; /10 removes the lowest digit
        binaryIn = parseInt(binaryIn / 10);
    }
    document.getElementById("output").innerHTML = working;
    return working;
}
function decimalToBinary(decimalIn = document.getElementById("deciIn").value) {
    if (decimalIn == null || decimalIn == "") {
        alert("Please enter a number")
        return null;
    }
    let working = 0;
    console.log("Decimal to convert is: " + decimalIn);
    while (decimalIn > 0) {
        let power = findNearestPowerOfTwo(decimalIn);
        working += 1 * Math.pow(10, power);
        console.log(decimalIn + " - " + Math.pow(2, power));
        decimalIn = decimalIn - Math.pow(2, power);
    }
    document.getElementById("output").innerHTML = working;
}
// helper function for decimalToBinary() | only works on positive numbers
function findNearestPowerOfTwo(input) {
    let start = 0;
    while (Math.pow(2, start) <= input) {
        start++;
    }
    if (start != 0) {
        console.log("The nearest power of 2 to " + input + " is " + start-1);
        return start-1;
    }
    else return start;
}
// one function to run all the encryptions
function encrypt() {
    let value = document.getElementById("passIn").value;
    if (null == value || value == "") {
        alert("Invalid input: blank");
        return null;
    }
    AESEncryptian(value);
    SHA1Encryptian(value);
    SHA224Encryptian(value);
    SHA256Encryptian(value);

}

function AESEncryptian(value = document.getElementById("passIn").value) {
    let hash = CryptoJS.AES.encrypt(value, key).toString();
    document.getElementById("encrypt1").innerHTML = hash;
    console.log(hash);
}
function SHA1Encryptian(value = document.getElementById("passIn").value) {
    
    let hash = CryptoJS.SHA1(value);
    document.getElementById("encrypt2").innerHTML = hash;
}
function SHA224Encryptian(value = document.getElementById("passIn").value) {
    
    let hash = CryptoJS.SHA224(value);
    document.getElementById("encrypt3").innerHTML = hash;
}
function SHA256Encryptian(value = document.getElementById("passIn").value) {
    
    let hash = CryptoJS.SHA256(value);
    document.getElementById("encrypt4").innerHTML = hash;
}