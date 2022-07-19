alert("Did you like the page so far? Don't forget to give us a feedback.") //gives an alert messgae while opening the page


function Formvalidate(){
    var F=document.forms["FeedbackForm"]["firstname"].value; //brings the repective values entered by the user
    var L=document.forms["FeedbackForm"]["lastname"].value;
    var G=document.forms["FeedbackForm"]["gender"].value;
    var C=document.forms["FeedbackForm"]["check"].value
    var M=document.forms["FeedbackForm"]["suggestion"].value;

    if(F =="" || L =="" || M == "" ){     //if the values of F, L and M are submitted empty
        alert("PLease fill the form Correctly."); //this message pops up
    }
    else{                                                    //if they are not empty
        alert("Form submitted. Thank you for your time.");   //this messgae pops up
    }
}