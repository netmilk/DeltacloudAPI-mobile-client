var  api = new Deltacloud(base_url, username, password);

function fill_instances(){
  show_loader();
  $('#dapi-instances').empty()
  instances = api.instances()
  //TODO error handling
  $.each(instances, function(key,instance){
    $("#dapi-instances").append($("#template-instance").tmpl(instance));
  });
  $(".dapi-instance").page();
  hide_loader();
}

function fill_images(){
  $('#dapi-images').empty();
  images = api.images()
  //TODO error handling
  $.each(images, function(key,image){
    $("#dapi-images").append($("#template-image").tmpl(image));
  });
  $(".dapi-image").page();
}

function show_loader(){
  $(".ajax-loader").show();
}

function hide_loader(){
  $(".ajax-loader").hide();
}

$(document).ready(function(){
 $("#instances").bind('pageshow', function(){
  fill_instances()
 })

 $("#images").bind('pageshow', function(){
  fill_images()
 })
})

