const button = document.querySelectorAll(".btn");
const counter2 = document.getElementById('middle');
const counter1 = document.getElementById('top');
for( let i=0;i<button.length;i++){
    const comBtn = button[i];
    comBtn.addEventListener("click",function(event){
        alert("Board Updated Successfully");

        let value = parseInt(counter2.innerText);
        value--;
        counter2.innerText=value;

        let value1 = parseInt(counter1.innerText);
        value1++;
        counter1.innerText=value1;

        event.target.classList.add('clicked');

        event.target.disabled = true;




    })
}



// help



// const buttons = document.querySelectorAll(".btn");
// const counter1 = document.getElementById('top');

// for (let i = 0; i < buttons.length; i++) {
//     const comBtn = buttons[i];
//     comBtn.addEventListener("click", function () {
//         alert("Board Updated Successfully");
//         let value = parseInt(counter1.innerText);
//         value++;
//         counter1.innerText = value;
//     });
// }






