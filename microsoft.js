var sampleJson = "";
function openFile(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        sampleJson = reader.result.replace(/(\\r\\n|\\n|\\r)/gm, "");
        sampleJson = JSON.parse(sampleJson);
        document.getElementById('request').innerHTML = JSON.stringify(sampleJson, null, 2);
    };
    reader.readAsText(input.files[0]);
};

function recognizeInk() {
  var SERVER_ADDRESS = "YOUR-SUBSCRIPTION-URL";
  var ENDPOINT_URL = SERVER_ADDRESS + "/inkrecognizer/v1.0-preview/recognize";
  // Replace the subscriptionKey string value with your valid subscription key.
  var SUBSCRIPTION_KEY = "YOUR-SUBSCRIPTION-KEY";
  var xhttp = new XMLHttpRequest();
  }