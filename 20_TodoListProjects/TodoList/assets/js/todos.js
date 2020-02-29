// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){    // listen li inside of ul. works for future lis.
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){    // fade out parent li. $(this) : span
        $(this).remove();    // $(this) : li
    });    // remove parent li
    event.stopPropagation();    // stop event bubbling
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){    // checks enter key
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");    // add html code inside ul
    }
})