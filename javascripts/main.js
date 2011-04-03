

function fill_instances(cache){
  $('#dapi-instances').empty()

  if(cache == true){
    instances = api.cache.instances;
  } else {
    instances = api.instances();  
  }

  //TODO error handling
  $.each(instances, function(key,instance){
    $("#dapi-instances").append($("#template-instance").tmpl(instance));
  });
  $(".dapi-instance").page();
}

function fill_realms(cache){
  $('#dapi-realms').empty()

  if(cache == true){
    realms = api.cache.realms;
  } else {
    realms = api.realms();  
  }

  //TODO error handling
  $.each(realms, function(key,realm){
    $("#dapi-realms").append($("#template-realm").tmpl(realm));
  });
  $(".dapi-realm").page();
}

function fill_images(cache){
  $('#dapi-images').empty();

  if(cache == true){
    images = api.cache.images;
  } else  {
    images = api.images();  
  }
  //TODO error handling
  $.each(images, function(key,image){
    $("#dapi-images").append($("#template-image").tmpl(image));
  });
  $(".dapi-image").page();
}

function fill_hardware_profiles(cache){
  $('#dapi-hardware_profiles').empty()

  if(cache == true){
    hardware_profiles = api.cache.hardware_profiles;
  } else {
    hardware_profiles = api.hardware_profiles();  
  }

  //TODO error handling
  $.each(hardware_profiles, function(key,hardware_profile){
    $("#dapi-hardware_profiles").append($("#template-hardware_profile").tmpl(hardware_profile));
  });
  $(".dapi-hardware_profile").page();
}

function show_loader(){
  $(".ajax-loader").show();
}

function hide_loader(){
  $(".ajax-loader").hide();
}

function connect(){
   //show_loader();
   api = new Deltacloud(base_url, username, password);
   api.fill_cache();
   //hide_loader();                                                                                     

}

var api = undefined

$(document).ready(function(){
 $("#instances").bind('pageshow', function(){
  fill_instances(true);
 })

 $("#images").bind('pageshow', function(){
  fill_images(true);
 })

 $("#realms").bind('pageshow', function(){
  fill_realms(true);
 })

 $("#hardware_profiles").bind('pageshow', function(){
  fill_hardware_profiles(true);
 })

 $("#main-menu").bind('pageshow', function(){
   if(typeof(api) == "undefined" ){
     connect();
   }
 })

})

