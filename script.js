
$ (function () {
   
    var container = $('#container');
    var bird = $('#bird');
    var pole = $(".pole");
    var new_pole = $(".new_pole");
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var pole_3 = $('#pole_3');
   // var pole_4 = $('#pole_4');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_btn = $('#restart_btn');
    //var bird_hight = $('#bird');

    var collisionAllowed = true;

    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());

    var pole_1_initial_position = parseInt(pole_1.css('right'));
    var pole_1_initial_height = parseInt(pole_1.css('height'));

    var pole_2_initial_position = parseInt(pole_2.css('right'));
    var pole_2_initial_height = parseInt(pole_2.css('height'));

    var pole_3_initial_position = parseInt(pole_3.css('right'));
    var pole_3_initial_height = parseInt(pole_3.css('height'));
    

    // var pole_4_initial_position = parseInt(pole_4.css('right'));
    // var pole_4_initial_height = parseInt(pole_4.css('height'));

    var pole_initial_position = parseInt(pole.css('right'))
    var new_pole_initial_position = parseInt(new_pole.css('right'))




    // var new_pole_initial_position = parseInt(new_pole.css('right'));
    // var new_pole_initial_height = parseInt(new_pole.css('height'));
    // var bird_height = parseInt(bird.css('height'));
    // var bird_left = parseInt(bird.css('left'));
   
    var speed = 10;

    var go_up = false;

    var score_update = false;
    var scoreTotal = 0;
    var hitPosition; 
    var flappy_bird = setInterval (function () {

    if (collision (bird, pole_1) || collision (bird, pole_2) || parseInt(bird.css("top")) <= 0 || parseInt (bird.css("top")) > container_height){
        end_the_game()
    } 

    if (collision (bird, pole_3) && collisionAllowed) {
        scoreTotal+= 1;
        score.text(scoreTotal)
        collisionAllowed = false 
    }

    var pole_1_current_position = parseInt(pole_1.css('right'));
    var pole_2_current_position = parseInt(pole_2.css('right'));          
    var pole_3_current_position = parseInt(pole_3.css('right'));

    pole_1.css('right', pole_1_current_position + speed);
    pole_2.css('right', pole_2_current_position + speed);
    pole_3.css('right', pole_3_current_position + speed);

    if (pole_1_current_position > container_width) {
        pole_1.css('right', pole_1_initial_position + speed);
    }

    if (pole_2_current_position > container_width) {
        pole_2.css('right', pole_2_initial_position + speed);
    }

    if (pole_3_current_position > container_width) {
        pole_3.css('right', pole_3_initial_position + speed);
        collisionAllowed = true
    }

        if (go_up == false){
            go_down()
        }

    }, 40);

    $(document).on ('keydown', function (e) {
            var key = e.keyCode;
            if(key == 32 && go_up === false) {
                go_up = setInterval(up ,50);
            }

        });

        $(document).on ('keyup', function (e) {
                var key = e.keyCode;
                if(key === 32) {
                    clearInterval (go_up);
                    go_up = false;
                }
            });

    function go_down() {
        bird.css("top", parseInt(bird.css("top")) +5);
        }

    function up() {
            bird.css("top", parseInt(bird.css("top")) -10);
                }

    function end_the_game() {
            clearInterval (flappy_bird);
            restart_btn.show();
            }



    function collision ($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1+ h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
                        
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
         return true;
        }
     });



        





    //     if (pole_current_position  > container_width) {

    //  pole_current_position = pole_initial_position }

            
            

            // var new_height = parseInt(Math.random() * 100);

            // pole_1.css("height", pole_initial_height + new_height);
            // pole_2.css("height", pole_initial_height - new_height);
            
            // pole_3.css("height", pole_initial_height + new_height);
            // pole_2.css("height", pole_initial_height - new_height);
            // pole_3.css("height", parseInt(pole_initial_height - new_height * 0.5));
            
        //     speed = speed + 1;
        //     speed_span.text(speed);

        //     pole_current_position = pole_initial_position;
        //     pole_new_current_position = pole_new_initial_position;
        // }


        // if (pole_new_current_position > container_width) {
        //     pole_new_current_position = pole_new_initial_position
        //     var new_heightt = parseInt(Math.random() * 100);
            
        //     pole_3.css("height", pole_initial_heightt + new_heightt);
        //     pole_4.css("height", pole_initial_heightt - new_heightt);
        //     // pole_3.css("height", parseInt(pole_initial_height - new_height * 0.5));
        //    // speed = speed + 1;
        //     speed_span.text(speed);

        //     pole_new_current_position = pole_initial_position;
        // }


    //     pole.css('right', pole_current_position + speed);

    //     pole_new.css('right',pole_new_current_position + speed);

    //     if ( go_up == false) {
    //         go_down();
    //     }

    // }


    // },  30);

    // $(document).on ('keydown', function (e) {
    //     var key = e.keyCode;
    //     if(key == 32 && go_up === false) {
    //         go_up = setInterval(up ,50);
    //     }
    // });
     

    // $(document).on ('keyup', function (e) {
    //     var key = e.keyCode;
    //     if(key === 32) {
    //         clearInterval (go_up);
    //         go_up = false;
    //     }

    // });
        
    //     function go_down(){
    //         bird.css("top", parseInt(bird.css("top")) +5);
    //     }

    //     function up() {
    //         bird.css("top", parseInt(bird.css("top")) -10);
    //     }

    //     function end_the_game() {
    //         clearInterval (flappy_bird);
    //         restart_btn.show();
    //     }

    //     restart_btn.click(function () {
    //         location.reload();
    //     }

    // );


//         function collision ($div1, $div2) {
//             var x1 = $div1.offset().left;
//             var y1 = $div1.offset().top;
//             var h1 = $div1.outerHeight(true);
//             var w1 = $div1.outerWidth(true);
//             var b1 = y1+ h1;
//             var r1 = x1 + w1;
//             var x2 = $div2.offset().left;
//             var y2 = $div2.offset().top;
//             var h2 = $div2.outerHeight(true);
//             var w2 = $div2.outerWidth(true);
//             var b2 = y2 + h2;
//             var r2 = x2 + w2;

//             if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//             return true;
//         }


// });