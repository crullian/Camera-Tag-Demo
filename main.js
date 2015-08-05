$(document).ready(function() {
  CameraTag.observe('MyFirstCamera', 'initialized', function(){
    myCamera = CameraTag.cameras['MyFirstCamera'];
    console.log(myCamera);
    myCamera.setLength(60);
  });

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