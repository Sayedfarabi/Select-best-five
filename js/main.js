document.getElementById("player-expenses").addEventListener("click", function () {
    const orderListArea = document.getElementById("order-list-area");
    const orderListCount = orderListArea.children.length;
    const playerInputValue = getInputValue("per-player-cost");
    if (!isNaN(playerInputValue)) {
        const totalPerPlayerCost = playerInputValue * orderListCount;
        document.getElementById("player-cost").innerText = totalPerPlayerCost;
        return
    } else {
        alert("Please, Provide a input number");
        return
    }
})

document.getElementById("total-expenses").addEventListener("click", function () {
    const managerInputValue = getInputValue("manager-cost");
    const coachInputValue = getInputValue("coach-cost");
    const elementValue = getElementValue("player-cost");
    if (!isNaN(managerInputValue) && !isNaN(coachInputValue) && !isNaN(elementValue)) {
        const totalInputCost = managerInputValue + coachInputValue;
        const totalCost = totalInputCost + elementValue;
        document.getElementById("total-cost").innerText = totalCost;
        return
    } else {
        alert(" Please provide input value");
    }
})
