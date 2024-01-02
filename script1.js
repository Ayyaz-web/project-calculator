const display = document.getElementById('display');

const getValue = (value) => {
    const input = display.value;

    if (input.length === 0 && (value === '0' || value === '00')) {
        return;
    }

    display.value += value;
}

const clearAll = () => {
    display.value = "";
}

const deleteValue = () => {
    const input = display.value;

    if (input.length !== 0) {
        display.value = input.substr(0, input.length - 1);
    }
}

const isOpr = (value) => {
    return (value === '+' || value === '-' || value === '*' || value === '/');
}

const operHand = (value) => {

    const input = display.value;

    if (input.length === 0 && isOpr(value)) {
        return;
    }

    const lastVal = input[input.length - 1];

    if (lastVal === value) {
        return;
    }

    if (isOpr(lastVal) && lastVal !== value) {
        deleteValue();
    }

    display.value += value;
}

const handleEqual = () => {

    let input = display.value;
    if (input.length === 0) return;

    const lastVal = input[input.length - 1];

    if (isOpr(lastVal)) {
        deleteValue();
        input = display.value;
    }

    const hasOpr = input.split('').some((val) => isOpr(val));

    if (hasOpr) {
        display.value = eval(input)
    }



}




