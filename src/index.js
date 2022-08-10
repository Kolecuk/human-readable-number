module.exports = function toReadable(number) {
    const arr19 = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const arr90 = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    const str = Math.abs(number).toString();
    const arr = str.split('');
    let res = '';
    if (arr.length === 3) {
        if (+arr[0] > 0) {
            res = `${arr19[+arr[0]]} hundred`;
        }

        if (+arr[1] > 1) {
            res = `${res} ${arr90[+arr[1] - 2]}`;
            if (+arr[2] > 0) {
                res = `${res} ${arr19[+arr[2]]}`;
            }
        }

        else if (+arr[1] === 1) {
            res = `${res} ${arr19[+arr[2] + 10]}`;
        }

        else {
            if (+arr[2] > 0) {
                res = `${res} ${arr19[+arr[2]]}`;
            }
        }
    }

    else if (arr.length === 2) {
        if (+arr[0] > 1) {
            res = `${arr90[+arr[0] - 2]}`;
            if (+arr[1] > 0) {
                res = `${res} ${arr19[+arr[1]]}`;
            }
        }

        // else if (+arr[0] === 1) {
        else {
            res = `${arr19[+arr[1] + 10]}`;
        }
    }

    else {
        if (+arr[0] > 0) {
            res = `${arr19[+arr[0]]}`;
        }
    }
    return res;
}
