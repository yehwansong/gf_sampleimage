$('document').ready(function(){
  // loads templates
$( "#sketch_1" ).load( "templates/reply.html .reply")
$( "#select_sketch_1" ).addClass('text')
$( "#sketch_1" ).addClass('text')
add_pf_1()

$( "#sketch_2" ).load( "templates/crane.html .crane")
$( "#select_sketch_2" ).addClass('utility')
$( "#sketch_2" ).addClass('utility')

$( "#sketch_3" ).load( "templates/fortnightly.html .fortnightly")
$( "#select_sketch_3" ).addClass('text display_1')
$( "#sketch_3" ).addClass('text display_1')
add_pf_3()

$( "#sketch_4" ).load( "templates/basil.html .basil")
$( "#select_sketch_4" ).addClass('display_1 display_2 display_3')
$( "#sketch_4" ).addClass('display_1 display_2 display_3')

$( "#sketch_5" ).load( "templates/owl.html .owl")
$( "#select_sketch_5" ).addClass('text display_1 display_2')
$( "#sketch_5" ).addClass('text display_1 display_2')
add_pf_5()

$( "#sketch_6" ).load( "templates/shrine.html .shrine")
$( "#select_sketch_6" ).addClass('utility')
$( "#sketch_6" ).addClass('utility')
add_pf_6()

var table_array = [
                ['Scale Category &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;', 'Typeface', 'Font', 'Size', 'Case', 'Letter spacing'],
                ['H1 <span class="headline">Headline</span>', 'Roboto', 'Light', '96', 'Sentence', '-1.5'],
                ['H2 <span class="headline">Headline</span>', 'Roboto', 'Light', '60', 'Sentence', '0.5'],
                ['H3 <span class="headline">Headline</span>', 'Roboto', 'Regular', '48', 'Sentence', '0'],
                ['H4 <span class="headline">Headline</span>', 'Roboto', 'Regular', '34', 'Sentence', '0.25'],
                ['H5 <span class="headline">Headline</span>', 'Roboto', 'Regular', '24', 'Sentence', '0'],
                ['H6 <span class="headline">Headline</span>', 'Roboto', 'Medium', '20', 'Sentence', '0.15'],
                ['Subtitle1', 'Roboto', 'Regular', '16', 'Sentence', '0.15'],
                ['Subtitle2', 'Roboto', 'Medium', '14', 'Sentence', '0.1'],
                ['Body1', 'Roboto', 'Regular', '16', 'Sentence', '0.5'],
                ['Body2', 'Roboto', 'Regular', '14', 'Sentence', '0.25'],
                ['Button', 'Roboto', 'Medium', '14', 'All caps', '1.25'],
                ['Caption', 'Roboto', 'Regular', '12', 'Sentence', '0.4'],
                ['overline', 'Roboto', 'Regular', '10', 'All caps', '1.5']]
	insert_table()
	function insert_table(){
        $('#table_wrapper').append('\
            <table class="table">\
              <tr class="y_1">\
                <td class="x_2">'+table_array[1][1]+'</td>\
                <td class="x_3">'+table_array[1][2]+'</td>\
                <td class="x_4">'+table_array[1][3]+'</td>\
                <td class="x_1 h1">'+table_array[1][0]+'</td>\
              </tr>\
              <tr class="y_2">\
                <td class="x_2">'+table_array[2][1]+'</td>\
                <td class="x_3">'+table_array[2][2]+'</td>\
                <td class="x_4">'+table_array[2][3]+'</td>\
                <td class="x_1 h2">'+table_array[2][0]+'</td>\
              </tr>\
              <tr class="y_3">\
                <td class="x_2">'+table_array[3][1]+'</td>\
                <td class="x_3">'+table_array[3][2]+'</td>\
                <td class="x_4">'+table_array[3][3]+'</td>\
                <td class="x_1 h3">'+table_array[3][0]+'</td>\
              </tr>\
              <tr class="y_4">\
                <td class="x_2">'+table_array[4][1]+'</td>\
                <td class="x_3">'+table_array[4][2]+'</td>\
                <td class="x_4">'+table_array[4][3]+'</td>\
                <td class="x_1 h4">'+table_array[4][0]+'</td>\
              </tr>\
              <tr class="y_5">\
                <td class="x_2">'+table_array[5][1]+'</td>\
                <td class="x_3">'+table_array[5][2]+'</td>\
                <td class="x_4">'+table_array[5][3]+'</td>\
                <td class="x_1 h5">'+table_array[5][0]+'</td>\
              </tr>\
              <tr class="y_6">\
                <td class="x_2">'+table_array[6][1]+'</td>\
                <td class="x_3">'+table_array[6][2]+'</td>\
                <td class="x_4">'+table_array[6][3]+'</td>\
                <td class="x_1 h6">'+table_array[6][0]+'</td>\
              </tr>\
              <tr class="y_7">\
                <td class="x_2">'+table_array[7][1]+'</td>\
                <td class="x_3">'+table_array[7][2]+'</td>\
                <td class="x_4">'+table_array[7][3]+'</td>\
                <td class="x_1 subtitle1">'+table_array[7][0]+'</td>\
              </tr>\
              <tr class="y_8">\
                <td class="x_2">'+table_array[8][1]+'</td>\
                <td class="x_3">'+table_array[8][2]+'</td>\
                <td class="x_4">'+table_array[8][3]+'</td>\
                <td class="x_1 subtitle2">'+table_array[8][0]+'</td>\
              </tr>\
              <tr class="y_9">\
                <td class="x_2">'+table_array[9][1]+'</td>\
                <td class="x_3">'+table_array[9][2]+'</td>\
                <td class="x_4">'+table_array[9][3]+'</td>\
                <td class="x_1 body1">'+table_array[9][0]+'</td>\
              </tr>\
              <tr class="y_10">\
                <td class="x_2">'+table_array[10][1]+'</td>\
                <td class="x_3">'+table_array[10][2]+'</td>\
                <td class="x_4">'+table_array[10][3]+'</td>\
                <td class="x_1 body2">'+table_array[10][0]+'</td>\
              </tr>\
              <tr class="y_11">\
                <td class="x_2">'+table_array[11][1]+'</td>\
                <td class="x_3">'+table_array[11][2]+'</td>\
                <td class="x_4">'+table_array[11][3]+'</td>\
                <td class="x_1 button">'+table_array[11][0]+'</td>\
              </tr>\
              <tr class="y_12">\
                <td class="x_2">'+table_array[12][1]+'</td>\
                <td class="x_3">'+table_array[12][2]+'</td>\
                <td class="x_4">'+table_array[12][3]+'</td>\
                <td class="x_1 caption">'+table_array[12][0]+'</td>\
              </tr>\
              <tr class="y_13">\
                <td class="x_2">'+table_array[13][1]+'</td>\
                <td class="x_3">'+table_array[13][2]+'</td>\
                <td class="x_4">'+table_array[13][3]+'</td>\
                <td class="x_1 overline">'+table_array[13][0]+'</td>\
              </tr>\
            </table>')
	}


  // init
  // add_selected()
  // function add_selected(){
  //     if($('.sketch').length > 5){
  //       console.log($('.sketch.selectable'))
  //         // var random = Math.floor(Math.random() * 6) + 1 ;
  //         // if($('#sketch_'+random).hasClass('selectable')){
  //         //   $('#sketch_'+random).addClass('selected')
  //         //   $('#select_sketch_'+random).addClass('selected')
  //         // }else{
  //         //   add_selected()
  //         // }
  //         // console.log($('.sketch.selectable').eq(random).attr('id').split('_')[1])
  //         // if(ran == 4){
  //         //    loading_loop()
  //         // }
  //     }else{
  //         setTimeout(function(){add_selected()}, 500);
  //     }
  // }
})