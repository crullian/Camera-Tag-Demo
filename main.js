$(document).ready(function() {

  //var videoLength;
  var myVideo;

  CameraTag.observe('MyFirstCamera', 'initialized', function() {
   myCamera = CameraTag.cameras['MyFirstCamera'];
   console.log(myCamera);
   // myCamera.connect();
   // myCamera.setLength(60);
  });

  CameraTag.observe('MyFirstCamera', 'serverConnected', function() {
    alert('SERVER CONNECTED');
  });

  CameraTag.observe('MyFirstCamera', 'uploadFileSelected()', function() {
    console.log('UPLOAD FILE SELECTED');
  });

  CameraTag.observe('MyFirstCamera', 'uploadStarted', function() {
    console.log('UPLOAD STARTED');
  });

  CameraTag.observe('MyFirstCamera', 'published', function() {
    myVideo = myCamera.getVideo();
    console.log('VIDEO ID IS: ', myVideo['uuid']);
    // myCamera.reset();
  });

  //$('#setLength').on('click', function() {
  //  videoLength = $('#vidLength').val();
  //  myCamera.setLength(videoLength);
  //  console.log('RECORDING TIME SET TO', videoLength, 'SECONDS');
  //  videoLength = '';
  //});

  $('#connect').on('click', function() {
    myCamera.connect();
  });

  //$('#record').on('click', function() {
  //  myCamera.record();
  //});

  //$('#stop').on('click', function() {
  //  myCamera.stopRecording();
  //});
  //
  //$('#play').on('click', function() {
  //  myCamera.play();
  //});

  //$('#pub').on('click', function() {
  //  myCamera.publish();
  //  alert('Ya PUBLISHED')
  //});
  $('.cameratag_upload').on('click', function() {
    alert('Choose wisely, we limit video length to TWO MINUTES')
  });

  $('.cancel').on('click', function() {
    myCamera.reset();
    console.log('CAMERA RESET');
  });

  //$('#my_upload_button').on('click', function() {
  //  $(this).parent().find('input').click();
  //});
});