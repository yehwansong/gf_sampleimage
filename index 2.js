// var makerjs = require('makerjs');
// general functionss
var fonts
var fontlist 
var counter
var language_array=[]
var multi_string
var default_font_index
var default_font = 'Roboto'
var variants
var hasreg
var hasMedium
var hasLight

// extra functions
function exists(arr, search) {
    return arr.some(row => row.includes(search));
}
function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}



window.onload = function () {
    // select_sketch()
    // function select_sketch(){
    $(document).ready(function(){
    $('.select_template').click(function(){
    })

        $('#select_single_1').click(function(){
        console.log(1)
             $('.select_single').removeClass('selected')
             $('#container_1 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_1 #template_1').addClass('selected')
        })
        $('#select_single_2').click(function(){
        console.log(1)
             $('.select_single').removeClass('selected')
             $('#container_1 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_1 #template_2').addClass('selected')
        })
        $('#select_single_3').click(function(){
        console.log(1)
             $('.select_single').removeClass('selected')
             $('#container_1 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_1 #template_3').addClass('selected')
        })
        $('#select_single_4').click(function(){
        console.log(1)
             $('.select_single').removeClass('selected')
             $('#container_1 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_1 #template_4').addClass('selected')
        })
        $('#select_single_5').click(function(){
        console.log(1)
             $('.select_single').removeClass('selected')
             $('#container_1 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_1 #template_5').addClass('selected')
        })
        $('#select_single_6').click(function(){
        console.log(1)
             $('.select_single').removeClass('selected')
             $('#container_1 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_1 #template_6').addClass('selected')
        })


        $('#select_layout_device_1').click(function(){
             $('.select_layout_device').removeClass('selected')
             $('#container_3 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_3 #template_1').addClass('selected')
        })
        $('#select_layout_device_2').click(function(){
             $('.select_layout_device').removeClass('selected')
             $('#container_3 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_3 #template_2').addClass('selected')
        })
        $('#select_layout_device_3').click(function(){
             $('.select_layout_device').removeClass('selected')
             $('#container_3 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_3 #template_3').addClass('selected')
        })

        $('#select_layout_pattern_1').click(function(){
             $('.select_layout_pattern').removeClass('selected')
             $('#container_2 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_2 #template_1').addClass('selected')
        })
        $('#select_layout_pattern_2').click(function(){
             $('.select_layout_pattern').removeClass('selected')
             $('#container_2 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_2 #template_2').addClass('selected')
        })
        $('#select_layout_pattern_3').click(function(){
             $('.select_layout_pattern').removeClass('selected')
             $('#container_2 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_2 #template_3').addClass('selected')
        })



        $('#select_layout_desktop_1').click(function(){
             $('.select_layout_desktop').removeClass('selected')
             $('#container_5 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_5 #template_1').addClass('selected')
        })
        $('#select_layout_desktop_2').click(function(){
             $('.select_layout_desktop').removeClass('selected')
             $('#container_5 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_5 #template_2').addClass('selected')
        })
        $('#select_layout_desktop_3').click(function(){
             $('.select_layout_desktop').removeClass('selected')
             $('#container_5 .selectable').removeClass('selected')
             $(this).addClass('selected')
             $('#container_5 #template_3').addClass('selected')
        })


    })
    // }



    var a_counter = 0
    getGoogleFonts('AIzaSyCxzLzCFosJX6B9rOiy3xBu0J2TAlRBzXg');
    fontlist = document.getElementsByClassName('fontlist')

// load font api
    function getGoogleFonts(apiKey){
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + apiKey, true);
        xhr.onloadend = function () {
            fonts = JSON.parse(xhr.responseText);
            objectarray(JSON.parse(xhr.responseText).items, fonts)
        };
        xhr.send();
    };


// set detault->roboto
    function init_font(){
        if(window.location.hash) {
            console.log(window.location.hash.split('#')[1])
            for (var i = fonts.items.length - 1; i >= 0; i--) {
                if(fonts.items[i].family == window.location.hash.split('#')[1].split('+').join(' ')){
                    select_font('<div id="index_'+i+'" class="fontlist">'+fonts.items[i].family+'</div>')  
                }
            }
        } else {
            select_font('<div id="index_779" class="fontlist">Roboto</div>')  
        }
    }


