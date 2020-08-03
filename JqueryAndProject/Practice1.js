$("div").css("background","#783823");

$("div.third").css("border","solid4px orange")

$("div:first-of-type").css("color","pink")

$("div").first().click(function () { 
    alert("YOu have clicked the div")
    
});

$("input").keypress(function (e) { 
    if(e.which=="13"){
        alert("YOU PRESS ENTER!!!")
    }
});
$("input").css("width", "70%");
$("button").first().on("mouseenter", function () {
    $(this).css("font-weight","bold")
});

$("button").first().on("mouseleave", function () {
    $(this).css("font-weight", "normal")
});

$("div").css("width", "400px");
$("div").css("height", "400px");
$("div").css("float","left");
$("button").click(function () { 
  $("div").slideUp();
    
});