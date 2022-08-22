// Utilities JavaScript File

function selectButtonHandler(event) {
    const orderListArea = document.getElementById("order-list-area");
    const orderListLength = orderListArea.children.length;
    if (orderListLength < 5) {
        const buttonParent = event.target.parentNode;
        const player = buttonParent.getElementsByTagName("h4");
        const newList = document.createElement("li");
        newList.innerText = player[0].innerText;
        orderListArea.appendChild(newList);
        event.target.setAttribute("disabled", true)
    } else {
        alert("You cannot select more than five players")
    }
}

function getInputValue(inputId) {
    const inputValueString = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputValueString);
    return inputValue
}

function getElementValue(elementId) {
    const elementValueString = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}