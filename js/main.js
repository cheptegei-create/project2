$(document).ready(function() {
    $("#myBirthDate").mask("99/99/9999");
});

function getAkanName() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    /*Upon submition the application to execute the following command*/
    /*The application should use the above data to calculate the Akan Name of the user*/
    if (myBirthday === "") {
        document.getElementById('message').innerHTML = "Invalid date of birth entry";
    }
    /*When the birthday form is filled and the gender selected, the application should execute the following command*/
    else {
        for (var i = 0; i < myGender.length; i++) {
            if (myGender[i].checked) {
                if (myGender[i].value === "Male") {
                    document.getElementById('message').innerHTML = "<span> Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                } else {
                    document.getElementById('message').innerHTML = "<span> Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                }
                break;
            }
            /*If gender is not selected the application to execute the following command*/
            else {
                document.getElementById('message').innerHTML = "You Should Select a Gender Too Determine Your Akan Name!";
            }
        }
    }
}

function clearAkanMessage() {
    document.getElementById('message').innerHTML = "";
}