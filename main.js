// Much of this code was taken from this blog post:
  // https://simpleisbetterthancomplex.com/tutorial/2016/08/29/how-to-work-with-ajax-request-with-django.html
  



// Show Notification
	// This code is in charge of setting up Notifications
	// You must have bootstrap-notify.js for $.notify to work - 
	//      Website: https://github.com/mouse0270/bootstrap-growl
function showNotification(from, align, message){
        type = ['','info','success','warning','danger','rose','primary'];

        color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: "notifications",
            message: message

        },{
            type: type[color],
            timer: 500,
            placement: {
                from: from,
                align: align
            }
        });
    }



// This Code Checks If Username already taken
$("#id_username").on('change keydown paste input', function(){
  var form = $(this).closest("form");
  console.log( $(this).val() );
  $.ajax({
  	// In your template you must add the data-validate-username-url attribute
  		// to your form with the value of the url connected to your "validate_username" view
  		// EX: data-validate-username-url="{% url 'dashboard:validate_username' %}"
    url: form.attr("data-validate-username-url"),
    data: form.serialize(),
    dataType: 'json',
    success: function (data) {
      if (data.is_taken) {
        showNotification('top','right', data.error_message);
      }
    }
  });
});