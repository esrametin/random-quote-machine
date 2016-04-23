/**
 * Created by esra on 14.04.2016.
 */
$(document).ready(function() {

    var colors = ["#99ac7c", "#d71d97","#207bd8", "#581910", "#b09610", "#de021b",
        "#705f38", "#8d2c80", "#5aacd7", "#2f8101", "#28bc93"];

    getQuote();
    generateBackground();

    $("button").on("click", function(){
        getQuote();
        generateBackground();
    });


    function getQuote() {

        var quote = "";
        var author = "";

        $.ajax({
            dataType: 'json',
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies" ,
            headers: { 'X-Mashape-Key' : '65iLuwVJCamshuvsliqLlue3UrRjp1D2Lw9jsngnGRtEeQNgDm'},
            accept: "application/json",
            contentType: "application/x-www-form-urlencoded",
            success: function(data){
                for (var key in data){
                    //alert( key + " " + data[key]);

                    $("#quote").html(data["quote"]);
                    $("#author").html(data["author"]);
                }
            }
        });
    }

    function generateBackground(){

        var random = Math.floor(Math.random() * colors.length + 1);

        $("html body").animate({backgroundColor: colors[random]}, 1000);

        //document.body.style.background = colors[random];
    }

    $(".popup").click(function (event){

        var width = 500;
            height = 400;
            left = ($(window).width() - width) / 2;
            top = ($(window).height() - height) /2;
            url = this.href + "?text=" + $("#quote").text() + "~ by " + $("#author").text();
            opts = 'status=1' +
                    ",width =" + width +
                    ",height =" + height +
                    ',top =' + top +
                    ",left = " + left;

        window.open(url,"twitter",opts);
        return false;
    });
});