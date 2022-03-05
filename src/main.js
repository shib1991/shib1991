function calc(a,b,c){
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

calc('del',2,0);

