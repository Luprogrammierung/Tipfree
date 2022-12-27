function removeItems(){
const frontodds = document.querySelectorAll('.ml__odd');
for(var i = 0; i<frontodds.length;i++){
    frontodds[i].style.display ='none';
}
}

var Iframe = document.getElementById('odsp_wdg_iframeoddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false');


Iframe.onload = function(){
    alert("test");
    setTimeout(400);
    removeItems();
}