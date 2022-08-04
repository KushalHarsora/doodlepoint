function fun(){
    var fun = document.getElementById('click');
    if (fun.checked == true)
    {
        const ha = document.getElementById('list');
        ha.style.position = 'absolute';
        ha.style.left = '0%';
        console.log("Left");
    }
    else
    {
        const ha = document.getElementById('list');
        ha.style.position = 'absolute';
        ha.style.left = '-100%';
        console.log("Right");
    }
}