// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//my solution

function getSum( a,b )
{
  //look for the one that is greater between them
  let arr=[]
    if (a>b){
      for(let i=b;i<=a;i++){
        //pushing to the array
        arr.push(i)
      }
  }else{
       for(let i=a;i<=b;i++){
        //pushing to the array
        arr.push(i)
      }
  }
 return  arr.reduce((c,acc)=>acc+c,0)}