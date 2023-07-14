let inputValue1 = document.querySelector("#inputValue1");
let inputValue2 = document.querySelector("#inputValue2");
let type1 = document.querySelector("#type-1");
let type2 = document.querySelector("#type-2");
inputValue1.addEventListener('input',function(){
    convertTe()
})
inputValue2.addEventListener('input',function(){
    convertTe()
})

function convertTe(){
    let input1 = document.querySelector("#inputValue1");
    let result = document.querySelector("#inputValue2");
    if(type1.value== "Celsius")
    {   
        if(type2.value=="Celsius"){
        result.value = input1.value
        }
        else if(type2.value== "Kelvin"){
           let val = parseFloat(input1.value) + 273.15;
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Fahrenheit"){
            let val = input1.value*(9/5)+32;
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Rankine"){
            let val = input1.value*1.8+32+459.67;
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Reaumure"){
            let val = input1.value*0.8;
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        
    }
    if(type1.value== "Fahrenheit"){
        if(type2.value=="Celsius"){
            let val = ((parseFloat(input1.value)-32)*5)/9;
            result.value= Number.isInteger(val)?val:val.toFixed(2);
            
        }
        else if(type2.value=="Fahrenheit"){
            result.value = input1.value
        }
        else if(type2.value== "Kelvin"){
            let val = (parseFloat(input1.value)+459.67)/1.8
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Rankine"){
            let val = parseFloat(input1.value)+459.67
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Reaumure"){
            let val = (parseFloat(input1.value)-32)/2.25
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
    }
    if(type1.value== "Kelvin"){
        if(type2.value=="Celsius"){
            let val = parseFloat(input1.value)-273.15;
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Fahrenheit"){
            let val = (input1.value*1.8)-459.67
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value== "Kelvin"){
            result.value = input1.value
            
        }
        else if(type2.value=="Rankine"){
            
            let val = input1.value*1.8
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Reaumure"){
            let val = (parseFloat(input1.value)-273.15)*0.8
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
    }
    if(type1.value=="Rankine"){
        if(type2.value=="Celsius"){
            let val = (parseFloat(input1.value)-32-459.67)/1.8
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Fahrenheit"){
            let val = parseFloat(input1.value)-459.67
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value== "Kelvin"){
            let val = input1.value/1.8
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Rankine"){
            result.value = input1.value
            
        }
        else if(type2.value=="Reaumure"){
            let val = (parseFloat(input1.value)-32-459.67)/2.25
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
    }
    if(type1.value=="Reaumure"){
        if(type2.value=="Celsius"){
            let val = input1.value*1.25
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Fahrenheit"){
            let val= (input1.value*2.25)+32
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value== "Kelvin"){
            let val = (input1.value*1.25)+273.15
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Rankine"){
            let val = (input1.value*2.25)+32+459.67
            result.value= Number.isInteger(val)?val:val.toFixed(2);
        }
        else if(type2.value=="Reaumure"){
            result.value =input1.value
            
        }
    }
    
}
function clearData(){
    inputValue1.value="";
    inputValue2.value="";
    type1.value="Celsius"
    type2.value="Fahrenheit"
}
