// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    alert("Form submitted successfully!");
    form.reset();
    form.classList.remove("was-validated");
});
// FETCH CUSTOMER DATA
async function loadCustomers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        displayCustomers(data.slice(0, 6));

    } catch (error) {
        console.error(error);
        document.getElementById("customerTable").innerHTML =
            `<tr><td colspan="3" class="text-danger">Error loading data</td></tr>`;
    }
}

function displayCustomers(customers) {
    const table = document.getElementById("customerTable");
    table.innerHTML = "";

    customers.forEach(customer => {
        table.innerHTML += `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.company.name}</td>
            </tr>
        `;
    });
}

loadCustomers();