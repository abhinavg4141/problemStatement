let btn = document.querySelector(".btn");
let input = document.querySelector(".array");
let textArea = document.querySelector("#numberline")

btn.addEventListener("click", function () {
    if (input.value) {
        let arr = input.value.split(",");
        let starPattern = printStar(arr);
        textArea.value = starPattern;
    }
})

function printStar(arr) {
    let max = -100000;
    let min = 100000;
    for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    arr.sort(function(a,b){return a-b});
    let newArr = [];
    if (min >= 0) min = 0;


    for (let i = min; i <= max; i++) newArr[i + (-min)] = 0;
    for (let i = 0; i < arr.length; i++) newArr[arr[i] + (-min)] = arr[i];


    console.log(newArr);

    

    let str = ""
    let loop1 = max;
    for (let i = 0; i < loop1; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] >= max) str += " *";
            else str += "  ";
        }
        console.log(str);
        max--;
        
        console.log(max);
        str+="\n";
    }

    for (let i = min; i <= loop1; i++) {
        if(i >= 0) str+=" "+i;
        else str+=i+"";
    }

    str += "\n";
    let loop2 = -min;
    console.log(newArr);
    for (let i = 0; i < loop2; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] >= min && newArr[j] < 0) {
                
                console.log("inside if");
                str += " *";
                newArr[j]++;
            }
            else{
                console.log("inside else");
                str+="  ";
            }
        }
        min--;

        str += "\n";
    }
    console.log(str);
    return str

}


