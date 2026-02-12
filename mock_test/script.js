const sections = 
document.querySelectorAll(".section");
document.querySelectorAll(".nav-link").forEach( link => {
    link.addEventListeners("click", () => {
        sections.forEacj(sec => 
            sec.classList.add("d-none")
        );
document.getElementById(link.dataset.section).classList.remove("d-none");
    });
});

document.getElementById("scrollToForm").
addEventListener("click",() => {
    sections.forEach(sec => 
        sec.classList.add("d-none")
    );
});


const services = [
    {name:"Web Technologies", desc:"Modern websites"},
    {name:"App Development", desc:"Mobile apps"},
    {name:"Consulting", desc:"IT strategy"}
];

const serviceCards = document.getElementById("serviceCards");
services.forEach(({name, desc}) => {
    serviceCards.innerHTML += 
    <div class="col-md-4">
        <div class="card mb-3">
            <div class="card-body">
                <h5>${name}</h5>
                <p>${desc}</p>
                <button class ="btn-btn-outline-primary">Explore</button>
            </div>
        </div>
    </div>
});

const requests =[];
document.getElementById("requestForm").addEventListener("submit",e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email= emailInput.value.trim();
    const service = serviceType.value;
    const desc = description.value.trim();
    if (!name || !email || !service || !desc || !email.includes("@")){
        formMessage.textContent = "please enter valid data";
        formMessage.style.color = "red";
        return
    }
    const request = { name, email, service,desc};
    requests.push(request);
    requestTable.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${service}</td>
        <td>${desc}</td>
    <tr> `;
    e.target.reset();
    formMessage.textContent = "Request submitted succesfully";
    formMessage.style.color = "green";
});

(async () =>{
    try{
        const res = await fetch("data.json");
        if(!res.ok) throw new error("failed to load");
        const data = await res.json();
        fetchData.innerHTML = `<pre>${JSON.stringify(dat, null,2)}`;
    }catch(err){
        fetchDta.textContent = "unable to load.";
    }
})();