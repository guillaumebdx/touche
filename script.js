// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
//template sur https://jsfiddle.net/87etox4w/3/


$("#moi").keyup(function(event) {
    var myName = $("#moi").val();

    $("#megaphone").text(promptMessage(myName));
});




function promptMessage(playerName) {
    if (playerName.length > 0) {
        return ">> " + playerName + " va attaquer en ...";
    } else {
        return "> En attente d'un joueur";
    }
}


$('form').keypress(function(e){
    if( e.which === 13 ){

        $("#canon").keyup(function(event) {
            var myCanon = $("#canon").val();
            $("#cible").text(promptCible(myCanon));
        });
        function promptCible(cible) {
            if (cible.length > 0) {
                return cible + " !";
            } else {
                return "Aucune cible définie";
            }
        }

        function colorRed() {
            var myCanon = $("#canon").val();
            $("#" + myCanon).css("background-color", "red");

        }

        function writeHistory() {
            var myCanon = $("#canon").val();
            var myName = $("#moi").val();
            var now = new Date(Date.now());
            var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            if ($("#" + myCanon).text().length === 0){
                var etat = "PLOUF";
            }
            else {
                var etat = "TOUCHE";
            }
            $("#history").append("<p> [" + formatted + "] " + myName + " a lancé une torpille en " + myCanon + ". Résultat : " + etat + "</p>");


           // console.log($("#" + myCanon).text().length);
           // console.log("laaaaaaaaaa" + $("#b3").css("background-color"));
        }
        /*
        function areYouDead() {
            if ($("#b4").css("background-color")==="rgb(255, 0, 0)" && $("#b4").text().length > 0){
                console.log("X ROUGE");
            }
            else {
                console.log("NI X OU NI ROUGE");
            }

        }

*/

        function boat1Down() {
            if ($("#b1").css("background-color") === "rgb(255, 0, 0)"
                && ($("#b2").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b3").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b4").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b5").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b6").css("background-color") === "rgb(255, 0, 0)")) {
                console.log("Bateau coulé");
                $("#history").append("<p>BATEAU 1 COULÉ</p>");


            }
        }

            function boat2Down() {
                if ($("#d9").css("background-color")==="rgb(255, 0, 0)"
                    && ($("#e9").css("background-color")==="rgb(255, 0, 0)")
                    && ($("#f9").css("background-color")==="rgb(255, 0, 0)")
                ){
                    console.log("Bateau coulé");
                    $("#history").append("<p>BATEAU 2 COULÉ</p>");



                }


                }

        function gameOver() {
            if ($("#b1").css("background-color") === "rgb(255, 0, 0)"
                && ($("#b2").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b3").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b4").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b5").css("background-color") === "rgb(255, 0, 0)")
                && ($("#b6").css("background-color") === "rgb(255, 0, 0)")
                && ($("#d9").css("background-color") === "rgb(255, 0, 0)")
                && ($("#e9").css("background-color") === "rgb(255, 0, 0)")
                && ($("#f9").css("background-color") === "rgb(255, 0, 0)")) {
                console.log("Bateau coulé");
                $("#history").append("<p>WIN WIN WIN</p>");


            }
        }


 /*
            for (i = 1; i < 7; ++i){

                if ($("#b4").css("background-color")==="rgb(255, 0, 0)" ){
                    console.log(i + " X ROUGE");
                }
                else {
                    console.log(i + " NI X OU NI ROUGE");
                }
            } */


        colorRed();
        writeHistory();
        boat1Down();
        boat2Down();
        gameOver();






    }

});



