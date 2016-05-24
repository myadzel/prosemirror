var ProseMirror = require("../dist/edit").ProseMirror
var fromDOM = require("../dist/htmlformat").fromDOM
var schema = require("../dist/model").defaultSchema
var autoInput = require("../dist/inputrules/autoinput").autoInput
var menuBar = require("../dist/menu/menubar").menuBar
var tooltipMenu = require("../dist/menu/tooltipmenu").tooltipMenu

var pm = window.pm = new ProseMirror({
  place: document.querySelector(".full"),
  doc: fromDOM(schema, document.querySelector("#content")),
  plugins: [menuBar.config({float: true}),
            tooltipMenu.config({selectedBlockMenu: true}),
            autoInput]
})

document.querySelector("#mark").addEventListener("mousedown", function(e) {
  pm.markRange(pm.selection.from, pm.selection.to, {className: "marked"})
  e.preventDefault()
})
