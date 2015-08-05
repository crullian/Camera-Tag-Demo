$(document).ready(function() {
  CameraTag.observe('MyFirstCamera', 'initialized', function() {
    myCamera = CameraTag.cameras['MyFirstCamera'];
    console.log(myCamera);
    // myCamera.setLength(60);
  });
  // CameraTag.observe('MySecondCamera', 'initialized', function(){
  //   myCamera2 = CameraTag.cameras['MySecondCamera'];
  //   console.log(myCamera2);
  // });
  CameraTag.observe('MyFirstCamera', 'uploadFileSelected', function(file) {
    console.log('FILE SELECTED: ', file);
  })

  $('#setLength').on('click', function() {
    myCamera.setLength($('#vidLength').val());
    $('#vidLength').val('');
  });
  // if ($('#vidLength').val() == '') {
  //   $('#record').prop("disabled",true);
  //   console.log('NO VID LENGTH');
  // } else {
  //   $('#record').prop("disabled",false);
  // }

  $('#record').on('click', function() {
    myCamera.record();
  });

  $('#stop-record').on('click', function() {
    myCamera.stopRecording();
  });

  $('#play').on('click', function() {
    myCamera.play();
  });

  $('#pub').on('click', function() {
    myCamera.publish();
  });

  $('#reset').on('click', function() {
    myCamera.reset();
  });

});