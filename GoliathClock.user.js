// ==UserScript==
// @name         Goliath Clock
// @version      0.1
// @description  Adds a server-based clock on goliath pages
// @author       _Rikardo_
// @match        https://goliath.hypixel.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==
setInterval(function()
{
var clientDate = new Date();
var serverDate = new Date(clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000) + (3600000*-5));
var hours = serverDate.getHours();
var minutes = serverDate.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0'+minutes : minutes;
$('.clock').remove();
$("<span class='clock' style='text-align: right; display: inline-block; padding-left: 15px'>"+hours + ':' + minutes + ' ' + ampm+"</span>").insertAfter(".text:first");
}, 1000);

var version = 0.1;
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        var updatedScriptVersion = request.responseText;
        if(version < updatedScriptVersion)
        {
            console.log("Update script");
            window.location.href = "https://github.com/Rikeardo/Goliath-Clock/raw/master/GoliathClock.user.js";
        }
    }
};
request.open('GET', 'https://raw.githubusercontent.com/Rikeardo/Goliath-Clock/master/ClockVersion.json', true);
request.send(null);
