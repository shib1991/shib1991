function calc(act,b,c){
    if (typeof act =="string"&& typeof b=="number"&&typeof c=="number" ){
        switch(act){
            case "sum":
                console.log(b + c);
                break;
            case "div":
                if (c == 0) {
                    console.log('На ноль делить нельзя');
                } else {
                    console.log(b / c);
                } 
                break;
            case "muliti":
                console.log(b * c);
                break;
            case "exp":
                if (c < 1) {
                    console.log("Степень < 1");
                } else {
                    console.log(b ** c);
                }
                break;
        }

    }else console.log('Не верные значания');
}

calc("div", 2, 0);