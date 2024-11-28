//Assignment
    // let a= prompt("Enter your name");
    // console.log("Hi",a);

    let b=parseInt(prompt("Enter the first number:"));
    let c=parseInt(prompt("Enter the second number:"));
    //console.log(b+c); 
    //condition

    if(b>c){
        console.log(b +"is greater"+c);
    }
    else{
         console.log(c+"is greater"+b);
    }
    //object
    let obj={
        name:"John",
        age:20,
        city:"kolkata",
    };
    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.city);
    //array
    let arr= [1,2,3,4,5,6,7,8,9,10];
    console.log(arr.length);

    let studentList= [
        {
        name:"Rahul",
        age:20,
     },
     {
        name:"Rohan",
        age:21,
        },
    {
            name:"Raj",
            age:23,
     },
    ]