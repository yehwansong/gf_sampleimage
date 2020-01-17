$('document').ready(function(){

  // loads templates


  // singleapp------------------------------------------------------------------
    $('#container_1').append('\
            <div id="select_sketch_frame">\
                <div id="select_sketch_1" class="select_sketch">1</div>\
                <div id="select_sketch_2" class="select_sketch">2</div>\
                <div id="select_sketch_3" class="select_sketch">3</div>\
                <div id="select_sketch_4" class="select_sketch">4</div>\
                <div id="select_sketch_5" class="select_sketch">5</div>\
                <div id="select_sketch_6" class="select_sketch">6</div>\
                <div id="select_sketch_7" class="select_sketch">7</div>\
            </div>\
    <div id="sketch_wrapper">\
      <div id="sketch_frame">\
        <div id="sketch_1" class="sketch">1</div>\
        <div id="sketch_2" class="sketch">2</div>\
        <div id="sketch_3" class="sketch">3</div>\
        <div id="sketch_4" class="sketch">4</div>\
        <div id="sketch_5" class="sketch">4</div>\
        <div id="sketch_6" class="sketch">4</div>\
        <div id="sketch_7" class="sketch">7</div>\
      </div>\
    </div>\
    <div id="table_wrapper">\
    </div>')
        $( "#sketch_1" ).load( "reply_singleapp.html .reply")
        $( "#select_sketch_1" ).addClass('text')
        $( "#sketch_1" ).addClass('text')
        add_pf_1()
        // -=>perfectscrollbar

        $( "#sketch_2" ).load( "crane_singleapp.html .crane")
        $( "#select_sketch_2" ).addClass('utility')
        $( "#sketch_2" ).addClass('utility')

        $( "#sketch_3" ).load( "fortnightly_singleapp.html .fortnightly")
        $( "#select_sketch_3" ).addClass('text display_1')
        $( "#sketch_3" ).addClass('text display_1')
        add_pf_3()

        $( "#sketch_4" ).load( "basil_single_1.html .basil_single_1")
        $( "#select_sketch_4" ).addClass('display_1 display_2')
        $( "#sketch_4" ).addClass('display_1 display_2')

        $( "#sketch_5" ).load( "owl_singleapp.html .owl")
        $( "#select_sketch_5" ).addClass('text display_1 display_2')
        $( "#sketch_5" ).addClass('text display_1 display_2')
        add_pf_5()

        $( "#sketch_6" ).load( "shrine_singleapp.html .shrine")
        $( "#select_sketch_6" ).addClass('utility')
        $( "#sketch_6" ).addClass('utility')
        add_pf_6()

        $( "#sketch_7" ).load( "topics_single_1.html .topics_single_1")
        $( "#select_sketch_7" ).addClass('display_3')
        $( "#sketch_7" ).addClass('display_3')
        add_pf_6()

        $( "#table_wrapper" ).load( "table.html .table")
  // // ----------------------------------------------------------------------------
        $( "#container_2").append('<span id="select_layout_pattern_frame">\
        <span id="select_layout_pattern_1" class="select_layout_pattern">1</span>\
        <span id="select_layout_pattern_2" class="select_layout_pattern">2</span></span>')
        $( "#container_2>div:nth-child(1)" ).load( "reply_pattern.html .reply_pattern",function(data){
            $('#container_2>div:nth-child(1) #contaier_1').load( "reply_single_1.html .reply_tile_1")
            $('#container_2>div:nth-child(1) #contaier_2').load( "reply_single_2.html .reply_tile_3")
            $('#container_2>div:nth-child(1) #contaier_3').load( "reply_single_3.html .reply_tile_4")
            $('#container_2>div:nth-child(1) #contaier_4').load( "reply_single_4.html .reply_tile_2")
        });
        $( "#container_2>div:nth-child(2)" ).load( "basil_pattern.html .basil_pattern",function(data){
            $('#container_2>div:nth-child(2) #contaier_1').load( "basil_single_1.html .basil_single_1")
            $('#container_2>div:nth-child(2) #contaier_2').load( "basil_single_2.html .basil_single_2")
            $('#container_2>div:nth-child(2) #contaier_3').load( "basil_single_3.html .basil_single_3")
            $('#container_2>div:nth-child(2) #contaier_4').load( "basil_single_4.html .basil_single_4")
        });
        $( "#container_2>div:nth-child(3)" ).load( "topics_pattern.html .topics_pattern",function(data){
            $('#container_2>div:nth-child(3) #contaier_1').load( "topics_single_1.html .topics_single_1")
            $('#container_2>div:nth-child(3) #contaier_2').load( "topics_single_2.html .topics_single_2")
            $('#container_2>div:nth-child(3) #contaier_3').load( "topics_single_3.html .topics_single_3")
            $('#container_2>div:nth-child(3) #contaier_4').load( "topics_single_4.html .topics_single_4")
        });
  // -------------------------------------------------------------------------------
        $( "#container_3").append('<span id="select_layout_device_frame">\
        <span id="select_layout_device_1" class="select_layout_device">1</span>\
        <span id="select_layout_device_2" class="select_layout_device">2</span></span>')
        $( "#container_3>div:nth-child(1)" ).load( "reply_device.html .reply_device",function(data){
            $('#container_3>div:nth-child(1) #device_1').load( "reply_desktop.html .reply_desktop")
            $('#container_3>div:nth-child(1) #device_2').load( "reply_tablet.html .reply_tablet")
            $('#container_3>div:nth-child(1) #device_3').load( "reply_singleapp.html .reply")
        });
        $( "#container_3>div:nth-child(2)" ).load( "basil_device.html .basil_device",function(data){
            $('#container_3>div:nth-child(2) #device_1').load( "basil_desktop.html .basil_desktop")
            $('#container_3>div:nth-child(2) #device_2').load( "basil_tablet.html .basil_tablet")
            $('#container_3>div:nth-child(2) #device_3').load( "basil_single_1.html .basil_single_1")
        });
        $( "#container_3>div:nth-child(3)" ).load( "topics_device.html .topics_device",function(data){
            $('#container_3>div:nth-child(3) #device_1').load( "topics_desktop.html .topics_desktop")
            $('#container_3>div:nth-child(3) #device_2').load( "topics_tablet.html .topics_tablet")
            $('#container_3>div:nth-child(3) #device_3').load( "topics_single_1.html .topics_single_1")
        });
  // -------------------------------------------------------------------------------
        $( "#container_4" ).load( "reply_components.html .casestudiesreplycomponents")
  // -------------------------------------------------------------------------------
        // $( "#container_5" ).load( "reply_components.html .casestudiesreplycomponents")
  // -------------------------------------------------------------------------------
    resize('container_2')
    resize('container_3')
    resize('container_4')
    function resize(elem){
        if($('#'+elem+'>div>div').length>0){
            if ($('#'+elem).outerWidth()>$('#'+elem).outerHeight()*2){
                $('#'+elem+'>div>div').css({transform:'scale('+$('#'+elem).outerHeight()/$('#'+elem+'>div>div').outerHeight()+')'})
            }else{
                console.log('translate(-50%, -50%) scale('+$('#'+elem).outerWidth()/$('#'+elem+'>div>div').outerWidth()+')')
                $('#'+elem+'>div>div').css({transform:'translate(-50%, -50%) scale('+$('#'+elem).outerWidth()/$('#'+elem+'>div>div').outerWidth()+')'})
            }
        }else{
            setTimeout(function(){resize(elem)}, 300);
        }
    
    }

})