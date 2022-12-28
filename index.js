var Iframe = null;
function removeItems(){
    console.log("test");
    Iframe.contentWindow.document.querySelectorAll('.bg-main-200');
    console.log(frontodds.length);
for(var i = 0; i<frontodds.length;i++){
    
    frontodds[i].style.display ='none';
}
}
function main(){
    removeItems();

}

function init(){
    Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');
    if(Iframe == null){
        setTimeout(function(){
            init();
        },500)
    }
    setTimeout(function () {
        main();
    }, 500)
}
init();

