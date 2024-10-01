function calculateNumbers(var1, var2) {
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        console.error('Both arguments must be numbers');
        return null;
    }
    const sum = var1 + var2;
    console.log(sum);
    return sum;
}