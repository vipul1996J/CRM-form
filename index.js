function run() {
    let add = document.getElementById("show");
    add.style.display = "none";
    let frm = document.getElementById("hide");
    frm.style.display = "block";
}

function bck() {
    let frm1 = document.getElementById("hide");
    frm1.style.display = "none";
    let add1 = document.getElementById("show");
    add1.style.display = "block";
}



function sv() {
    let data_1 = document.getElementById("first").value ;
    let data_2 = document.getElementById("second").value ;
    let data_3 = document.getElementById("third").value ;
    let t_input = document.getElementById("tableinput");
    let newRow = t_input.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.textContent = data_1;
    cell2.textContent = data_2;
    cell3.textContent = data_3;

    let frm1 = document.getElementById("hide");
    frm1.style.display = "none";
    let add1 = document.getElementById("show");
    add1.style.display = "block";

}