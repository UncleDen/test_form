//CVV info
$(document).ready(function () {
    
    var cvv = $('#cvv-info');
    
    $('.question').on('click', function(e) { 
        e.stopPropagation();
        cvv.css("display", "block");
    });
    
    $('html').click(function() {
        if (cvv.css("display") == "block") {
           cvv.css("display", "none");      
        }
    });
});//end script

//Validation

 $(document).ready(function () {
     $('#name, #name2, #cardnum, #cvv, #zip, #sel-1, #sel-2').unbind().blur(function() {

         var val = $(this).val();
         var id = $(this).attr('id');
         var error = '.error-mess-' + id;
         
         if(val != "") {
             $(this).addClass('not_error');
             $(this).removeClass('error');
             $(this).removeClass('empty');
             $('form').find(error).removeClass('empty-tooltip');
         } else {
             $(this).addClass('error');
             $(this).removeClass('not_error');
             $('form').find(error).css("display", "block")
                                  .addClass('tooltip-err');
         }

     }); // end blur
//Remove error
     $('html').click(function () {
        $('form').find('.error').removeClass('error');
        $('form').find('.tooltip-err, .empty-tooltip').css("display", "none");
     });
//Show empty inputs
     function ShowError() {
         $('form').find('.empty').addClass('error');
         $('form').find('.empty-tooltip').css("display", "block");
     }
 //send    
     $('.button').click(function (){
         if($('.not_error').length == 7) {     
             location.reload()        
         } else {         
             ShowError();          
             return false;
         }
         
   }); // end submit

  }); // end script