// quation  1
console.log("Father");
function max(x, y){
    if(x > y){
        return(x);
    }else{
         return(y);
    }
}
console.log(max(4, 7));

// quation  2
function largest(a,b,c){
    if (a>b && a>c) 
        return a;
    else if (b>a && b>c)
        return b;
    else
    return c;
    }
    console.log(largest(1,4,9));

    // quation  3
     function isVowel(ch){
        if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'){
        return true;
        }
        else
        return false;
    }
    console.log(isVowel('u'));

    // quation 4

    // function sum(arr=[]){
    // return arr.reduce((a,b)=>a+b,0);
    // }
    // console.log(sum([1,2,3,4]));

    //sum
    function sum(array){
        let result=0;
        for(let i=0; i<array.length; i++){
    result+=array[i];
        }
        return result;
    }
    console.log(sum([1,2,3,4]));

    //multiply
    function mul(array){
        let prod=1;
        for(let i=0; i<array.length; i++){
    prod*=array[i];
        }
        return prod;
    }
    console.log(mul([1,2,3,4]));
    
    // quation 5
    function reverse(arr){
        let s='';
    for(let i=arr.length-1; i>=0; i--)
    s+=arr[i];
    return s;
    }
    console.log(reverse("haben"));

    // quation 6
    function findLongestWord(arr=[]){
        let max=arr[0].length;
        let count=0;
    for(let i=1; i<arr.length; i++){
            if(arr[i].length>max){
                count=i;
                max=arr[i].length;
            }
    }
    return max; 
        }

    console.log(findLongestWord(["i","am","the ","person"]));

    // quation 7
    function filterLongWords(arr, n){
        let newArr = [];
        arr.forEach(value => {
    
        if(value.length > n){
        newArr.push(value);
        }
        });
        return newArr;
    }

    console.log(filterLongWords(["i","am","the","haben","person"],3));

    // quation 8
    const a = [1,3,5,3,3]; 
    const b = a.map(function(elem, i, array) {
      return elem + 3;
    })
    document.writeln(b.toString() + "<br/>");
    const c = a.filter(function(elem, i, array){
      return elem !== 3;});
    document.writeln(c.toString() + "<br/>");
    const d = a.reduce(function(prevValue, elem, i, array){
      return prevValue + elem;
    });
    document.writeln(d+ "<br/>");
    
    const d2 = a.find(function(elem) {return elem > 1;}); //3
    const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
    document.writeln(d2+ "<br/>");
    document.writeln(d3);
    
    
    
    //anonymos
    (function(){
        console.log("this is anonymos function")
    })
    
    
     //shortest,
    function shortest(arr=[]){
            let min=arr[0];
            let count=0;
        for(let i=1; i<arr.length; i++){
                if(arr[i].length<min.length){
                    count=i;
                    min=arr[i];
                }
        } 
        return min; 
            }
        console.log(shortest(["hello","z","bye"]));


    