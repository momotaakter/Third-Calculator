const printArea=document.getElementById('outputarea');
const buttons=document.querySelectorAll('button');
const equalarea=document.getElementById('equalbtn');

let string='';
const TransTOarray=Array.from(buttons);
TransTOarray.forEach((x)=>{
   x.addEventListener('click',(y)=>{
    
    if(y.target.innerHTML=='AC'){
        string='';
        printArea.value=string;
    }
   else if(y.target.innerHTML=='DEL'){
 

 string=string.substring(0,string.length-1);
            outputarea.value=string;
    


   }
else if(y.target.innerHTML=='='){
      string=eval(string);
      printArea.value=string;

}

    else{
   string+=y.target.innerHTML;
        printArea.value=string
    }
    
   })
})