// load font dropdown list
    function objectarray(FontsInUseArray, fonts){
        init_font()  
        for (var i =  0; i < FontsInUseArray.length; i++) {
            var FontsInUseObject = document.createElement("div");
            FontsInUseObject.innerHTML += FontsInUseArray[i].family
            FontsInUseObject.setAttribute("id",'index_'+i)
            FontsInUseObject.setAttribute("class",'fontlist')
            document.getElementById("objectlist_wrapper").appendChild(FontsInUseObject);
            if(i == FontsInUseArray.length-1){
                $('.fontlist').click(function(){
                    select_font(this)
                })
            }
        }
    } 


// when user selects font step_1
    function select_font(selected){
            check_variant($(selected).attr('id').split('_')[1])
            $('#select_fonts').html(fonts.items[$(selected).attr('id').split('_')[1]].family)
            var defaultlink = 'https://fonts.google.com/specimen/'
            $('#googlefont').attr("href", defaultlink.concat(fonts.items[$(selected).attr('id').split('_')[1]].family.replace(/ /g, `+`)))
    }
// when user selects font step_2
    function check_variant(fontIndex){
        var family = fonts.items[fontIndex].family
        var category = fonts.items[fontIndex].category
        variants = fonts.items[fontIndex].variants

        var variant_array =[]
                hasLight = false
                hasMedium = false
                hasreg = false
        for (var i = variants.length - 1; i >= 0; i--) {
            if(variants[i] == '300'){
                hasLight = true
                variant_array.push('300')
            }else if(variants[i] == 'light'){
                hasLight = true
                variant_array.push('light')
            }else{
            }

            if(variants[i] == '400'){
                hasreg = true
                variant_array.push('400')
            }else if(variants[i] == 'regular'){
                hasreg = true
                variant_array.push('regular')
            }else{
            }
            
            if(variants[i] == '500'){
                hasMedium = true
                variant_array.push('500')
            }else if(variants[i] == 'medium'){
                hasMedium = true
                variant_array.push('medium')
            }else{
            }

            if(i == 0){
                variants = variant_array.join(',')
            }
        }
        var var_index
        var url
        change_font(url,family,category)
        // if singleapp
        sort_sketch(family,category)
        change_table(family,category)
        change_title(family,category)


        // if pattern
    }
// when user selects font step_4 -- change application font
    function change_font(url,family,category){
        window.location.hash = family.replace(/ /g, '+')
        var apiUrl = [];
        apiUrl.push(
            family.replace(/ /g, '+')
            +':'+variants + '&display=swap'
        );
        var joined = apiUrl.join('|')
        var url = 'https://fonts.googleapis.com/css?family=' + joined
        var fontlink = document.createElement('link'); 
        fontlink.href = url;
        fontlink.rel = "stylesheet"; 
        head = document.head || document.getElementsByTagName('head')[0],
        head.appendChild(fontlink);

        var SC = family.split(' ')[family.split(' ').length-1]
        var style = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(style);
        if(category === 'display' || category === 'handwriting' || SC === 'SC' || 
                exists(serif_subcat, family) ||
                exists(sansserif_subcat, family) ||
                exists(mono_subcat, family)
                    ) {
            $('.h1').css({'font-family':family})
            $('.h2').css({'font-family':family})
            $('.h3').css({'font-family':family})
            $('.h4').css({'font-family':family})
            $('.h5').css({'font-family':family})
            $('.h6').css({'font-family':family})
            $('.subtitle1').css({'font-family':default_font})
            $('.subtitle2').css({'font-family':default_font})
            $('.body1').css({'font-family':default_font})
            $('.body2').css({'font-family':default_font})
            $('.button').css({'font-family':default_font})
            $('.caption').css({'font-family':default_font})
            $('.overline').css({'font-family':default_font})
        }else{
            $('.h1').css({'font-family':family})
            $('.h2').css({'font-family':family})
            $('.h3').css({'font-family':family})
            $('.h4').css({'font-family':family})
            $('.h5').css({'font-family':family})
            $('.h6').css({'font-family':family})
            $('.subtitle1').css({'font-family':family})
            $('.subtitle2').css({'font-family':family})
            $('.body1').css({'font-family':family})
            $('.body2').css({'font-family':family})
            $('.button').css({'font-family':family})
            $('.caption').css({'font-family':family})
            $('.overline').css({'font-family':family})
        }
        setTimeout(function(){show_heading()},1000)
    }


