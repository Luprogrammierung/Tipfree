var Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');
function removeItems(){
    //document.getElementById(iframeId).contentWindow.document.getElementById(elementId);

    const frontodds = document.querySelectorAll('.bg-main-200');
    console.log(frontodds.length);
for(var i = 0; i<frontodds.length;i++){
    
    frontodds[i].style.display ='none';
}
}
function main(){
    console.log(Iframe.window);
    Iframe.contentWindow.eval('function foo(){ alert("test"); }');
}

function init(){
    Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');
    if(Iframe == null){
        setTimeout(function(){
            init();
        },500)
    }
    else{
    setTimeout(function () {
        main();
    }, 500)
}
}
init();

