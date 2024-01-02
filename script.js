const display = document.getElementById("display");

const insertValue = (value) => {
    const input = display.value;
    if (input.length === 0 && (value === "0" || value === "00")) {
        return;
    }
    display.value += value;
}

const clearValue = () => {
    display.value = "";
}

const deleteValue = () => {
    const input = display.value;
    if (input.length !== 0) {
        display.value = input.substr(0, input.length - 1);
    }
}




const handleOpr = (value) => {

    const input = display.value;

    // Cond 1: Operator must not apear in first place
    if (input.length === 0 && isOpr(value)) {
        return;
    }
    const lastVal = input[input.length - 1];

    // Cond 2: Operator must not appear multiple at the same pos
    if (lastVal === value) {
        return;
    }

    // Cond 3: If last val is opeartor and the newValue is also different opr, replace it
    if (isOpr(lastVal) && lastVal !== value) {
        deleteValue();
    }


    display.value += value;
}


const isOpr = (value) => {
    return (value === "+" || value === "-" || value === "/" || value === "*");
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

    if(hasOpr) {
        display.value = eval(input)
    }

}


// NEW 1

// const display = document.getElementById('display');

// const getValue = (value) => {
//     const input = display.value;

//     if(input.length === 0 && (value === '0' || value === '00' )){
//         return;
//     }
//     display.value += value;
// }

// const clearAll = () => {
//     display.value= "";
// }

// const deleteValue = () => {
//     const input = display.value;

//     if(input.length !== 0) {
//         display.value = input.substr(0, input.length-1)
//     }
// }

// const isOpr = value => {
//    return (value === "+" || value === "-" || value === "*" || value === "/" );
// }

// const operHand = (value) => {
//    const input = display.value;

// // consition 1 

//    if (input.length === 0 && isOpr(value)){
//     return;
//    }

// // condition 2 

//    const lastVal = input[input.length - 1];

//    if (lastVal ===value) {
//     return;
//    }

// //    consdition 3 

//    if(isOpr(lastVal) && lastVal !== value){
//     deleteValue();
//    }

//    display.value += value;
// }


// const handleEqual = () => {

//     let input = display.value;
//     if (input.length === 0) return;

//     const lastVal = input[input.length - 1];
    
//     if (isOpr(lastVal)) {
//         deleteValue();
//         input = display.value;
//     }

//     const hasOpr = input.split('').some((val) => isOpr(val));

//     if(hasOpr) {
//         display.value = eval(input)
//     }

// }



