$(document).ready(function() {

  var videoLength;

  // CameraTag.observe('MyFirstCamera', 'initialized', function() {
  //   myCamera = CameraTag.cameras['MyFirstCamera'];
  //   console.log(myCamera);
  //   // myCamera.connect();
  //   // myCamera.setLength(60);
  // });

  CameraTag.observe('MyFirstCamera', 'uploadStarted', function() {
    console.log(myCamera.uploader);
  });

  CameraTag.observe('MySecondCamera', 'initialized', function() {
    myCamera2 = CameraTag.cameras['MySecondCamera'];
    console.log(myCamera2);
  });

  CameraTag.observe('MyFirstCamera', 'published', function() {
    console.log('YOU PUBLISHED SON!');
    // myCamera.reset();
  })

  $('#setLength').on('click', function() {
    videoLength = $('#vidLength').val();
    myCamera.setLength(videoLength);
    console.log('RECORDING TIME SET TO', videoLength, 'SECONDS');
    $('#vidLength').val('');
  });
  // if ($('#vidLength').val() == '') {
  //   $('#record').prop("disabled",true);
  //   console.log('NO VID LENGTH');
  // } else {
  //   $('#record').prop("disabled",false);
  // }

  $('#connect').on('click', function() {
    myCamera.connect();
  });

  $('#record').on('click', function() {
    myCamera.record();
  });

  $('#stop').on('click', function() {
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
    $(this).parent().find('input').click();
  });
});