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
  CameraTag.observe('MyFirstCamera', 'uploadStarted', function() {
    console.log('UPLOAD STARTED!');
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

  $('#my_upload_button').on('click', function() {
    // console.log($(this).parent().find('input').first());
    $(this).parent().find('input').first().click();
  });
});