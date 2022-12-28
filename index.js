function removeItems(){
    console.log("test");
    const frontodds = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false').
    contentWindow.document.querySelectorAll('.bg-main-200');
console.log(frontodds.length);
for(var i = 0; i<frontodds.length;i++){
    
    frontodds[i].style.display ='none';
}
}
function main(){
    removeItems();

}

function init(){
    var Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');
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

