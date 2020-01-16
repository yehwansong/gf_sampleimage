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
        $( "#sketch_1" ).load( "templates/reply_singleapp.html .reply")
        $( "#select_sketch_1" ).addClass('text')
        $( "#sketch_1" ).addClass('text')
        add_pf_1()
        // -=>perfectscrollbar

        $( "#sketch_2" ).load( "templates/crane_singleapp.html .crane")
        $( "#select_sketch_2" ).addClass('utility')
        $( "#sketch_2" ).addClass('utility')

        $( "#sketch_3" ).load( "templates/fortnightly_singleapp.html .fortnightly")
        $( "#select_sketch_3" ).addClass('text display_1')
        $( "#sketch_3" ).addClass('text display_1')
        add_pf_3()

        $( "#sketch_4" ).load( "templates/basil_singleapp.html .basil")
        $( "#select_sketch_4" ).addClass('display_1 display_2')
        $( "#sketch_4" ).addClass('display_1 display_2')

        $( "#sketch_5" ).load( "templates/owl_singleapp.html .owl")
        $( "#select_sketch_5" ).addClass('text display_1 display_2')
        $( "#sketch_5" ).addClass('text display_1 display_2')
        add_pf_5()

        $( "#sketch_6" ).load( "templates/shrine_singleapp.html .shrine")
        $( "#select_sketch_6" ).addClass('utility')
        $( "#sketch_6" ).addClass('utility')
        add_pf_6()

        $( "#sketch_7" ).load( "templates/topics_singleapp.html .topics")
        $( "#select_sketch_7" ).addClass('display_3')
        $( "#sketch_7" ).addClass('display_3')
        add_pf_6()

        $( "#table_wrapper" ).load( "templates/table.html .table")
  // // ----------------------------------------------------------------------------
        $( "#container_2" ).load( "templates/reply_pattern.html .wrapper")
  // -------------------------------------------------------------------------------
        $( "#container_3" ).load( "templates/reply_components.html .casestudiesreplycomponents")
  // -------------------------------------------------------------------------------
        $( "#container_4" ).load( "templates/device.html .device",function(data){
            $('#device_1').load( "templates/reply_desktop.html .reply_desktop")
            $('#device_2').load( "templates/reply_tablet.html .reply_tablet")
            $('#device_3').load( "templates/reply_singleapp.html .reply")
        });
  // -------------------------------------------------------------------------------
        // $( "#container_5" ).load( "templates/reply_components.html .casestudiesreplycomponents")
  // -------------------------------------------------------------------------------
    resize('container_2')
    resize('container_3')
    resize('container_4')
    function resize(elem){
        console.log('#'+elem+'>div')
        if($('#'+elem+'>div').length>0){
            if ($('#'+elem).outerWidth()>$('#'+elem).outerHeight()*2){
                console.log('1')
                $('#'+elem+'>div').css({transform:'scale('+$('#'+elem).outerHeight()/$('#'+elem+'>div').outerHeight()+')'})
            }else{
                console.log('translate(-50%, -50%) scale('+$('#'+elem).outerWidth()/$('#'+elem+'>div').outerWidth()+')')
                $('#'+elem+'>div').css({transform:'translate(-50%, -50%) scale('+$('#'+elem).outerWidth()/$('#'+elem+'>div').outerWidth()+')'})
            }
        }else{
            setTimeout(function(){resize(elem)}, 300);
        }
    
    }

})