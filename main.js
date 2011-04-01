function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = Base64.encode(tok);
  return "Basic " + hash;
}


function fill_instances(){
  $('#dapi-instances').empty()
  url =  base_url + '/instances.json';
  auth = make_base_auth(username,password);
  console.log("Querying url: " + url);  
  $.ajax({
    type: "GET",
    url: url,
    beforeSend: function(req) {
        req.setRequestHeader('Authorization', auth);
    },
    success: function(data) {
      console.log("Success! " );
      $('#dapi-instances').empty();

      var to_iterate

      if($.isArray(data.instances.instance)){
        to_iterate = data.instances.instance;
      } else {
        to_iterate = data.instances;      
      }

      $.each(to_iterate, function(key,instance){
        $("#dapi-instances").append($("#template-instance").tmpl(instance));
      });

     $('.dapi-instance').page();
    },

    error: function(request, status, error) {
      console.log("Error status " + status);
      console.log("Error request status text: " + request.statusText);
      console.log("Error request status: " + request.status);
      console.log("Error request response text: " + request.responseText);
      console.log("Error response header: " + request.getAllResponseHeaders());
    }
  })
}

