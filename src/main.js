function calc(a,b,c){
    if (typeof a=="number"||typeof a=="boolean"||typeof a=="boolean"|| typeof b=="string"|| 
    typeof c=="string"||typeof b=="boolean"||typeof c=="boolean") {
        console.log('Не верные значания'); 
        }
        else {
        if (a=="sum"){
            console.log(b+c); 
        }else if(a=="razn"){
            console.log(b-c);
        }else if (a=="del"){
            if (c==0){
            console.log('На ноль делить нельзя');    
            }else {
            console.log(b/c);
            }
        }else if(a=="multi"){
            console.log(b*c);
        }else if(a=="exp"){
            if(c<1){
                console.log("Степень < 1");
            }else {
                console.log(b**c);
            }
        }
        else {
            console.log("unknown operation");
        }
    
    }
}
calc(true,2,3);