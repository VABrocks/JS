function startTest(){
    value_char=document.getElementById("character").value
    switch(value_char){
        case "Professor":
            task="File a RTI";
            break;
        case "Vivek":
            task="Plan a heist";
            break;
            
        default:
            task="Enter proper input"
    }
    document.getElementById("Task").innerHTML=("Task " + Task)
    document.getElementById("message").innerHTML=("Message " + Message)
    document.getElementById("Task").classList.add(functon)
}