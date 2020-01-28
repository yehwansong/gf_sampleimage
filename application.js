$('document').ready(function(){

  // loads templates


  // singleapp------------------------------------------------------------------
    $('#container_1').append('\
        <div id="select_single_frame">\
            <div id="select_single_1" class="select_template select_single">1</div>\
            <div id="select_single_2" class="select_template select_single">2</div>\
            <div id="select_single_3" class="select_template select_single">3</div>\
            <div id="select_single_4" class="select_template select_single">4</div>\
            <div id="select_single_5" class="select_template select_single">5</div>\
            <div id="select_single_6" class="select_template select_single">6</div>\
            <div id="select_single_7" class="select_template select_single">7</div>\
        </div>\
            <div id="template_1" class="template">1</div>\
            <div id="template_2" class="template">2</div>\
            <div id="template_3" class="template">3</div>\
            <div id="template_4" class="template">4</div>\
            <div id="template_5" class="template">4</div>\
            <div id="template_6" class="template">4</div>\
            <div id="template_7" class="template">7</div>')

        $( "#container_1>#template_1" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_1 #sketch" ).load( "templates/reply_singleapp.html .reply")
            $( "#container_1 #template_1" ).addClass('text')
            $( "#container_1 #select_single_1" ).addClass('text')
            $( "#container_1>#template_1 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_1()
        $( "#container_1>#template_2" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_2 #sketch" ).load( "templates/crane_singleapp.html .crane")
            $( "#container_1 #template_2" ).addClass('utility')
            $( "#container_1 #select_single_2" ).addClass('utility')
            $( "#container_1>#template_2 #table_wrapper" ).load( "templates/table.html .table")
        })
        $( "#container_1>#template_3" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_3 #sketch" ).load( "templates/fortnightly_singleapp.html .fortnightly")
            $( "#container_1 #template_3" ).addClass('text display_1')
            $( "#container_1 #select_single_3" ).addClass('text display_1')
            $( "#container_1>#template_3 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_3()
        $( "#container_1>#template_4" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_4 #sketch" ).load( "templates/basil_single_1.html .basil_single_1")
            $( "#container_1 #template_4" ).addClass('display_1 display_2')
            $( "#container_1 #select_single_4" ).addClass('display_1 display_2')
            $( "#container_1>#template_4 #table_wrapper" ).load( "templates/table.html .table")
        })
        $( "#container_1>#template_5" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_5 #sketch" ).load( "templates/owl_singleapp.html .owl")
            $( "#container_1 #template_5" ).addClass('text display_1 display_2')
            $( "#container_1 #select_single_5" ).addClass('text display_1 display_2')
            $( "#container_1>#template_5 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_5()
        $( "#container_1>#template_6" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_6 #sketch" ).load( "templates/shrine_singleapp.html .shrine")
            $( "#container_1 #template_6" ).addClass('utility')
            $( "#container_1 #select_single_6" ).addClass('utility')
            $( "#container_1>#template_6 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_6()
        $( "#container_1>#template_7" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_7 #sketch" ).load( "templates/topics_single_1.html .topics_single_1")
            $( "#container_1 #template_7" ).addClass('display_3 display_6 display_4 display_5')
            $( "#container_1 #select_single_7" ).addClass('display_3 display_6 display_4 display_5')
            $( "#container_1>#template_7 #table_wrapper" ).load( "templates/table.html .table")
        })
        // -=>perfectscrollbar

  // // ----------------------------------------------------------------------------
        $( "#container_2").append('\
            <span id="select_layout_pattern_frame">\
                <span id="select_layout_pattern_1" class="select_template select_layout_pattern">1</span>\
                <span id="select_layout_pattern_2" class="select_template select_layout_pattern">2</span>\
                <span id="select_layout_pattern_3" class="select_template select_layout_pattern">3</span>\
            </span>')
            $( "#container_2").append('\
                <div id="template_1" class="template">1</div>\
                <div id="template_2" class="template">2</div>\
                <div id="template_3" class="template">3</div>')

        $( "#container_2>#template_1" ).load( "templates/reply_pattern.html .reply_pattern",function(data){
            $('#container_2>#template_1 #contaier_1').load( "templates/reply_single_1.html .reply_tile_1")
            $('#container_2>#template_1 #contaier_2').load( "templates/reply_single_2.html .reply_tile_3")
            $('#container_2>#template_1 #contaier_3').load( "templates/reply_single_3.html .reply_tile_4")
            $('#container_2>#template_1 #contaier_4').load( "templates/reply_single_2.html .reply_tile_3")
        });
        $( "#container_2 #template_1" ).addClass('text')
        $( "#container_2 #select_layout_pattern_1" ).addClass('text')

        $( "#container_2>#template_2" ).load( "templates/reply_pattern.html .reply_pattern",function(data){
            $('#container_2> #template_2 #contaier_1').load( "templates/basil_single_1.html .basil_single_1")
            $('#container_2> #template_2 #contaier_2').load( "templates/basil_single_4.html .basil_single_4")
            $('#container_2> #template_2 #contaier_3').load( "templates/basil_single_3.html .basil_single_3")
            $('#container_2> #template_2 #contaier_4').load( "templates/basil_single_2.html .basil_single_2")
        });
        $( "#container_2 #template_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_2 #select_layout_pattern_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')

        $( "#container_2>#template_3" ).load( "templates/reply_pattern.html .reply_pattern",function(data){
            $('#container_2>#template_3 #contaier_1').load( "templates/topics_single_1.html .topics_single_1")
            $('#container_2>#template_3 #contaier_2').load( "templates/topics_single_2.html .topics_single_2")
            $('#container_2>#template_3 #contaier_3').load( "templates/topics_single_3.html .topics_single_3")
            $('#container_2>#template_3 #contaier_4').load( "templates/topics_single_4.html .topics_single_4")
        });
        $( "#container_2 #template_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_2 #select_layout_pattern_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
  // -------------------------------------------------------------------------------
        $( "#container_3").append('\
            <span id="select_layout_device_frame">\
                <span id="select_layout_device_1" class="select_template select_layout_device">1</span>\
                <span id="select_layout_device_2" class="select_template select_layout_device">2</span>\
                <span id="select_layout_device_3" class="select_template select_layout_device">3</span>\
                </span>\
                <div id="template_1" class="template">1</div>\
                <div id="template_2" class="template">2</div>\
                <div id="template_3" class="template">3</div>')

        $( "#container_3>#template_1" ).load( "templates/reply_device.html .reply_device",function(data){
            $('#container_3>#template_1 #device_1').load( "templates/reply_desktop.html .reply_desktop")
            $('#container_3>#template_1 #device_2').load( "templates/reply_tablet.html .reply_tablet")
            $('#container_3>#template_1 #device_3').load( "templates/reply_singleapp.html .reply")
        });
        $( "#container_3 #template_1" ).addClass('text')
        $( "#container_3 #select_layout_device_1" ).addClass('text')


        $( "#container_3>#template_2" ).load( "templates/basil_device.html .basil_device",function(data){
            $('#container_3>#template_2 #device_1').load( "templates/basil_desktop.html .basil_desktop")
            $('#container_3>#template_2 #device_2').load( "templates/basil_tablet.html .basil_tablet")
            $('#container_3>#template_2 #device_3').load( "templates/basil_single_1.html .basil_single_1")
        });
        $( "#container_3 #template_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_3 #select_layout_device_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')


        $( "#container_3>#template_3" ).load( "templates/topics_device.html .topics_device",function(data){
            $('#container_3>#template_3 #device_1').load( "templates/topics_desktop.html .topics_desktop")
            $('#container_3>#template_3 #device_2').load( "templates/topics_tablet.html .topics_tablet")
            $('#container_3>#template_3 #device_3').load( "templates/topics_single_1.html .topics_single_1")
        });
        $( "#container_3 #template_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_3 #select_layout_device_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
  // -------------------------------------------------------------------------------
        $( "#container_4" ).load( "templates/reply_components.html .reply_components")
  // -------------------------------------------------------------------------------
        $( "#container_5").append('<span id="select_layout_desktop_frame">\
        <span id="select_layout_desktop_1" class="select_template select_layout_desktop">1</span>\
        <span id="select_layout_desktop_2" class="select_template select_layout_desktop">2</span>\
        <span id="select_layout_desktop_3" class="select_template select_layout_desktop">3</span>\
        </span>\
                <div id="template_1" class="template">1</div>\
                <div id="template_2" class="template">2</div>\
                <div id="template_3" class="template">3</div>')
        $( "#container_5 #template_1" ).load( "templates/reply_desktop.html .reply_desktop")
        $( "#container_5 #template_1" ).addClass('text')
        $( "#container_5 #select_layout_desktop_1" ).addClass('text')

        $( "#container_5 #template_2" ).load( "templates/basil_desktop.html .basil_desktop")
        $( "#container_5 #template_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_5 #select_layout_desktop_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')

        $( "#container_5 #template_3" ).load( "templates/topics_desktop.html .topics_desktop")
        $( "#container_5 #template_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_5 #select_layout_desktop_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
  // -------------------------------------------------------------------------------
        $( "#container_6" ).load( "templates/reply_components_title.html .reply_components")











  resize()
    function resize(){
        if($('#container_3>div>div').length>0 && $('#container_2>div>div').length>0 ){
            if ($('.container').outerWidth()>$('.container').outerHeight()*2){
                $('#container_2>div>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerHeight()/$('#container_2>div>div').outerHeight()+')'})
                $('#container_3>div>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerHeight()/$('#container_3>div>div').outerHeight()+')'})
                $('#container_4>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerHeight()/$('#container_4>div').outerHeight()+')'})
                $('#container_5>div>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerHeight()/$('#container_5>div>div').outerHeight()*0.8+')'})
                $('#container_6>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerHeight()/$('#container_4>div').outerHeight()+')'})
            }else{
        console.log($('#reply_pattern').outerWidth(true))
        console.log($('.container').outerWidth(true))
        console.log($('.container').outerWidth(true)/$('#container_2>div>div').outerWidth(true))
                $('#container_2>div>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerWidth()/$('#container_2>div>div').outerWidth()+')'})
                $('#container_3>div>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerWidth()/$('#container_3>div>div').outerWidth()+')'})
                $('#container_4>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerWidth()/$('#container_4>div').outerWidth()+')'})
                $('#container_5>div>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerWidth()/$('#container_5>div>div').outerWidth()*0.8+')'})
                $('#container_6>div').css({transform:'translate(-50%, -50%) scale('+$('.container').outerWidth()/$('#container_4>div').outerWidth()+')'})
            }
        }else{
            setTimeout(function(){resize()}, 300);
        }
    
    }

})