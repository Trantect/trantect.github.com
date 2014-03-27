jQuery(window).scroll(function(){
          var nav = $("#main-nav")
          nav.css("background", "rgba(34, 42, 54, 0.9)").css("border-bottom", "1px solid #252525").css("box-shadow","0 2px 2px rgba(0, 0, 0, 0.3)");
          if(nav.offset().top <= 0){
            nav.css("background", "").css("border-bottom", "").css("box-shadow", "");
          }
        });

        var add_boder = function(){
          var url = window.location.href;
          var urlParts = url.split('#');
          var anchor = (urlParts.length > 1) ? urlParts[1] : 'home';
          if (anchor == '' || anchor == undefined) {
            anchor = 'home';
          }
          console.log(anchor);

          $('.navi-item').removeClass('active');

          var id = "navi-item-" + anchor;
          console.log(id);
          console.log($('#'+id));
          $('#'+id).addClass('active');

        }
        add_boder();
        $('.navi-item').click(function(){
          var url = $(this).find('a').attr('href');
          var urlParts = url.split('#');
          var anchor = (urlParts.length > 1) ? urlParts[1] : 'home';
          if (anchor == '' || anchor == undefined) {
            anchor = 'home';
          }
          console.log(anchor);

          $('.navi-item').removeClass('active');

          var id = "navi-item-" + anchor;
          console.log(id);
          console.log($('#'+id));
          $('#'+id).addClass('active');          
        });
