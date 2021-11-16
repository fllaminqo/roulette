$(document).ready(function () {
    for (i = 0; i < 3; i++) {
        $(".list li").clone().appendTo(".list");
    }
    $('.button').click(function () {
        $('.window').css({
            right: "0"
        })
        $('.list li').css({
            border: '4px solid transparent'
        })
        function selfRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var x = selfRandom(20, 70);
        var coins = document.getElementById("unos_coinsa").value;

        var dva = document.getElementById("2puta").checked;
        var cetri = document.getElementById("4puta").checked;
        var deset = document.getElementById("10puta").checked;

        var selektovano  = 0;
        if(dva == true)
            selektovano = 1;
        else if(cetri == true)
            selektovano = 2;
        else if(deset == true)
            selektovano = 3;

        const ul = document.querySelectorAll("ul li");
        var result = ul[x+2].childNodes;
        console.log(result[0].alt);

        var iznos = document.getElementById("preostalo");
        var postoji = parseInt(iznos.value);
        var novo = parseInt(postoji - coins);
        //console.log(novo);
        iznos.innerHTML = novo;

        if(selektovano == 1 && result[0].alt == "1"){
            var dodatak = coins * 2;
            var postoji = iznos.value;
            iznos.innerHTML = dodatak + postoji;
        }
        else if(selektovano == 2 && result[0].alt == "2"){
            var dodatak = coins * 4;
            var postoji = iznos.value;
            iznos.innerHTML = dodatak + postoji;
        }
        else if(selektovano == 3 && result[0].alt == "3"){
            var dodatak = coins * 10;
            var postoji = iznos.value;
            iznos.innerHTML = dodatak + postoji;
        }

        $('.window').animate({
            right: ((x*130)+(x*8-12)-119)
        }, 5000);
    });
});