// //////singleapp//////


// when user selects font step_3 -- change title for layout6
    function change_title(family,category){
        $('#main_font_title').text(family)
        $('#sub_font_title').text(family)
        var SC = family.split(' ')[family.split(' ').length-1]
        if(category === 'display' || category === 'handwriting') {
        $('#sub_font_title').show()
            }else{
        $('#sub_font_title').hide()
            }
        setTimeout(function(){$('#container_6 .bodytext').css({'margin-top': $('#font_title').actual('height')+20 })},1000)
    }
// when user selects font step_3 -- change table font for layout1
    function change_table(family,category){
        if($('.x_2').length>1){
            console.log('table')
            console.log(family)
            $('.x_3').html('Regular')
            $('.x_2').html(family)
            var SC = family.split(' ')[family.split(' ').length-1]
            if(category === 'display' || category === 'handwriting' || SC === 'SC') {
                $('.y_7 .x_2').html(default_font)
                $('.y_8 .x_2').html(default_font)
                $('.y_9 .x_2').html(default_font)
                $('.y_10 .x_2').html(default_font)
                $('.y_11 .x_2').html(default_font)
                $('.y_12 .x_2').html(default_font)
                $('.y_13 .x_2').html(default_font)
                $('.y_8 .x_3').html('Medium')
                $('.y_11 .x_3').html('Medium')
            }else{
            }
            if(hasMedium){
                $('.y_6 .x_3').html('Medium')
                $('.y_8 .x_3').html('Medium')
                $('.y_11 .x_3').html('Medium')
            }
            if(hasLight){
                $('.y_1 .x_3').html('Light')
                $('.y_2 .x_3').html('Light')
            }
        }else{
            setTimeout(function(){change_table(family,category)},300)
        }
    }
// if table is too narrow(fond is superwide)remove 'heading'
    function show_heading(){
        console.log($('.y_1 .x_1').height())
        console.log($('.y_2 .x_1').outerHeight())
        if ($('.y_1 .x_1').height()/2>$('.y_2 .x_1').outerHeight()){
            $('.headline').hide()
        }else{
            $('.headline').show()
        }
    }

    $(".select_layout").click(function(e) {
        $('.select_layout_selected').removeClass('select_layout_selected')
        $(this).addClass('select_layout_selected')
        $('.selected_container').removeClass('selected_container')
        $('#container_'+$(this).attr('id').split('_')[2]).addClass('selected_container')
    });

    function sort_sketch(family,category){
        $('.selected').removeClass('selected')
        $('.selectable').removeClass('selectable')
        if(category == 'handwriting'){
            for (var i = handwriting_subcat.length - 1; i >= 0; i--) {
                if(String(handwriting_subcat[i][0]) === String(family)){
                    $('.display_'+handwriting_subcat[i][1]).addClass('selectable')
                }
            }
        }else if(category == 'display'){
            for (var i = display_subcat.length - 1; i >= 0; i--) {
                if(display_subcat[i][0] === family){
                    console.log($('.sketch.display_'+display_subcat[i][1]))
                    $('.display_'+display_subcat[i][1]).addClass('selectable')
                }
            }
        }else if(category == 'serif'){
            if(exists(serif_subcat, family) || family.split(' ')[family.split(' ').length-1] === 'sc'){
                    $('.display_1').addClass('selectable')
            }else{
            console.log('3')
                $('.text').addClass('selectable')
            }
        }else{
            if(exists(sansserif_subcat, family) || exists(mono_subcat,family) || family.split(' ')[family.split(' ').length-1] === 'sc'){
                    $('.display_1').addClass('selectable')
            }else{
                $('.text').addClass('selectable')
                $('.utility').addClass('selectable')
            }
        }
        init_select_sketch()
    }

    function init_select_sketch(){
        for (var i = $('.container').length - 1; i >= 0; i--) {
            if($('.selectable').length > 0){
                var random = Math.floor(Math.random() * $('#container_'+ (i+1) +' .template.selectable').length)
                $('#container_'+ (i+1) +' .selected').removeClass('selected')
                $('#container_'+ (i+1) +' .template.selectable').eq(random).addClass('selected');
                $('#container_'+ (i+1) +' .select_template.selectable').eq(random).addClass('selected');
            }else{
                setTimeout(function(){init_select_sketch()}, 500);
            }
        }
    }


