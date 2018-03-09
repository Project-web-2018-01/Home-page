$(function() {
$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
});

var tablica_gier = [
    gra1 = {
        nazwa: "PingPong",
        link: "https://project-web-2018-01.github.io/PingPong/index.html"
        //opis:
        //ranking:
        //obrazek:
    },
    gra2 = {
        nazwa: "PingPong",
        link: "https://project-web-2018-01.github.io/PingPong/index.html"
        //opis:
        //ranking:
        //obrazek:
    },
    gra3 = {
        nazwa: "PingPong",
        link: "https://project-web-2018-01.github.io/PingPong/index.html"
        //opis:
        //ranking:
        //obrazek:
    },
    gra4 = {
        nazwa: "PingPong",
        link: "https://project-web-2018-01.github.io/PingPong/index.html"
        //opis:
        //ranking:
        //obrazek:
    },
    gra5 = {
        nazwa: "PingPong",
        link: "https://project-web-2018-01.github.io/PingPong/index.html"
        //opis:
        //ranking:
        //obrazek:
    },
    gra6 = {
        nazwa: "PingPong",
        link: "mem"
        //opis:
        //ranking:
        //obrazek:
    }
];

$(".games-row > div").map(function(x,i,arr){ 
    $(this).click(function() {
        location.href = tablica_gier[x].link;
    });
});
//console.log(tablica_gier[0]);
});
