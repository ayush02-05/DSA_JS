// 1.bubble sort 
let a = [4,6,1,9,2];
let n = a.length;
console.log(a);

for(let i=0 ; i< n-1 ; i++)
{
    for(let j=0 ; j<n-i-1 ; j++)
    {
        if(a[j] > a[j+1])
        {
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp ; 
        }
    }
}
console.log(a);


// 2.selection sort
let a1 = [5,1,8,19,2];
let n1 = a1.length;
console.log(a1);

for(let i=0 ; i< n1-1 ; i++)
{
    let small = i;
    for(let j=i+1 ; j< n1 ; j++)
    {
        if(a1[j] < a1[small])
        {
            small = j ;
        }
    }

    if(i!= small)
    {
        let temp1 = a1[i];
        a1[i] = a1[small];
        a1[small] = temp1;
    }
}
console.log(a1);

// 3.insertion sort 
let a2 = [2,3,55,4,97,31,112];
for(let i=1 ;i<a2.length ;i++)
{
    let key = a2[i] ; 
    let j = i-1;
    while(j>=0 && a2[j]>key)
    {
       a2[j+1] = a2[j];
       j-- ;
    }
    a2[j+1] =key ;
}

console.log(a2);
