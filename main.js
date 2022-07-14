const select = document.querySelector('select');
const addOrder = document.querySelector('.btn-add');
const ul = document.querySelector("ul");
const empty = document.querySelector('.empty');
select.value = "";


addOrder.addEventListener("click", (e) => {
    e.preventDefault();
    
    const text = select.value;

    if (text !== ""){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        select.value = "";
    
        empty.style.display = "none";


    }

});


function addDeleteBtn() {
    const deleteOrder = document.createElement('button');

    deleteOrder.textContent = "-";
    deleteOrder.className = "delete-btn";

    deleteOrder.addEventListener('click', (e) => {
        const order = e.target.parentElement;
        ul.removeChild(order);

        const orders = document.querySelectorAll("li");

        if (orders.length === 16) {
            empty.style.display = "block";
        };
        console.log({orders})
    });
    return deleteOrder;

};
