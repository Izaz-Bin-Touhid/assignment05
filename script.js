const button = document.querySelectorAll(".btn");

for( let i=0;i<button.length;i++){
    const comBtn = button[i];
    comBtn.addEventListener("click",function(event){
        alert("Board Updated Successfully");
    })
}




