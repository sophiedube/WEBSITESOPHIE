function Validation() {
    var name = 
        document.forms["Comform"]["Name"];
    var mail = 
        document.forms["Comform"]["Mail"];
    var comment = 
        document.forms["Comform"]["Comment"];
   

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }


    if (mail.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        mail.focus();
        return false;
    }

    if (comment.value == "") {
        window.alert(
          "Please enter your message  .");
        phone.focus();
        return false;
    }
    if (submit === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }

    return true;
}