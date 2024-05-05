let x1 =  function(event){
    console.log("this event type is :",event.type)
    console.log(event.clientX,event.clientY)
    // alert("this is first alert")
}
let x2 =  function(event){
    alert("this is second alert");
}
id2.addEventListener('click',x1)
id2.addEventListener('click',x2)
   

id2.removeEventListener('click',x2);

