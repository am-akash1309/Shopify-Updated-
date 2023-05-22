function functionname(){
    var a = document.getElementsByTagName("input")
    selecteditems =[]
    for (let i = 0; i < a.length; i++) {
        if(a[i].checked){
            selecteditems.push(a[i].value)
        }
    }
}

function viewcart(){
    if(selecteditems.length == 0){
        document.getElementById("write").innerHTML="Your Cart is empty."
    }
    else{
        var x =[];
        var items=""
        for (let i = 0; i < selecteditems.length; i++) {
            x = selecteditems[i];
            var a = "<li>"+x+"</li>"
            items = items + a
        }
        document.getElementById("write").innerHTML= items
    }
}
let data = [{
    "name": "asiq",
    "age" : "dfsdf"
},{
    "name": "akash",
    "age" : "dfsdf"
},{
    "name": "fsdfg",
    "age" : "dfsdf"
}]
console.log(data.age)