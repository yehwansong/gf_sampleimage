$('document').ready(function(){
var table_array = [['Scale Category', 'Typeface', 'Font', 'Size', 'Case', 'Letter spacing'],
                ['H1', 'Roboto', 'Light', '96', 'Sentence', '-1.5'],
                ['H2', 'Roboto', 'Light', '60', 'Sentence', '0.5'],
                ['H3', 'Roboto', 'Regular', '48', 'Sentence', '0'],
                ['H4', 'Roboto', 'Regular', '34', 'Sentence', '0.25'],
                ['H5', 'Roboto', 'Regular', '24', 'Sentence', '0'],
                ['H6', 'Roboto', 'Medium', '20', 'Sentence', '0.15'],
                ['Subtitle1', 'Roboto', 'Regular', '16', 'Sentence', '0.15'],
                ['Subtitle2', 'Roboto', 'Medium', '14', 'Sentence', '0.1'],
                ['Body1', 'Roboto', 'Regular', '16', 'Sentence', '0.5'],
                ['Body2', 'Roboto', 'Regular', '14', 'Sentence', '0.25'],
                ['Button', 'Roboto', 'Medium', '14', 'All caps', '1.25'],
                ['Caption', 'Roboto', 'Regular', '12', 'Sentence', '0.4'],
                ['overline', 'Roboto', 'Regular', '10', 'All caps', '1.5']]
	insert_sketch_1()
	insert_sketch_2()
	insert_sketch_3()
	insert_table()
	function insert_table(){
        $('#table_wrapper').append('\
            <table class="table">\
              <tr class="y_0">\
                <th class="x_1">'+table_array[0][0]+'</th>\
                <th class="x_2">'+table_array[0][1]+'</th>\
                <th class="x_3">'+table_array[0][2]+'</th>\
                <th class="x_4">'+table_array[0][3]+'</th>\
                <th class="x_5">'+table_array[0][4]+'</th>\
                <th class="x_6">'+table_array[0][5]+'</th>\
              </tr>\
              <tr class="y_1">\
                <td class="x_1 h1">'+table_array[1][0]+'</td>\
                <td class="x_2">'+table_array[1][1]+'</td>\
                <td class="x_3">'+table_array[1][2]+'</td>\
                <td class="x_4">'+table_array[1][3]+'</td>\
                <td class="x_5">'+table_array[1][4]+'</td>\
                <td class="x_6">'+table_array[1][5]+'</td>\
              </tr>\
              <tr class="y_2">\
                <td class="x_1 h2">'+table_array[2][0]+'</td>\
                <td class="x_2">'+table_array[2][1]+'</td>\
                <td class="x_3">'+table_array[2][2]+'</td>\
                <td class="x_4">'+table_array[2][3]+'</td>\
                <td class="x_5">'+table_array[2][4]+'</td>\
                <td class="x_6">'+table_array[2][5]+'</td>\
              </tr>\
              <tr class="y_3">\
                <td class="x_1 h3">'+table_array[3][0]+'</td>\
                <td class="x_2">'+table_array[3][1]+'</td>\
                <td class="x_3">'+table_array[3][2]+'</td>\
                <td class="x_4">'+table_array[3][3]+'</td>\
                <td class="x_5">'+table_array[3][4]+'</td>\
                <td class="x_6">'+table_array[3][5]+'</td>\
              </tr>\
              <tr class="y_4">\
                <td class="x_1 h4">'+table_array[4][0]+'</td>\
                <td class="x_2">'+table_array[4][1]+'</td>\
                <td class="x_3">'+table_array[4][2]+'</td>\
                <td class="x_4">'+table_array[4][3]+'</td>\
                <td class="x_5">'+table_array[4][4]+'</td>\
                <td class="x_6">'+table_array[4][5]+'</td>\
              </tr>\
              <tr class="y_5">\
                <td class="x_1 h5">'+table_array[5][0]+'</td>\
                <td class="x_2">'+table_array[5][1]+'</td>\
                <td class="x_3">'+table_array[5][2]+'</td>\
                <td class="x_4">'+table_array[5][3]+'</td>\
                <td class="x_5">'+table_array[5][4]+'</td>\
                <td class="x_6">'+table_array[5][5]+'</td>\
              </tr>\
              <tr class="y_6">\
                <td class="x_1 h6">'+table_array[6][0]+'</td>\
                <td class="x_2">'+table_array[6][1]+'</td>\
                <td class="x_3">'+table_array[6][2]+'</td>\
                <td class="x_4">'+table_array[6][3]+'</td>\
                <td class="x_5">'+table_array[6][4]+'</td>\
                <td class="x_6">'+table_array[6][5]+'</td>\
              </tr>\
              <tr class="y_7">\
                <td class="x_1 subtitle1">'+table_array[7][0]+'</td>\
                <td class="x_2">'+table_array[7][1]+'</td>\
                <td class="x_3">'+table_array[7][2]+'</td>\
                <td class="x_4">'+table_array[7][3]+'</td>\
                <td class="x_5">'+table_array[7][4]+'</td>\
                <td class="x_6">'+table_array[7][5]+'</td>\
              </tr>\
              <tr class="y_8">\
                <td class="x_1 subtitle2">'+table_array[8][0]+'</td>\
                <td class="x_2">'+table_array[8][1]+'</td>\
                <td class="x_3">'+table_array[8][2]+'</td>\
                <td class="x_4">'+table_array[8][3]+'</td>\
                <td class="x_5">'+table_array[8][4]+'</td>\
                <td class="x_6">'+table_array[8][5]+'</td>\
              </tr>\
              <tr class="y_9">\
                <td class="x_1 body1">'+table_array[9][0]+'</td>\
                <td class="x_2">'+table_array[9][1]+'</td>\
                <td class="x_3">'+table_array[9][2]+'</td>\
                <td class="x_4">'+table_array[9][3]+'</td>\
                <td class="x_5">'+table_array[9][4]+'</td>\
                <td class="x_6">'+table_array[9][5]+'</td>\
              </tr>\
              <tr class="y_10">\
                <td class="x_1 body2">'+table_array[10][0]+'</td>\
                <td class="x_2">'+table_array[10][1]+'</td>\
                <td class="x_3">'+table_array[10][2]+'</td>\
                <td class="x_4">'+table_array[10][3]+'</td>\
                <td class="x_5">'+table_array[10][4]+'</td>\
                <td class="x_6">'+table_array[10][5]+'</td>\
              </tr>\
              <tr class="y_11">\
                <td class="x_1 button">'+table_array[11][0]+'</td>\
                <td class="x_2">'+table_array[11][1]+'</td>\
                <td class="x_3">'+table_array[11][2]+'</td>\
                <td class="x_4">'+table_array[11][3]+'</td>\
                <td class="x_5">'+table_array[11][4]+'</td>\
                <td class="x_6">'+table_array[11][5]+'</td>\
              </tr>\
              <tr class="y_12">\
                <td class="x_1 caption">'+table_array[12][0]+'</td>\
                <td class="x_2">'+table_array[12][1]+'</td>\
                <td class="x_3">'+table_array[12][2]+'</td>\
                <td class="x_4">'+table_array[12][3]+'</td>\
                <td class="x_5">'+table_array[12][4]+'</td>\
                <td class="x_6">'+table_array[12][5]+'</td>\
              </tr>\
              <tr class="y_13">\
                <td class="x_1 overline">'+table_array[13][0]+'</td>\
                <td class="x_2">'+table_array[13][1]+'</td>\
                <td class="x_3">'+table_array[13][2]+'</td>\
                <td class="x_4">'+table_array[13][3]+'</td>\
                <td class="x_5">'+table_array[13][4]+'</td>\
                <td class="x_6">'+table_array[13][5]+'</td>\
              </tr>\
            </table>')
	}
	function insert_sketch_1(){
		$('#sketch_frame').append('\
			    <div id="sketch_1" class="sketch">\
			    	<div class="img img_1"></div>\
			    	<div class="overline" contenteditable="true">News</div>\
			    	<div class="h2" contenteditable="true">New Spring Styles</div>\
			    	<div class="body1" contenteditable="true">Our company takes pride in making handmade apperal. We only use sustainable materials.</div>\
			    	<div class="h4" contenteditable="true">15 Different Colors</div>\
			    	<div class="body1" contenteditable="true">Our shoes are available in 15 colors. For an extra charge, we will custom dye your shoes with a exact color that you want. You just need to send us a color sample of the color you like</div>\
			    	<div class="img img_2"></div>\
			    	<div class="caption" contenteditable="true">Photograph by Yehwan Song</div>\
			    	<div class="body1" contenteditable="true">Our shoes are available in 15 colors. For an extra charge, we will custom dye your shoes with a exact color that you want. You just need to send us a color sample of the color you like</div>\
			    </div>\
			')
	}


	function insert_sketch_2(){
		$('#sketch_frame').append('\
			    <div id="sketch_2" class="sketch">\
			    	<div class="img img_1"></div>\
			    	<div class="overline" contenteditable="true"><div id="icon"></div>LMBRJK</div>\
            <div class="h6" contenteditable="true">$400</div>\
			    	<div class="h5" contenteditable="true">Flow Shirt Blouse</div>\
			    	<div class="body2" contenteditable="true">Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.e</div>\
			    	<div class="button dropdown_button" contenteditable="true">MORE DETAILS</div>\
			    	<div class="divider"></div>\
			    	<div class="subtitle1" contenteditable="true">Select size</div>\
			    	<div class="roll_button"><div>00</div><div>02</div><div>04</div><div>06</div><div>08</div><div>10</div><div>12</div></div>\
			    	<div class="divider"></div>\
			    	<div class="subtitle1" contenteditable="true">Color</div>\
			    	<div class="color_button"><div></div><div></div><div></div></div>\
			    	<div class="button button_2" contenteditable="true">ADD TO CART</div>\
			    	<div class="divider"></div>\
			    	<div class="h5" contenteditable="true">Youll also like</div>\
			    	<div class="img_wrapper">\
			    		<div><div class="img"></div><div class="subtitle2" contenteditable="true">Army Long Tunic</div></div>\
			    		<div><div class="img"></div><div class="subtitle2" contenteditable="true">White buttoned</div></div>\
			    	</div>\
			    </div>\
			')
	}


	function insert_sketch_3(){
		$('#sketch_frame').append(`\
				<div id="sketch_3" class="sketch">\
			        <div class="img img_1"></div>\
			        <div class="overline" contenteditable="true">health</div>\
			    	  <div class="h3" contenteditable="true">The Future of Gasoline</div>\
			        <div class="body2 body2_top" contenteditable="true">Green energy may already be affecting...</div>\
			        <div class="divider"></div>\

			        <div class="overline" contenteditable="true">politics</div>\
			        <div class="img imgside imgside_1"></div>\
			        <div class="h6" contenteditable="true">Modern Dinng Rituals For Singles</div>\
			        <div class="body2" contenteditable="true">From the chef’s table to restraurants for singles, modern cuisine gets creative</div>\
			        <div class="divider"></div>\

			        <div class="overline" contenteditable="true">World</div>\
			        <div class="img imgside imgside_2"></div>\
			        <div class="h6" contenteditable="true">The Quiet, Yet Powerful Healthcare Revolution</div>\
			        <div class="body2" contenteditable="true">How doctors and nurses have made surgery safer and faster </div>\
			        <div class="divider last_divider"></div>\

			        <div class="button" contenteditable="true">readmore</div>\

			        <div class="img img_2"></div>\
			        <div class="wrapper">\
			            <div>\
			                <div contenteditable="true" class="body2">DJIA</div>\
			                <div contenteditable="true" class="body2">17,030.28</div>\
			            </div>\
			            <div>\
			                <div contenteditable="true" class="body2">SP</div>\
			                <div contenteditable="true" class="body2">17,030.28</div>\
			            </div>\
			            <div>\
			                <div contenteditable="true" class="body2">DJIA</div>\
			                <div contenteditable="true" class="body2">17,030.28</div>\
			            </div>\
			        </div>\
			    </div>\
			`)
	}
  add_selected()
  function add_selected(){
      if($('.sketch').length > 2){
          var ran = Math.floor(Math.random() * 3) + 1
          $('#select_sketch_'+ran ).addClass('selected')
          $('#sketch_'+ran ).addClass('selected')
          console.log('#sketch_'+ Math.floor(Math.random() * 3) + 1)
      }else{
          setTimeout(function(){add_selected()}, 500);
      }
  }
})