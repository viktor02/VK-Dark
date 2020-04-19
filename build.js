const fs = require('fs');
const package = require('./package.json');

let fileContent = fs.readFileSync("./less/tampermonkey_plugin.css", "utf8");

let meta = `// ==UserScript==
// @name         VK Dark
// @namespace    http://tampermonkey.net/
// @version      ${package.version}
// @description  ${package.description}
// @author       ${package.author}
// @downloadURL  ${package.downloadURL}
// @updateURL    ${package.updateURL}
// @supportURL   ${package.supportURL}
// @homepage     ${package.homepage}
// @include      http://vk.com/*
// @include      https://vk.com/*
// @include      https://vkpay.io/*
// @include      https://new.broadcast.vkforms.ru/*
// @include      https://poll.vip243.vkforms.ru/*
// @include      https://donate.vip243.vkforms.ru/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==`;

const script = `
const css = \`${fileContent}\`;
GM_addStyle(css);
`;

fs.writeFileSync("./vkdark.user.js", meta+script);
fs.writeFileSync("./vkdark.meta.js", meta);
