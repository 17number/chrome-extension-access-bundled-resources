'use strict';
const imagePath = 'resources/kikokushijo_girl.png';

const imageUrl = chrome.extension.getURL(imagePath);
const imgWithUrl = `<img src="${imageUrl}" style="width: 200px; height: auto; background-color: lightgray;">`;
document.querySelector("input").insertAdjacentHTML("afterEnd", imgWithUrl);

const imgWithPath = `<img src="${imagePath}" style="width: 200px; height: auto; background-color: pink;">`;
document.querySelector("input").insertAdjacentHTML("afterEnd", imgWithPath);
