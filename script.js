const button = document.querySelectorAll(".btn");
const counter2 = document.getElementById('middle');
const counter1 = document.getElementById('top');
const sideBar = document.getElementById('side');
const text = document.querySelectorAll('text');

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

        

        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const customMessage = "You have completed the task at";

        const text1 = text.innerText;
        
        const timeElement = document.createElement('p');
        timeElement.innerText = `${customMessage} ${text1} ${timeString}`;
        timeElement.classList.add('time-tag');
        sideBar.appendChild(timeElement);

        

    })
    
}
alert()








