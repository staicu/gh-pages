// JavaScript source code
// JavaScript source code

// create function today() that returns the current date
//in the format mm-dd-yyyy


       $(function () {
           $("#accordion").accordion();
       });



$(function () {
    var clock = $('#clock');
    //0-9
    var digit_to_name = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    //week
    var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var digits = {};

    //secound
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

    //create secound and minute

    var digit_holder = clock.find('.digits');

    $.each(positions, function () {

        if (this == ':') {
            digit_holder.append('<div class="dots">');
        }
        else {

            var pos = $('<div>');

            for (var i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digit_holder.append(pos);
        }

    });


    // run clock
    (function update_time() {

        //call moment.js fomat time
        var now = moment().format("HHmmss");
        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);
        var date = moment().format("YYYY/MM/DD");
        var week = weekday[moment().format('d')];
        $(".date").html(date + ' ' + week);
        // each time
        setTimeout(update_time, 1000);

    })();
});


function js_yyyy_mm_dd_hh_mm_ss() {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function startForm() {
    document.ContactUs.field4.focus();
}// end function startForm()
var current_sign = "contact-us-off";
//create function
function changeSign() {
    if (current_sign == "contact-us-off") {
        document.getElementById("sign").src = "images/contact-us-on.jpg";
        current_sign = "contact-us-on";
        document.getElementById("sign1").src = "images/contact-us-off.jpg";

    }//end if loop
    else {
        document.getElementById("sign").src = "images/contact-us-off.jpg";
        current_sign = "contact-us-off";
        document.getElementById("sign1").src = "images/contact-us-on.jpg";
    }

} //end function changeSign
//create time function
function time() {
    document.getElementById("time").innerHTML = js_yyyy_mm_dd_hh_mm_ss();
}
//create the validateForm() function
function validateForm() {
    if (document.ContactUs.field4.selectedIndex == 0) {
        window.alert("You must Choose an Option!");
        return false;
    }
    else if (document.ContactUs.firstName.value == 0) {
        window.alert("You must Enter a First Name!");
        return false;
    }
    else if (document.ContactUs.lastName.value == 0) {
        window.alert("You must Enter a Last Name!");
        return false;
    }
    else if (document.ContactUs.emailAddress.value == 0) {
        window.alert("You must Enter an Email Address!");
        return false;
    }
    else return true;
}//end  function validateForm()