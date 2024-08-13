export function showBtn(btn) {
    const $operation = document.querySelector(".operation");
    const $result = document.querySelector(".result");

    $operation.innerHTML += btn.innerHTML;

    if (!$result.innerHTML || !$operation.innerHTML.endsWith("+")) {
        $result.innerHTML += btn.innerHTML;
    }

    // 9 + 9
    /*const operation = $operation.innerHTML.split("");

    operation.*/

    //console.log(operation);

    /*if ($operation.innerHTML.endsWith("+")) {
        addition($result.innerHTML + );
        console.log("bien");
    }*/
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
