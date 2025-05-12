let display = document.querySelector("#display");
let buttons = document.querySelector('button');

let currentnum =''

function displaydata(){
     display.value = currentnum || 0;


}

function appenddata(data){
      currentnum =  currentnum + data;
      displaydata()
}

displaydata()
function calculate(){
       let result = evel(currentnum)
       currentnum = result.tostring()
       displaydata();
}

function cleardata(){
       currentnum = "";
        displaydata();
}

buttons.foreach((button) => {
       buttons.addEventListener('click' , () => {
              let value = (button.textcontent);
              if(value == "c"){
                     cleardata();
             }
             else if(value == "="){
              calculate()
             }
             else{
              appenddata(value)
             }
       })
})