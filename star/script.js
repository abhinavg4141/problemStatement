let btn = document.querySelector(".btn");
let input = document.querySelector(".array");

btn.addEventListener("click",function(){
    if(input.value){
        let arr = input.value.split(",");
        let starPattern = printStar(arr);
        console.log(starPattern);
        var ans = document.createElement("h1");
        ans.classList.add("ans");
        ans.innerText = starPattern;
        document.body.appendChild(ans);
        alert(starPattern);
    }
})

function printStar(arr){
    let max = -100000;
    let min = 100000;
    for(let i=0;i<arr.length;i++) arr[i] = parseInt(arr[i]);

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) max = arr[i];
        if(arr[i]<min) min = arr[i];
    }
    let newArr = [];
    if(min>=0) min =0;


    for(let i=min;i<=max;i++) newArr[i + (-min)] = 0;
    for(let i=0;i<arr.length;i++) newArr[arr[i]+(-min)] = arr[i];
    
    console.log(newArr);

    newArr.sort(function(a, b){return a-b});
    let str=""
    let loop1 = max;
    for(let i=0;i<loop1;i++){
      for(let j=0;j<newArr.length;j++){  
          if(newArr[j]>=max) str+="* ";
          else if(newArr[j]<0)str+="   ";
          else str+="  ";
      }
      max--;
      str+="\n";
    }

    for(let i=min;i<=loop1;i++){
        if(i>=0) str+=i+" ";
        else str+=i+""
    }

    str+="\n";

    let loop2 = -min;
      for(let i=0;i<loop2;i++){
      for(let j=0;j<newArr.length;j++){
          if(newArr[j]>=min && newArr[j]<0){
              str+="*  ";
              newArr[j]++;
          }
          else str+="  "
      }
          min--;
          str+="\n"
      }
      console.log(str);
     return str
  }