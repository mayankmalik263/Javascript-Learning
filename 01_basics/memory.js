// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (memory) (Primitive mein stack is used) -> if anything is stored in stack it gives the copy of the value
// Heap(memory) (Non-Primitive mein heap memory is used) -> if there's heap then it will give the reference value means ki the original value

let myYoutubename = "Milax-Malik"

let anothername = myYoutubename
anothername = "Mayank-Malik"

console.log(myYoutubename); 

//Ab isme myYoutubename ki real value hi print hogi because jab hamne usse anothername mein store karaya toh uski ek copy bani stack mein or vo store hui thi anothername mein

console.log(anothername);

let userOne = {
    email : "mayank@google.com",
    upi : "123@ybl"
}

let userTwo = userOne

userTwo.email = "milax@google.com" // u can access the variables in an object by '.' and then the name of the variable

console.log(userOne.email);
console.log(userTwo.email);
// HEAP mein original value pe hi changes honge instead of making a copy of the value of the variable phele

// stack mein copy store hogi dusre variable ki jiski value assign hui h 
// where as heap mein directly reference hi change hojayegi jo uss variable ki real value hoti h
