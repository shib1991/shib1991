function showVerticalMessage(str){
    let n=Number(str.length);
    if (str[0]=='м')console.log(str[0].toUpperCase());
    
    for (let i=1; i<n; i++){
        console.log(str[i]);
        if(i==10) break;
    }
    }
    

    showVerticalMessage("марафон");