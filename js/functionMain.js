$(document).ready(function() { 
					   					  
	$('#btn_activate').click(function () {

		// var clientAddress = $('#clientAddress').val();
    var full_name = $('#full_name').val();
    var email_id = $('#email_id').val();
		var contactno = $('#contactno').val();
		var productname = $('#productname').val();
		var pr_key1 = $('#pr_key1').val();
		var pr_key2 = $('#pr_key2').val();
		var pr_key3 = $('#pr_key3').val();
		var pr_key4 = $('#pr_key4').val();
        var pr_key5 = $('#pr_key5').val();


        if(full_name == ''){
            alert("Enter Full Name");
            return false;
           }

        if(email_id == ''){
            alert("Enter Email ID");
            return false;
           }

	    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  

		if(!document.getElementById('email_id').value.match(mailformat)){
		 	$('#email_id').focus();
	     	alert('Invalid Email id');
		  	return false; 
		  }

		if(contactno == ''){
            alert("Enter Contact No.");
            return false;
          }

	    if(productname == ''){
            alert("Enter Product Name");
            return false;
          }

		if(pr_key1 == ''){
            alert("Enter Key");
            return false;
          }

		var pinFormate = /([A-Za-z0-9])\w/g ;

		if(!document.getElementById('pr_key1').value.match(pinFormate)){
		  $('#pr_key1').focus();
	  		return false;
	      }

	  if(pr_key2 == ''){
          alert("Enter Key");
          return false;
          }

	  if(!document.getElementById('pr_key2').value.match(pinFormate)){
		  $('#pr_key2').focus();
		  return false;
		  }

	  if(pr_key3 == ''){
          alert("Enter Key");
          return false;
         }

	  if(!document.getElementById('pr_key3').value.match(pinFormate)){
	     $('#pr_key3').focus();
	     return false;
	   }

	  if(pr_key4 == ''){
          alert("Enter Key");
          return false;
         }

	if(!document.getElementById('pr_key4').value.match(pinFormate)){  
		$('#pr_key4').focus();
	    return false;
	    }

	  if(pr_key5 == ''){
        alert("Enter Key");
        return false;
        }

	if(!document.getElementById('pr_key5').value.match(pinFormate)){  
		$('#pr_key5').focus();
	    return false;
	   }

    var data = 'r=add_data' + '&full_name=' + escape(full_name) + '&email_id=' + escape(email_id) + '&contactno=' + escape(contactno) + '&productname=' + escape(productname) + '&pr_key1=' + escape(pr_key1) + '&pr_key2=' + escape(pr_key2) + '&pr_key3=' + escape(pr_key3) + '&pr_key4=' + escape(pr_key4) + '&pr_key5=' + escape(pr_key5);
          //  alert(data);

            $.ajax({
                url: baseUrl+"data.php",
                type: "POST",
                data: data,
                success: function (html) {
                  $('#full_name').val('');
                  $('#email_id').val('');
                  $('#contactno').val('');
                  $('#productname').val('');
                  $('#pr_key1').val('');
                  $('#pr_key2').val('');
                  $('#pr_key3').val('');
                  $('#pr_key4').val('');
                  $('#pr_key5').val('');
                  //alert(html);
          window.location.href=baseUrl+"signing.php";
          return false;
                }
            });
            return false;
        });

	 //Disable cut copy paste
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
   
    //Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });
 });



function movetoNext(current, nextFieldID) {

	if (current.value.length >= current.maxLength) {
		document.getElementById(nextFieldID).focus();
	}
}

function isNumberKey(evt){

         var charCode = (evt.which) ? evt.which : event.keyCode

         if (charCode > 31 && (charCode < 48 || charCode > 57))

            return false;

         return true;

      }

		  

function onlyNumbers(evt){

    var e = event || evt; // For trans-browser compatibility

    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;

    return true;

}



function blockSpecialChar(e){

        var k;

        document.all ? k = e.keyCode : k = e.which;

        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9 || k == 11 || k == 32 || (k >= 48 && k <= 57));

 }