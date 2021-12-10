$("#winston").draggable();
        $("#dropzone").droppable({
            drop: function(event, ui) {
              $(this).css('background-image', 'url("./free_img/character_light.png")');
            },
            out: function(event, ui) {
                $(this).css('background-image', 'url("./free_img/character3.png")');
            }
        });


        $("#winston2").draggable();

        $("#winston3").draggable();
        $("#winston4").draggable();
        $("#winston5").draggable();


        $("#drop").droppable({
          drop: function(event, ui) {
            $(this).css('background-image', ' 0%');
          },
          out: function(event, ui) {
              $(this).css('background-image', 'url("")');
          }
      });


