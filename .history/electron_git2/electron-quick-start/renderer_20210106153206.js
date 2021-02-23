// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.getElementById('btn1').onclick = () => {
    console.log(process)
    console.log(process.memoryUsage())
}
const electron = require('electron')
document.getElementById('test_file').addEventListener('drop', (e) => {
  debugger
    e.preventDefault();
    e.stopPropagation();
    for (const f of e.dataTransfer.files) {
      console.log('File(s) you dragged here: ', f.path)
    }
  });
document.getElementById('test_file').addEventListener('dragover', (e) => {
e.preventDefault();
e.stopPropagation();
});