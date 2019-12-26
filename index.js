// var makerjs = require('makerjs');
var fonts
var fontlist 
var counter
var language_array=[]
var multi_string
var default_font_index
var default_font = 'roboto'

var variants
var hasreg
var hasmed
var haslig
// var theme_counter = 0
window.onload = function () {
var a_counter = 0
    getGoogleFonts('AIzaSyCxzLzCFosJX6B9rOiy3xBu0J2TAlRBzXg');
    fontlist = document.getElementsByClassName('fontlist')

    function getGoogleFonts(apiKey){
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + apiKey, true);
        xhr.onloadend = function () {
            fonts = JSON.parse(xhr.responseText);
            objectarray(JSON.parse(xhr.responseText).items, fonts)
        };
        xhr.send();
    };
    function objectarray(FontsInUseArray, fonts){
        for (var i =  0; i < FontsInUseArray.length; i++) {
            var FontsInUseObject = document.createElement("div");
            FontsInUseObject.innerHTML += FontsInUseArray[i].family
            if(FontsInUseArray[i].family == 'Roboto'){
                default_font_index = i
                console.log(default_font_index)
                console.log(fonts)
                render(i, 'regular')
            }            
            FontsInUseObject.setAttribute("id",'index_'+i)
            FontsInUseObject.setAttribute("class",'fontlist')
            document.getElementById("objectlist_wrapper").appendChild(FontsInUseObject);
            for (var j = FontsInUseArray[i].subsets.length - 1; j >= 0; j--) {
                if (language_array.indexOf(FontsInUseArray[i].subsets[j]) === -1){
                    if (FontsInUseArray[i].subsets[j] === 'latin' || FontsInUseArray[i].subsets[j] === 'latin-ext'){
                    }else{
                        language_array.push(FontsInUseArray[i].subsets[j]);
                    }
                } 
            }
            if(i == FontsInUseArray.length-1){
                $('.fontlist').click(function(){
                    render($(this).attr('id').split('_')[1],selected_variant)
                    $('#select_fonts').html(fonts.items[$(this).attr('id').split('_')[1]].family)
                    var defaultlink = 'https://fonts.google.com/specimen/'
                    $('#googlefont').attr("href", defaultlink.concat(fonts.items[$(this).attr('id').split('_')[1]].family.replace(/ /g, `+`)))
                })
            }
        }
    } 

        var selected_theme = 'none'
        var selected_color = 'salmon'
        var selected_variant = 'regular'
        var selected_ratio = '100-191'
        var selected_content = 'Shining'
        var selected_content_type = 'word'
        var selected_imagesize = '600'
        var selected_lineheight = '1.2'

    function render(fontIndex, variant){
        var family = fonts.items[fontIndex].family
        var category = fonts.items[fontIndex].category
        variants = fonts.items[fontIndex].variants

        var variant_array =[]
                haslig = false
                hasmed = false
                hasreg = false
        console.log(variants)
        for (var i = variants.length - 1; i >= 0; i--) {
            if(variants[i] == '300'){
                haslig = true
                variant_array.push('300')
            }else if(variants[i] == 'light'){
                haslig = true
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
                hasmed = true
                variant_array.push('500')
            }else if(variants[i] == 'medium'){
                console.log('sdf')
                hasmed = true
                variant_array.push('medium')
            }else{
                console.log(hasmed)
            }
            if(i == 0){
                variants = variant_array.join(',')
                change_table(family,category)
            }
        }
        var var_index
        var url
        load_font(url,family,category)
    }
    function change_table(family,category){
        $('td.x_3').html('Regular')
        $('td.x_2').html(family)
        console.log(hasmed)
        if(category === 'display' || category === 'handwriting') {
            $('.y_7 .x_2').html(default_font)
            $('.y_8 .x_2').html(default_font)
            $('.y_9 .x_2').html(default_font)
            $('.y_10 .x_2').html(default_font)
            $('.y_11 .x_2').html(default_font)
            $('.y_12 .x_2').html(default_font)
            $('.y_13 .x_2').html(default_font)
            $('.y_8 .x_3').html('Medium')
            $('.y_11 .x_3').html('Medium')
        }
        if(hasmed){
            $('.y_6 .x_3').html('Medium')
            $('.y_8 .x_3').html('Medium')
            $('.y_11 .x_3').html('Medium')
        }
        if(haslig){
            $('.y_1 .x_3').html('Light')
            $('.y_2 .x_3').html('Light')
        }
    }
    function save_image(){
                html2canvas($("#sketch_wrapper"), {
                    onrendered: function(canvas) {
                        theCanvas = canvas;
                        $("#img-out").append(canvas);
                        // Canvas2Image.saveAsPNG(canvas); 
                        // $("#img-out").empty();
                        setTimeout(function(){ $("#img-out").append(canvas); }, 3000);
                    }
                });
    }

    function load_font(url,family,category){
        var apiUrl = [];
        apiUrl.push(
            family.replace(/ /g, '+')
            +':'+variants + '&display=swap'
        );
        for (var i = selected_variant.length - 1; i >= 0; i--) {
            selected_variant[i]
        }
        var joined = apiUrl.join('|')
        var url = 'https://fonts.googleapis.com/css?family=' + joined
        var fontlink = document.createElement('link'); 
        fontlink.href = url;
        fontlink.rel = "stylesheet"; 
        head = document.head || document.getElementsByTagName('head')[0],
        head.appendChild(fontlink);

        var style = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(style);
        if(category === 'display' || category === 'handwriting') {
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
    }
    function hasClass( target, className ) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }
    select_sketch()
    function select_sketch(){
        $('#select_sketch_1').click(function(){
             $('.select_sketch').removeClass('selected')
             $(this).addClass('selected')
             $('.sketch').removeClass('selected')
             $('#sketch_1').addClass('selected')
        })
        $('#select_sketch_2').click(function(){
             $('.select_sketch').removeClass('selected')
             $(this).addClass('selected')
             $('.sketch').removeClass('selected')
             $('#sketch_2').addClass('selected')
        })
        $('#select_sketch_3').click(function(){
             $('.select_sketch').removeClass('selected')
             $(this).addClass('selected')
             $('.sketch').removeClass('selected')
             $('#sketch_3').addClass('selected')
        })
    }
