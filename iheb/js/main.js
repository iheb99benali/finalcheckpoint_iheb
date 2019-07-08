




function bold(){
    var Boldbtn=document.getElementById('bd');
     if(Boldbtn.style.fontWeight==""){
        Boldbtn.style.fontWeight="bold";
    }
    else{
        Boldbtn.style.fontWeight="";
    }
    }
function italic(){
    var Boldbtn=document.getElementById('bd');
    if(Boldbtn.style.fontStyle==""){
       Boldbtn.style.fontStyle="italic";
    }
    else{
        Boldbtn.style.fontStyle="";
    }   
    }
        
function underline(){
    var Boldbtn=document.getElementById('bd');
    if(Boldbtn.style.textDecoration==""){
    Boldbtn.style.textDecoration="underline";
    }
    else{
        Boldbtn.style.textDecoration="";
    }       
    }
            
function fontsize(size){
    var Boldbtn=document.getElementById('bd');
    if(size=="px10"){
       Boldbtn.style.fontSize="10px";
    }
    else if(size=='px15'){
        Boldbtn.style.fontSize="15px";
    }
    else if(size=='px20'){
        Boldbtn.style.fontSize="20px";
    }
    else if(size=='px25'){
        Boldbtn.style.fontSize="25px";
    }
    else if(size=='px30'){
        Boldbtn.style.fontSize="30px";
    }
    else{
        Boldbtn.style.fontSize="35px";
    }
    }
    
function fontfamily(family){
        var Boldbtn=document.getElementById('bd');
    if(family=='f1'){
        Boldbtn.style.fontFamily='Arial';
    }
    
    else if(family=='f2'){
        Boldbtn.style.fontFamily='cursive';
    }
    
    else if(family=='f3'){
        Boldbtn.style.fontFamily='fantasy';
    }
    
    else if(family=='f4'){
        Boldbtn.style.fontFamily='monospace';
    }
    else if(family=='f5'){
        Boldbtn.style.fontFamily='Lucida Sans Unicode';
    }
    
    else {
        Boldbtn.style.fontFamily='arial';
    }
    
    }

$("html").ready(function(){


$(".CPIC1").hover(function(){
 
    $("#btn1").show()},
    function(){
    $("#btn1").hide();  
    
})

$(".CPIC2").hover(function(){
    $("#btn2").show()},
    function(){
    $("#btn2").hide();  

})

$(".CPIC3").hover(function(){
    $("#btn3").show()},
    function(){
    $("#btn3").hide();  

})

$(".CPIC4").hover(function(){
    $("#btn4").show()},
    function(){
    $("#btn4").hide();  
})






});