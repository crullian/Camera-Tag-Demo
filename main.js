$(document).ready(function() {

  //var videoLength;
  var myVideo;
  var myCamera;
  var videoElement = $("<video id='MyPlayer' data-uuid='myVideo['uuid']'></video>");

  var reScan = function() {
    CameraTag.setup();
  };

  CameraTag.observe('MyFirstCamera', 'initialized', function() {
    myCamera = CameraTag.cameras['MyFirstCamera'];
    console.log(myCamera);
    // myCamera.connect();
    // myCamera.setLength(60);
  });

  CameraTag.observe('MyFirstCamera', 'uploadFileSelected', function(file) {
    console.log('UPLOAD FILE SELECTED', file); // never hit this wtf?
  });

  CameraTag.observe("MyFirstCamera", "uploadProgress", function(file) {
    console.log('UPLOAD PROGRESS', file);
  });

  CameraTag.observe('MyFirstCamera', 'uploadStarted', function() {
    console.log('UPLOAD STARTED');
  });

  CameraTag.observe('MyFirstCamera', 'published', function() {
    myVideo = myCamera.getVideo();
    console.log('VIDEO ID: ', myVideo['uuid']);
    // myCamera.reset();
  });

  CameraTag.observe('MyFirstCamera', 'processed', function() {
    console.log('PROCESSED: ', myVideo['uuid']);
    $('#camera_section').children('#camera').remove();
    $('#MyPlayer').attr('data-uuid', myVideo['uuid']);
    reScan();
  });

  //CameraTag.observe('MyFirstCamera','waitingForCameraActivity', function() {
  //  alert('waiting for camera access');
  //});

  CameraTag.observe('MyFirstCamera', 'detectingCamera', function() {
    //alert('DETECTING CAMERA');
    $('#MyFirstCamera-camera-detection-screen').append('<h1>Waiting for video signal</h1>');
  });

  CameraTag.observe('MyFirstCamera', 'readyToRecord', function() {
    //alert('WE ARE READY TO RECORD');
    $('#MyFirstCamera-camera-detection-screen').children('h1').remove();
  });

  //CameraTag.observe('MyFirstCamera','serverConnected', function() {
  //  alert('SERVER IS CONNECTED');
  //});  // not this


  //$('#setLength').on('click', function() {
  //  videoLength = $('#vidLength').val();
  //  myCamera.setLength(videoLength);
  //  console.log('RECORDING TIME SET TO', videoLength, 'SECONDS');
  //  videoLength = '';
  //});

  $('#connect').on('click', function() {
    myCamera.connect();
    myCamera.showRecorder();
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
  });

  //$('#my_upload_button').on('click', function() {
  //  $(this).parent().find('input').click();
  //});
});