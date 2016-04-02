$(document).ready(function(){
    var first = $(".menu li").first();
    var second = first.next();
    var third = second.next();

    first.on('click', function(){
        $(this).find(".sub-menu").toggle();
    });

   second.on('mouseenter', function(){
        console.log('asdasd');
        $(this).find(".sub-menu").show(1000);
    });

    second.on('mouseout', function(){
        $(this).find(".sub-menu").hide(2000);
    });

    third.on('mouseenter', function(){
        console.log(this);
        $(this).find(".sub-menu").show(1000);
    });
    third.on('mouseout', function(){
        console.log(this);
        $(this).find(".sub-menu").hide(2000);
    });

    $(".box.box12").on('mouseenter', function(){
        $(this).find(".title, .underline").hide();
    });
    $(".box.box12").on('mouseout', function(){
        $(this).find(".title, .underline").show();
    });
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        nextText:'&gt',
        prevText:'&lt',
        nextSelector:'.arrow.arrow-right',
        prevSelector:'.arrow.arrow-left',
        pager: false
    });

    var totalPrice = $('#totalPrice');
    var nameSelect=$('#nameSelect');
    var nameDisplay=$('#nameDisplay');
    var nameOption=$('#nameOption1');
    var nameSelect2=$('#nameSelect2');
    var nameDisplay2=$('#nameDisplay2');
    var nameOption2=$('#nameOption2');
    var nameSelect3=$('#nameSelect3');
    var nameDisplay3=$('#nameDisplay3');
    var nameOption3=$('#nameOption3');
    var transportCheck = $('.transport input');

    nameDisplay.text(nameSelect.find(':selected').text());
    nameOption.text(nameSelect.val());
    nameDisplay2.text(nameSelect2.find(':selected').text());
    nameOption2.text(nameSelect2.val());
    nameDisplay3.text(nameSelect3.find(':selected').text());
    nameOption3.text(nameSelect3.val());
    if (transportCheck.prop('checked')) {
      $('#transport').text('Transport');
      $('#transportDisplay').text('200');
    } else {
      $('#transport').text('');
      $('#transportDisplay').text('');
    }
    totalPrice.text(nameOption.text()*1+nameOption2.text()*1+nameOption3.text()*1+$('#transportDisplay').text()*1);

    nameSelect.on('change',function(){
            nameDisplay.text(nameSelect.find(':selected').text());
            nameOption.text(nameSelect.val());
            totalPrice.text(nameOption.text()*1+nameOption2.text()*1+nameOption3.text()*1+$('#transportDisplay').text()*1);
    });
    nameSelect2.on('change',function(){
        nameDisplay2.text(nameSelect2.find(':selected').text());
        nameOption2.text(nameSelect2.val());
        totalPrice.text(nameOption.text()*1+nameOption2.text()*1+nameOption3.text()*1+$('#transportDisplay').text()*1);
    });
    nameSelect3.on('change',function(){
        nameDisplay3.text(nameSelect3.find(':selected').text());
        nameOption3.text(nameSelect3.val());
        totalPrice.text(nameOption.text()*1+nameOption2.text()*1+nameOption3.text()*1+$('#transportDisplay').text()*1);
    });
    transportCheck.on('click', function(){
      if (transportCheck.prop('checked')) {
        $('#transport').text('Transport');
        $('#transportDisplay').text('200');
      } else {
        $('#transport').text('');
        $('#transportDisplay').text('');
      }
      totalPrice.text(nameOption.text()*1+nameOption2.text()*1+nameOption3.text()*1+$('#transportDisplay').text()*1);
    });


});