// // fullload()
// function fullload(){
//     if($('#sketch_3').length > 0){
//         grouping()
//     }else{
//         setTimeout(function(){fullload()}, 500);
//     }
// }
//     function grouping(){
//         $('#sketch_wrapper .h1').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .h1').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .h2').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .h2').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .h3').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .h3').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .h4').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .h4').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .h5').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .h5').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .h6').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .h6').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })

//         $('#sketch_wrapper .subtitle1').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .subtitle1').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .subtitle2').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .subtitle2').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })

//         $('#sketch_wrapper .body1').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .body1').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .body2').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .body2').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .button').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .button').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .caption').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .caption').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
//         $('#sketch_wrapper .overline').hover(function(){ 
//             // $(this).addClass('hovered')
//             $('.table .overline').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') 
//             })

//         $('.table tr').hover(function(){ 
//             var hoveredelement = $(this).find('.x_1').attr('class').split(' ')[1]
//                 // $(this).addClass('hovered')
//                 document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].classList.add("hovered");
//             },function(){
//                 // $(this).removeClass('hovered') 
//                 $('.hovered').removeClass('hovered')
//             })
//         $('.table tr').click(function(){ 
//             var hoveredelement = $(this).find('.x_1').attr('class').split(' ')[1]
//             $('.selected').removeClass('selected')
//             $('#select_single_'+document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].closest('.sketch').getAttribute('id').split('_')[1]).addClass('selected')
//             $('.sketch').removeClass('selected')
//             document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].closest('.sketch').classList.add('selected')
//             document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].closest('.sketch').scrollTo(0,document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].offsetTop - 30)
//         })
//     }
function resize_bfcapture(cap_w, cap_h){
    $(".selected_container").css({transform : 'scale('+Math.min(cap_w/$('.container').outerWidth(), cap_h/$('.container').outerHeight())+')'})
}
$('.saveasimage').click(function(){ 

// var node = document.getElementsByClassName('selected_container')[0];
// console.log(node)
// domtoimage.toPng(node)
//     .then(function (dataUrl) {
//         var img = new Image();
//         img.src = dataUrl;
//         document.body.appendChild(img);
//     })
//     .catch(function (error) {
//         console.error('oops, something went wrong!', error);
//     });


    var format =(this).id.split('_')[1]
    var cap_w = (this).id.split('_')[2]
    var cap_h = (this).id.split('_')[3]
    resize_bfcapture(cap_w, cap_h)
    $('.selectable').addClass('hidewhencapture')
    $('.selected').removeClass('hidewhencapture')
    console.log(cap_w)
    console.log(cap_h)
        html2canvas(document.querySelector(".selected_container"),{
            // dpi: 72,
              width: cap_w ,
              height: cap_h ,
    scale:1
          }).then(canvas => {
            document.body.appendChild(canvas)
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "sdfds."+format;
                link.href = canvas.toDataURL("image/"+format+"").replace("image/"+format+"", "image/octet-stream");
                link.target = '_blank';
                link.click();
    $('.selected').removeClass('hideoverflow')
    $('.hidewhencapture').removeClass('hidewhencapture')
    $(".selected_container").css({transform : 'scale(1)'})
    $('canvas').remove()
        });
})



$('#saveimage_wrapper').hover(function(){
    $('.container').addClass('zindex')
},function(){
    $('.container').removeClass('zindex')
})
};
    
