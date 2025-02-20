document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        item.addEventListener("click", function () {
            alert(`Você selecionou: ${item.querySelector("h3").innerText}`);
        });
    });

    const addItemForm = document.getElementById("addItemForm");

    addItemForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const section = document.getElementById("section").value;
        const itemName = document.getElementById("itemName").value;
        const itemPrice = document.getElementById("itemPrice").value;

        const newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `<h3>${itemName}</h3><p>R$ ${itemPrice}</p>`;

        document.querySelector(`#${section}`).appendChild(newItem);

        // Reset form
        addItemForm.reset();
    });
});
