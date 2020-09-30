var firebaseConfig = {
    apiKey: "AIzaSyChtuGMP3KzZBP0DhAjOprGfn5CNurRyn4",
    authDomain: "iplresults-9ef77.firebaseapp.com",
    databaseURL: "https://iplresults-9ef77.firebaseio.com",
    projectId: "iplresults-9ef77",
    storageBucket: "iplresults-9ef77.appspot.com",
    messagingSenderId: "533733582731",
    appId: "1:533733582731:web:c5c9f9d7e2f46c3767318e"
  };
  firebase.initializeApp(firebaseConfig);


document.getElementById('datavalue').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var year =getInputVal('year');
    readResults(year);
}
    function getInputVal(id){
    return document.getElementById(id).value;
}

function readResults(year){
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
     var ranks = data.val(); 
     document.getElementById("result1").innerHTML ="<br > 1. " +ranks[1];
     document.getElementById("result2").innerHTML ="<br > 2. " +ranks[2];
     document.getElementById("result3").innerHTML ="<br > 3. " +ranks[3];
     document.getElementById("result4").innerHTML ="<br > 4. " +ranks[4];
     document.getElementById("result5").innerHTML ="<br > 5. " +ranks[5];
     document.getElementById("result6").innerHTML ="<br > 6. " +ranks[6];
     document.getElementById("result7").innerHTML ="<br > 7. " +ranks[7];
     document.getElementById("result8").innerHTML ="<br > 8. " +ranks[8];
})
}