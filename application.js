$('document').ready(function(){

  // loads templates


  // singleapp------------------------------------------------------------------
    $('#select_design_wrapper').append('\
        <div id="select_template_single_frame" class="select_template_frame_1 select_template_frame selected_container">\
            <div id="select_template_single_1" class="select_template_1 select_template select_template_single">1</div>\
            <div id="select_template_single_2" class="select_template_1 select_template select_template_single">2</div>\
            <div id="select_template_single_3" class="select_template_1 select_template select_template_single">3</div>\
            <div id="select_template_single_4" class="select_template_1 select_template select_template_single">4</div>\
            <div id="select_template_single_5" class="select_template_1 select_template select_template_single">5</div>\
            <div id="select_template_single_6" class="select_template_1 select_template select_template_single">6</div>\
            <div id="select_template_single_7" class="select_template_1 select_template select_template_single">7</div>\
        </div>\
        ')
    $('#container_1').append('\
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
            $( "#select_template_single_1" ).addClass('text')
            $( "#container_1>#template_1 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_1()
        $( "#container_1>#template_2" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_2 #sketch" ).load( "templates/crane_singleapp.html .crane")
            $( "#container_1 #template_2" ).addClass('utility')
            $( "#select_template_single_2" ).addClass('utility')
            $( "#container_1>#template_2 #table_wrapper" ).load( "templates/table.html .table")
        })
        $( "#container_1>#template_3" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_3 #sketch" ).load( "templates/fortnightly_singleapp.html .fortnightly")
            $( "#container_1 #template_3" ).addClass('text display_1')
            $( "#select_template_single_3" ).addClass('text display_1')
            $( "#container_1>#template_3 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_3()
        $( "#container_1>#template_4" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_4 #sketch" ).load( "templates/basil_single_4.html .basil_single_4")
            $( "#container_1 #template_4" ).addClass('display_1 display_2')
            $( "#select_template_single_4" ).addClass('display_1 display_2')
            $( "#container_1>#template_4 #table_wrapper" ).load( "templates/table.html .table")
        })
        $( "#container_1>#template_5" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_5 #sketch" ).load( "templates/owl_singleapp.html .owl")
            $( "#container_1 #template_5" ).addClass('text display_1 display_2')
            $( "#select_template_single_5" ).addClass('text display_1 display_2')
            $( "#container_1>#template_5 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_5()
        $( "#container_1>#template_6" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_6 #sketch" ).load( "templates/shrine_singleapp.html .shrine")
            $( "#container_1 #template_6" ).addClass('utility')
            $( "#select_template_single_6" ).addClass('utility')
            $( "#container_1>#template_6 #table_wrapper" ).load( "templates/table.html .table")
        })
        add_pf_6()
        $( "#container_1>#template_7" ).load( "templates/singleapp.html .singleapp",function(data){
            $( "#container_1>#template_7 #sketch" ).load( "templates/topics_single_1.html .topics_single_1")
            $( "#container_1 #template_7" ).addClass('display_3 display_6 display_4 display_5')
            $( "#select_template_single_7" ).addClass('display_3 display_6 display_4 display_5')
            $( "#container_1>#template_7 #table_wrapper" ).load( "templates/table.html .table")
        })
        // -=>perfectscrollbar

  // // ----------------------------------------------------------------------------
        $('#select_design_wrapper').append('\
            <span id="select_template_pattern_frame" class="select_template_frame_2 select_template_frame">\
                <span id="select_template_pattern_1" class="select_template_2 select_template select_template_pattern">1</span>\
                <span id="select_template_pattern_2" class="select_template_2 select_template select_template_pattern">2</span>\
                <span id="select_template_pattern_3" class="select_template_2 select_template select_template_pattern">3</span>\
            </span>\
        ')
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
        $( "#select_template_pattern_1" ).addClass('text')

        $( "#container_2>#template_2" ).load( "templates/reply_pattern.html .reply_pattern",function(data){
            $('#container_2> #template_2 #contaier_1').load( "templates/basil_single_1.html .basil_single_1")
            $('#container_2> #template_2 #contaier_2').load( "templates/basil_single_4.html .basil_single_4")
            $('#container_2> #template_2 #contaier_3').load( "templates/basil_single_3.html .basil_single_3")
            $('#container_2> #template_2 #contaier_4').load( "templates/basil_single_2.html .basil_single_2")
        });
        $( "#container_2 #template_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_pattern_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')

        $( "#container_2>#template_3" ).load( "templates/reply_pattern.html .reply_pattern",function(data){
            $('#container_2>#template_3 #contaier_1').load( "templates/topics_single_1.html .topics_single_1")
            $('#container_2>#template_3 #contaier_2').load( "templates/topics_single_2.html .topics_single_2")
            $('#container_2>#template_3 #contaier_3').load( "templates/topics_single_3.html .topics_single_3")
            $('#container_2>#template_3 #contaier_4').load( "templates/topics_single_4.html .topics_single_4")
        });
        $( "#container_2 #template_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_pattern_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
  // -------------------------------------------------------------------------------
        $('#select_design_wrapper').append('\
            <span id="select_template_device_frame" class="select_template_frame_3 select_template_frame">\
                <span id="select_template_device_1" class="select_template_3 select_template select_template_device">1</span>\
                <span id="select_template_device_2" class="select_template_3 select_template select_template_device">2</span>\
                <span id="select_template_device_3" class="select_template_3 select_template select_template_device">3</span>\
            </span>\
        ')
        $( "#container_3").append('\
            <span id="select_template_device_frame">\
                <span id="select_template_device_1" class="select_template select_template_device">1</span>\
                <span id="select_template_device_2" class="select_template select_template_device">2</span>\
                <span id="select_template_device_3" class="select_template select_template_device">3</span>\
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
        $( "#select_template_device_1" ).addClass('text')


        $( "#container_3>#template_2" ).load( "templates/basil_device.html .basil_device",function(data){
            $('#container_3>#template_2 #device_1').load( "templates/basil_desktop.html .basil_desktop")
            $('#container_3>#template_2 #device_2').load( "templates/basil_tablet.html .basil_tablet")
            $('#container_3>#template_2 #device_3').load( "templates/basil_single_1.html .basil_single_1")
        });
        $( "#container_3 #template_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_device_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')


        $( "#container_3>#template_3" ).load( "templates/topics_device.html .topics_device",function(data){
            $('#container_3>#template_3 #device_1').load( "templates/topics_desktop.html .topics_desktop")
            $('#container_3>#template_3 #device_2').load( "templates/topics_tablet.html .topics_tablet")
            $('#container_3>#template_3 #device_3').load( "templates/topics_single_1.html .topics_single_1")
        });
        $( "#container_3 #template_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_device_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
  // -------------------------------------------------------------------------------
        $( "#container_4" ).load( "templates/reply_components.html .reply_components")
  // -------------------------------------------------------------------------------
        $('#select_design_wrapper').append('\
            <span id="select_template_desktop_frame" class="select_template_frame_5 select_template_frame">\
                <span id="select_template_desktop_1" class="select_template_5 select_template select_template_desktop">1</span>\
                <span id="select_template_desktop_2" class="select_template_5 select_template select_template_desktop">2</span>\
                <span id="select_template_desktop_3" class="select_template_5 select_template select_template_desktop">3</span>\
            </span>\
        ')
        $( "#container_5").append('\
                <div id="template_1" class="template">1</div>\
                <div id="template_2" class="template">2</div>\
                <div id="template_3" class="template">3</div>')
        $( "#container_5 #template_1" ).load( "templates/reply_desktop.html .reply_desktop")
        $( "#container_5 #template_1" ).addClass('text')
        $( "#select_template_desktop_1" ).addClass('text')

        $( "#container_5 #template_2" ).load( "templates/basil_desktop.html .basil_desktop")
        $( "#container_5 #template_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_desktop_2" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')

        $( "#container_5 #template_3" ).load( "templates/topics_desktop.html .topics_desktop")
        $( "#container_5 #template_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_desktop_3" ).addClass('display_1 display_2 display_3 display_6 display_4 display_5')
  // -------------------------------------------------------------------------------
        $( "#container_6" ).load( "templates/reply_components_title.html .reply_components")
  // -------------------------------------------------------------------------------
        $('#select_design_wrapper').append('\
            <span id="select_template_components_sidetitle_frame" class="select_template_frame_7 select_template_frame">\
                <span id="select_template_components_sidetitle_1" class="select_template_7 select_template select_template_components_sidetitle">1</span>\
                <span id="select_template_components_sidetitle_2" class="select_template_7 select_template select_template_components_sidetitle">2</span>\
            </span>\
        ')
        $( "#container_7").append('\
                <div id="template_1" class="template">1</div>\
                <div id="template_2" class="template">2</div>')
        $( "#container_7 #template_1" ).load( "templates/reply_components_sidetitle.html .reply_components")
        $( "#container_7 #template_1" ).addClass('text utility display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#container_7 #template_2" ).load( "templates/basil_components_sidetitle.html .basil_components")
        $( "#container_7 #template_2" ).addClass('text utility display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_components_sidetitle_1" ).addClass('text utility display_1 display_2 display_3 display_6 display_4 display_5')
        $( "#select_template_components_sidetitle_2" ).addClass('text utility display_1 display_2 display_3 display_6 display_4 display_5')

  // -------------------------------------------------------------------------------

    $('#select_design_wrapper').append('\
        <div id="select_template_single_frame" class="select_template_frame_8 select_template_frame">\
            <div id="select_template_single_info_1" class="select_template_8 select_template select_template_single_info">1</div>\
            <div id="select_template_single_info_2" class="select_template_8 select_template select_template_single_info">2</div>\
            <div id="select_template_single_info_3" class="select_template_8 select_template select_template_single_info">3</div>\
            <div id="select_template_single_info_4" class="select_template_8 select_template select_template_single_info">4</div>\
            <div id="select_template_single_info_5" class="select_template_8 select_template select_template_single_info">5</div>\
            <div id="select_template_single_info_6" class="select_template_8 select_template select_template_single_info">6</div>\
            <div id="select_template_single_info_7" class="select_template_8 select_template select_template_single_info">7</div>\
        </div>\
        ')
    $('#container_8').append('\
            <div id="template_1" class="template">1</div>\
            <div id="template_2" class="template">2</div>\
            <div id="template_3" class="template">3</div>\
            <div id="template_4" class="template">4</div>\
            <div id="template_5" class="template">4</div>\
            <div id="template_6" class="template">4</div>\
            <div id="template_7" class="template">7</div>')

        $( "#container_8>#template_1" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_1 .app_column" ).load( "templates/reply_singleapp.html .reply")
            $( "#container_8>#template_1 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_1 .info_column" ).addClass('reply_info')
            $( "#container_8 #template_1" ).addClass('text')
            $( "#select_template_single_info_1" ).addClass('text')
        })
        add_pf_1()
        $( "#container_8>#template_2" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_2 .app_column" ).load( "templates/crane_singleapp.html .crane")
            $( "#container_8>#template_2 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_2 .info_column" ).addClass('crane_info')
            $( "#container_8 #template_2" ).addClass('utility')
            $( "#select_template_single_info_2" ).addClass('utility')
        })
        $( "#container_8>#template_3" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_3 .app_column" ).load( "templates/fortnightly_singleapp.html .fortnightly")
            $( "#container_8>#template_3 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_3 .info_column" ).addClass('fortnightly_info')
            $( "#container_8 #template_3" ).addClass('text display_1')
            $( "#select_template_single_info_3" ).addClass('text display_1')
        })
        add_pf_3()
        $( "#container_8>#template_4" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_4 .app_column" ).load( "templates/basil_single_1.html .basil_single_1")
            $( "#container_8>#template_4 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_4 .info_column" ).addClass('basil_info')
            $( "#container_8 #template_4" ).addClass('display_1 display_2')
            $( "#select_template_single_info_4" ).addClass('display_1 display_2')
        })
        $( "#container_8>#template_5" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_5 .app_column" ).load( "templates/owl_singleapp.html .owl")
            $( "#container_8>#template_5 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_5 .info_column" ).addClass('owl_info')
            $( "#container_8 #template_5" ).addClass('text display_1 display_2')
            $( "#select_template_single_info_5" ).addClass('text display_1 display_2')
        })
        add_pf_5()
        $( "#container_8>#template_6" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_6 .app_column" ).load( "templates/shrine_singleapp.html .shrine")
            $( "#container_8>#template_6 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_6 .info_column" ).addClass('shrine_info')
            $( "#container_8 #template_6" ).addClass('utility')
            $( "#select_template_single_info_6" ).addClass('utility')
        })
        add_pf_6()
        $( "#container_8>#template_7" ).load( "templates/single_info.html .single_info",function(data){
            $( "#container_8>#template_7 .app_column" ).load( "templates/topics_single_1.html .topics_single_1")
            $( "#container_8>#template_7 .info_column" ).load( "templates/single_info_column.html .info")
            $( "#container_8>#template_7 .info_column" ).addClass('topics_info')
            $( "#container_8 #template_7" ).addClass('display_3 display_6 display_4 display_5')
            $( "#select_template_single_info_7" ).addClass('display_3 display_6 display_4 display_5')
        })
        // -=>perfectscrollbar









  resize()
    function resize(){
        if($('#container_3>div>div').length>0 && $('#container_2>div>div').length>0 ){
            if ($('.container').outerWidth()>$('.container').outerHeight()*2){
                $('#container_2>div>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_2>div>div').outerHeight()+') rotate(-45deg)'})
                $('#container_3>div>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_3>div>div').outerHeight()+')'})
                $('#container_4>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_4>div').outerHeight()+')'})
                $('#container_5>div>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_5>div>div').outerHeight()*0.8+')'})
                $('#container_6>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_4>div').outerHeight()+')'})
                $('#container_7>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_4>div').outerHeight()+')'})
                $('#container_8>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerHeight()/$('#container_8>div').outerHeight()+')'})
            }else{
                $('#container_2>div>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_2>div>div').outerWidth()+') rotate(-45deg)'})
                $('#container_3>div>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_3>div>div').outerWidth()+')'})
                $('#container_4>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_4>div').outerWidth()+')'})
                $('#container_5>div>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_5>div>div').outerWidth()*0.8+')'})
                $('#container_6>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_4>div').outerWidth()+')'})
                $('#container_7>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_4>div').outerWidth()+')'})
                $('#container_8>div').css({transform:'translate(-50%,-50%) scale('+$('.container').outerWidth()/$('#container_8>div').outerWidth()+')'})
            }
        }else{
            setTimeout(function(){resize()}, 300);
        }
    
    }

})