export function showBtn(btn) {
    const $operation = document.querySelector(".operation");
    const $result = document.querySelector(".result");

    const operations = ["+", "-", "/", "x"];

    //regex: /[+-/x]/g

    if (sessionStorage.getItem("operation")) {
        //$result.innerHTML
        $result.innerHTML = "";
        sessionStorage.clear();
    }


    // Show operation in progress
    if (operations.includes(btn.innerHTML)) {
        $operation.innerHTML += `${$result.innerHTML} ${btn.innerHTML} `;
        sessionStorage.setItem("operation", btn.innerHTML);
    }

    // Show result at the first moment
    if (!$result.innerHTML || !$operation.innerHTML.endsWith("+")) {
        $result.innerHTML += btn.innerHTML;
    }

    // Show result after operation
    const operation = $operation.innerHTML.split(" ");

    if (operation.length >= 3) {
        operation.forEach((number, index) => {
            if (operations.includes(number)) {
                if (number === "+") {
                    const num1 = operation[index - 1];
                    const num2 = operation[index + 1];
                    console.log(parseInt(num1) + parseInt(num2));
                }
            }
        })
    }

}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
