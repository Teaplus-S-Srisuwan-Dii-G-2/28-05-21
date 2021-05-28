document.getElementById('ok').addEventListener('click',function(e)
{
    alert("Hello")
})

document.getElementById('cancel').addEventListener('mousemove', function(e)
{
    var x = e.clientX;
    var y = e.clientY;
    var coor = "("+x+","+y+")";
    console.log(coor)
    
})


