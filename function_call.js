function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    var result = convert(amount, rate);
    console.log(result);
}
function convert(x, y) {
    return x * y;
}
