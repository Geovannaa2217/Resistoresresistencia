
	function FazerCalculo(){
    let value01 = parseFloat (document.getElementById("faixa01").value);
    let value02 = parseFloat (document.getElementById("faixa02").value);
    let value03 = parseFloat(document.getElementById("multi").value);
    let value04 =parseFloat( document.getElementById("toler").value);

    let result = ((val01*10) + val02) *val03;
    let tol1 = result - val04
let tol2 = result + val04;
let tol3 = val04

document.getElementById("resultado").value = result+"Ω";
document.getElementById("toleran").value = tol1+"Ω até "+tol2+"Ω";
document.getElementById("toln").value = tol3+"Ω";
}              
        

