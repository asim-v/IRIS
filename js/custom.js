var select_item = '';
var select_price = '+0';
var price = 0;

var item_list = [];

var rectboxX = 130,
    rectboxY = 352,
    rectboxWidth = 215,
    rectboxHeight = 337;

function updatePrice(price_change) {
  var regExp = /(\=|\+|\-)(\d+)/;
  var result, result_sign, result_no, price;

  currentPrice = parseInt(document.getElementById("price").innerHTML);
  

  /* Use Regular Expression to decide input
     undefined = no change
     '=50' = equal 50 baht
     '+50' = add 50 baht
     '-50' = decrease 50 baht
  */
  // console.log(regExp.exec(price_change));
  if ((result = regExp.exec(price_change)) != null) {
      if (result.index === regExp.lastIndex) {
          regExp.lastIndex++;
      }
      result_sign = result[1];
      result_no = parseInt(result[2]);
  }
  


  if (result_sign === '='){
    price = result_no;
  }
  if (result_sign === '+'){
    price = currentPrice + result_no;
  }
  if (result_sign === '-'){
    price = currentPrice - result_no;
  }
  
  // console.log(price)
  /* Update Price */
  $('#price').html(price);
}

$(document).ready(function() {
  updatePrice();
  
  $('#boxEdit').show();
  $('#boxEditText, #boxEditImage').hide();
  
  $('.ui.accordion')
    .accordion()
  ;

  $('.ui.dropdown')
    .dropdown()
  ;
  
  $('#libraryButton').on('click', function() {
    select_item = '';
    $('.library.modal')
      .modal('show')
    ;
  });
  
  $('.library').find('.item').on('click', function() {
    $('.item').removeClass('active');
    select_item = $(this).find('img').attr('src');
    select_price = $(this).attr('data-price');
    $(this).addClass('active');
  });
  
  $('#libAddButton').on('click', function() {
    if(select_item === '') return;
    var imgObj = new Image();
    imgObj.src = select_item;
    imgObj.onload = function () {
        // start fabricJS stuff

        var image = new fabric.Image(imgObj);
        image.scale(0.8).set({
            right: 0,
            left: -10,
            top: -10,
            angle: 0,
            // width:620,
            // height:500,
            borderColor: '#03fcb1',
            cornerColor: '#03fcb1',
            cornerStyle:'circle',
            cornerSize:10,            
        });
        //image.scale(getRandomNum(0.1, 0.25)).setCoords();
      
        image.on('selected', function() {
          var obJ = canvas.getActiveObject();

          $('#boxEdit, #boxEditText').hide();
          $('#boxEditImage').show();
        });
      
        image.itemPrice = select_price;
      
        item_list.push(image);
        canvas.setActiveObject(image).add(image);

        // end fabricJS stuff
      
        updatePrice("+"+String(select_price));
    }
  });
  
  var canvas = this.__canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;

  var radius = 300;

  fabric.Image.fromURL('', function(img) {
    img.set({
      left: 0,
      top: 0,
      selectable: false,
      hasControls: false,
      hasBorders: false
    });
    canvas.add(img).setActiveObject(img);
    
    
    // Create Clip Area (Object created after this will be clipped)
/*    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(rectboxX, rectboxY,rectboxWidth, rectboxHeight);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
    ctx.stroke();
    ctx.clip();*/
    // END Clip Area
  });
  $('#saveConfig').on('click', function() {



    var in1 = $('#in1').val();
    var in2 = $('#in2').val();
    var in3 = $('#in3').val();
    var in4 = $('#in4').val();
    var in5 = $('#in5').val();
    var in6 = $('#in6').val();
    var in7 = $('#in7').val();
    
    if(in1.trim() === '' || in2.trim() === '' || in3.trim() === '' || in4.trim() === '' || in5.trim() === '' || in6.trim() === '' || in7.trim() === '' ) {
      alert('Favor de llenar los campos');
      return;
    }

    $("#saveButton").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardando ...');
    setTimeout(() => {  

      // Update Edit Text
      $('#in1').val( in1);
      $('#in2').val( in2);
      $('#in3').val( in3);
      $('#in4').val( in4);
      $('#in5').val( in5);
      $('#in6').val( in6);
      $('#in7').val( in7);
      $("#saveButton").html('Guardado!');

    }, 100);  
  });

  $('#addTextButton').on('click', function() {
    var inText = $('#inputText').val();
    
    if(inText.trim() === '') {
      alert('Favor de llenar los campos');
      return;
    }
    
    var inFont = $('#inputFont').val();
    var inSize = 25;
    var inColor = $('#inputColor').val();
    
    var newText = new fabric.Text(inText, {
            fontFamily: inFont,
            right: 10,
            left: 0,
            top: 0,
            angle: 0,
            // width:620,
            // height:500,
            borderColor: '#03fcb1',
            cornerColor: '#03fcb1',
            cornerStyle:'circle',
            cornerSize:10,   
    });
    
    newText.on('selected', function() {
      var obJ = canvas.getActiveObject();
      
      // Update Edit Text
      $('#editText').val( obJ.text );
      $('#uiEditFont').dropdown( 'set selected', obJ.fontFamily );
      $('#uiEditFont').dropdown( 'set value', obJ.fontFamily );
      $('#uiEditColor').dropdown( 'set selected', obJ.fill );
      $('#uiEditColor').dropdown( 'set value', obJ.fill );
      
      $('#boxEdit, #boxEditImage').hide();
      $('#boxEditText').show();
    });
    
    canvas.setActiveObject(newText).add(newText);
    
    item_list.push(newText);
  });
  
  $('#updateTextButton').on('click', function() {
    var inText = $('#editText').val();
    
    if(inText.trim() === '') {
      $('.trashButton').trigger('click');
      return;
    }
    
    var inFont = $('#editFont').val();
    var inSize = 25;
    var inColor = $('#editColor').val();
    
    var TexttoEdit = canvas.getActiveObject();
    TexttoEdit.setText(inText)
    .setFontFamily(inFont)
    .setFontSize(inSize)
    .setFill(inColor);
    
    canvas.renderAll();
  });
  
  document.getElementById('imgLoader').onchange = function handleImage(e) {
    
    // Check for available file
    if ($('#imgLoader').val().length < 1) {
      // No file Uploaded
      console.log('No file uploaded');
      return false;
    }
    
    // Check file extensions
    var fileExt = $('#imgLoader').val().split('.').pop().toLowerCase();
    if($.inArray(fileExt, ['png','jpg','jpeg']) == -1) {
        alert('No puedes subir este archivo. Favor de subir solamente .png, .jpg, o imagenes jpeg.');
        $('#file').val("");
        return false;
    }
    
    var reader = new FileReader();
    reader.onload = function (event) {
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            // start fabricJS stuff
            
            var image = new fabric.Image(imgObj);
            image.set({
              right: 0,
              left: -10,
              top: -10,
              angle: 0,
              // width:620,
              // height:500,
              borderColor: '#03fcb1',
              cornerColor: '#03fcb1',
              cornerStyle:'circle',
              cornerSize:10,   

            });
          
            image.on('selected', function() {
              var obJ = canvas.getActiveObject();

              $('#boxEdit, #boxEditText').hide();
              $('#boxEditImage').show();
            });
          
            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.setActiveObject(image).add(image);
          
            item_list.push(image);
            
            // end fabricJS stuff
        }
        
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  // Escucha si apreita el elimina
  window.addEventListener("keydown", () => {

    if([46,8].includes(event.keyCode)){

      var obJ = canvas.getActiveObject();
      updatePrice("-"+String(obJ.itemPrice))
      updatePrice(+Math.abs(obJ.itemPrice))

      // Remove from item_list
      var obJindex = item_list.indexOf(obJ);
      if (obJindex > -1) {
          item_list.splice(obJindex, 1);
      }
    
      // Remove from canvas
      obJ.remove();
      clearSelection();
    }
  });
  $('.trashButton').on('click', function() {
    $('#modalDelete').modal('setting', {
      onDeny    : function(){
      },
      onApprove : function() {
        var obJ = canvas.getActiveObject();
        
        updatePrice("-"+String(obJ.itemPrice))
        updatePrice(+Math.abs(obJ.itemPrice))

        // Remove from item_list
        var obJindex = item_list.indexOf(obJ);
        if (obJindex > -1) {
            item_list.splice(obJindex, 1);
        }
      
        // Remove from canvas
        obJ.remove();
        clearSelection();
      }
    }).modal('show');
    
    return false;
  });
  
  $('#resetButton').on('click', function() {
    var iLength = item_list.length;
    for (var i = 0; i < iLength; i++) {
        canvas.remove(item_list[i]);
    }
    item_list = [];
  });
  
  canvas.on('selection:cleared', function() {
    clearSelection();
  });
  
  function clearSelection() {
    $('#boxEditImage, #boxEditText').hide();
    $('#boxEdit').show();
  }
  
  $('#getdata-button').on('click', function() {
    alert( JSON.stringify(item_list) );
    for (i = 0; i < item_list.length; i++) { 
      var one_item = item_list[i];
      console.log(one_item, one_item.getLeft(), one_item.getTop());
    }

  });
  


});