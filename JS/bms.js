$(function(){
    $('#locationHolder').click(function(){showCities();});
    $('#searchInput').click(function(){$('#find').focus();});
    $('#Mumbai').click(function(){updateCity(this.id);});
    $('#Delhi-NCR').click(function(){updateCity(this.id);});
    $('#Banglore').click(function(){updateCity(this.id);});
    $('#Hyderabad').click(function(){updateCity(this.id);});
    $('#Ahmedabad').click(function(){updateCity(this.id);});
    $('#Chandigarh').click(function(){updateCity(this.id);});
    $('#Chennai').click(function(){updateCity(this.id);});
    $('#Pune').click(function(){updateCity(this.id);});
    $('#Kolkata').click(function(){updateCity(this.id);});
    $('#Kochi').click(function(){updateCity(this.id);});
    $('#searchBar').click(function(){child();});
    $('#locationPage').click(function(){parent();});
});
var cities = ['Mumbai','Delhi-NCR','Banglore','Hyderabad','Ahmedabad','Chandigarh','Chennai','Pune','Kolkata','Kochi']
var i=1;
var inside = false;
var outside = false;
function child(){
    inside=true;
}
function parent(){
    if(!inside){
        goHome();
    }
    inside=false;
}
function updateCity(id){
    $('#location').text(id);
    let url = $('#'+id+"img").attr('src');
    url = url.slice(0,-4);
    for(let i=0;i<cities.length;i++){
        let url = $('#'+cities[i]+"img").attr('src');
        url = url.slice(0,-4);
        if(cities[i]==id){
            if(url.slice(-9,-1)!="-selecte"){
                url = url+"-selected.png";
                $('#'+id+"img").attr('src',url);
            }
        }
        else{
            if(url.slice(-9,-1)=="-selecte"){
                url = url.slice(0,-9)+".png"
                $('#'+cities[i]+"img").attr('src',url);
            }
        }
    }
    goHome();
}
function goHome(){ 
    $('#searchCity').animate({top:"0px"});
    $('#locationPage').fadeOut();
}
function showCities(){
    $('#searchCity').animate({top:"60px"});
    $('#locationPage').css({"z-index":i , "visibility":"visible","display":"flex"});
    $('#locationPage').fadeIn();
    $('#mainPage').css({"z-index":"-1"});
    i=i+1;
}