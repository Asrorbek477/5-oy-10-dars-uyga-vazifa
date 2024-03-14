// keydown,keyup,keypress

document.addEventListener('keydown',(e)=>{

    if(e.key=='m' && e.ctrlKey){
        console.log('Gool !!!');
    }
    // console.log('Code',e.code);
    // console.log('Key',e.key);
    // console.log('keyCode',e.keyCode);
});
