let num= 1221;
let numberpal = num;
let reverse = 0;
while(numberpal > 0){
    reverse = reverse *10 + numberpal%10;
    numberpal = Math.floor(numberpal/10);
}
if(num === reverse ){
    console.log("Palindrome"); 
}else{
    console.log("Not a Palindrome");
}