fullload()
function fullload(){
    if($('#sketch_3').length > 0){
        grouping()
    }else{
        setTimeout(function(){fullload()}, 500);
    }
}
    function grouping(){
        $('#sketch_wrapper .h1').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .h1').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .h2').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .h2').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .h3').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .h3').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .h4').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .h4').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .h5').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .h5').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .h6').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .h6').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })

        $('#sketch_wrapper .subtitle1').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .subtitle1').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .subtitle2').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .subtitle2').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })

        $('#sketch_wrapper .body1').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .body1').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .body2').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .body2').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .button').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .button').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .caption').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .caption').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') })
        $('#sketch_wrapper .overline').hover(function(){ 
            $(this).addClass('hovered')
            $('.table .overline').parent().addClass('hovered') }, function(){ $('.hovered').removeClass('hovered') 
            })

        $('.table tr').hover(function(){ 
            console.log($(this).find('.x_1').attr('class').split(' ')[1])
            var hoveredelement = $(this).find('.x_1').attr('class').split(' ')[1]
                $(this).addClass('hovered')
                document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].classList.add("hovered");
            },function(){
                $(this).removeClass('hovered') 
                $('.hovered').removeClass('hovered')
            })
        $('.table tr').click(function(){ 
            var hoveredelement = $(this).find('.x_1').attr('class').split(' ')[1]
            $('.selected').removeClass('selected')
            $('#select_sketch_'+document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].closest('.sketch').getAttribute('id').split('_')[1]).addClass('selected')
            $('.sketch').removeClass('selected')
            document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].closest('.sketch').classList.add('selected')
            document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].closest('.sketch').scrollTo(0,document.getElementById('sketch_wrapper').getElementsByClassName(hoveredelement)[0].offsetTop - 30)
        })
    }
};
    


