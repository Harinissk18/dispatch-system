let orders = [
    {
        id: "A101",
        customer: "Customer 1",
        timeLeft: 10,
        risk: "HIGH",
        status: "Pending"
    },
    {
        id: "A102",
        customer: "Customer 2",
        timeLeft: 40,
        risk: "MEDIUM",
        status: "Pending"
    },
    {
        id: "A103",
        customer: "Customer 3",
        timeLeft: 120,
        risk: "LOW",
        status: "Pending"
    }
];

function displayOrders() {

    let table = document.getElementById("orderTable");

    table.innerHTML = "";

    orders.forEach(function(order) {

        let row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.timeLeft} mins</td>
                <td>${order.risk}</td>
                <td>${order.status}</td>
                <td>
                    <button onclick="dispatchOrder('${order.id}')">
                        Dispatch
                    </button>
                </td>
            </tr>
        `;

        table.innerHTML += row;
    });

    updateDashboard();
}


function dispatchOrder(id) {

    let order = orders.find(function(order) {
        return order.id === id;
    });

    if (order) {
        order.status = "Dispatched";
    }

    displayOrders();
}


function updateDashboard() {

    document.getElementById("totalOrders").innerText =
        orders.length;

    let highRiskCount = orders.filter(function(order) {
        return order.risk === "HIGH";
    }).length;

    document.getElementById("highRisk").innerText =
        highRiskCount;

    let dispatchedCount = orders.filter(function(order) {
        return order.status === "Dispatched";
    }).length;

    document.getElementById("dispatched").innerText =
        dispatchedCount;
}


displayOrders();
