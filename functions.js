export function showBtn(btn) {
    const $operation = document.querySelector(".operation");
    const $result = document.querySelector(".result");

    const operations = ["+", "-", "/", "x"];

    //regex: /[+-/x]/g
    if (sessionStorage.getItem("operation")) {
        $result.innerHTML = "";
        sessionStorage.clear();
    }

    // Check if the board has to be clean or not
    let clearBoard = false;

    // Show result
    if ($result.innerHTML === "" && !$operation.innerHTML.endsWith("+") && !$operation.innerHTML.endsWith("-") && !$operation.innerHTML.endsWith("x") && !$operation.innerHTML.endsWith("/")) {
        $result.innerHTML += btn.innerHTML;
        clearBoard = true;
    } else { // If a symbol is selected, do operation
        clearBoard = false;
    }

    // Show operation in progress
    if (operations.includes(btn.innerHTML)) {
        console.log(`${$result.innerHTML} ${btn.innerHTML}`);
        $operation.innerHTML += `${$result.innerHTML} ${btn.innerHTML} `;
        sessionStorage.setItem("operation", btn.innerHTML);
    }

    // Show result after operation
    const operation = $operation.innerHTML.split(" ");

    operation.pop();
    if (operation.length > 3 && operations.includes(operation[operation.length - 1])) {
        operation.pop();
    }

    console.log(operation);

    if (operation.length >= 3 && !clearBoard) {
        operation.forEach((number, index) => {
            if (operations.includes(number)) {
                let num1, num2, result;
                if (index >= 3) {
                    num1 = sessionStorage.getItem("numberProgress");
                } else {
                    num1 = operation[index - 1];
                }
                num2 = operation[index + 1];
                switch (number) {
                    case "+":
                        result = parseFloat(num1) + parseFloat(num2);
                        console.log(parseInt(num1) + parseInt(num2));
                        break;
                    case "-":
                        result = parseFloat(num1) - parseFloat(num2);
                        console.log(parseInt(num1) - parseInt(num2));
                        break;
                    case "x":
                        result = parseFloat(num1) * parseFloat(num2);
                        console.log(parseInt(num1) * parseInt(num2));
                        break;
                    case "/":
                        result = parseFloat(num1) / parseFloat(num2);
                        console.log(parseInt(num1) / parseInt(num2));
                        break;
                    default:
                        break;
                }
                sessionStorage.setItem("numberProgress", result);
                $result.innerHTML = result;
            }
        })
    } else {
        //console.log("no permitido");
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
