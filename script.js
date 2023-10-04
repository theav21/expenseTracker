

let table = document.getElementById("table")


function myFunction(){
    let money = document.getElementById("total").value;
    let expense = document.getElementById("expense").value;
    let amount = document.getElementById('amount').value;
    console.log(expense);
    console.log(amount);
    money = money - amount;
    document.getElementById("total").value=money;
    
    let template = `
        <tr>
        <td>${expense}</td>
        <td>${amount}</td>
        <td>${money}</td>
        </tr>
    
            `;

    table.innerHTML += template;
   
}
