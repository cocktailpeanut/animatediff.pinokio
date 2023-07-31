const os = require('os')
const fs = require('fs')
const path = require("path")
const exists = (filepath) => {
  return new Promise(r=>fs.access(filepath, fs.constants.F_OK, e => r(!e)))
}
module.exports = {
  title: "AnimateDiff",
  description: "Install AnimateDiff Automatic1111 Extension and the models with one click",
  icon: "icon.jpeg",
  menu: [{
    html: '<i class="fa-solid fa-plug"></i> Install',
    href: "install.json?run=true&fullscreen=true"
  }, {
    html: '<i class="fa-solid fa-cloud-arrow-down"></i> Download models',
    href: "download.html?raw=true",
    target: "_blank",
    features: "browser"
  }]
}
