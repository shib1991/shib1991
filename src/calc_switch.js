let calculator = {
    sum: "sum",
    div: "div",
    multi: "multi",
    exp: "exp"
}

function calc(act,b,c){
    if (typeof act =="string"&& typeof b=="number"&&typeof c=="number" ){
        switch(act){
            case calculator.sum:
                console.log(b + c);
                break;
            case calculator.div:
                if (c == 0) {
                    console.log('На ноль делить нельзя');
                } else {
                    console.log(b / c);
                } 
                break;
            case calculator.multi:
                console.log(b * c);
                break;
            case calculator.exp:
                if (c < 1) {
                    console.log("Степень < 1");
                } else {
                    console.log(b ** c);
                }
                break;
        }

    }else console.log('Не верные значания');
}

calc("sum", 231, 12312);