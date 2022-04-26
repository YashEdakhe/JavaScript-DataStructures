let A = [1,2,2,1];
let B = [2,3,1,2];
let hashMap = new Map();
let V = [];
let i;
for(i = 0; i < A.length; i++){
    hashMap[A[i]]  = hashMap[A[i]] ? hashMap[A[i]] + 1 : 1 
}

for (i = 0; i < B.length;i++){
    if(hashMap[B[i]]!=null && hashMap[B[i]]!=0 ){
        V.push(B[i]);
        hashMap[B[i]] -= 1;
    }
}
console.log(V) ;
