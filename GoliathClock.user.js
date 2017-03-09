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
