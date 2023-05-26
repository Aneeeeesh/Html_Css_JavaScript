// const hello = (name) => {alert(`Hello, ${name}!`);}
// hello("Aneesh");

function ask(question, yes, no) {
    if (confirm(question)) yes()            //the confirm function shows the dialog box with ok and cancel
    else no();                              //here, yes() function is showOk() and no() is showCancel()
  }                                         //confirm(question) returns true if ok is pressed
  
function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);