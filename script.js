document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.querySelector("#expense-form");
    const expenseList = document.querySelector("#expense-list");

    expenseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const description = document.querySelector("#description").value;
        const category = document.querySelector("#category").value;
        const amount = document.querySelector("#amount").value;

        if (description && category && !isNaN(amount)) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
            `;
            expenseList.appendChild(newRow);

            document.querySelector("#description").value = "";
            document.querySelector("#category").value = "";
            document.querySelector("#amount").value = "";
        } else {
            alert("Please enter valid Data");
        }
    });
});