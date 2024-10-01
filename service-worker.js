// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'selection') {
        console.log('Received selected text:', message.text);
        // 在这里处理选中的内容，例如保存到本地存储或发送到服务器
    }
});

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" triggered`);
    console.log(command);
});

// chrome.runtime.onInstalled.addListener((details) => {
//     if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
//       checkCommandShortcuts();
//     }
//   });
  
//   // Only use this function during the initial install phase. After
//   // installation the user may have intentionally unassigned commands.
//   function checkCommandShortcuts() {
//     chrome.commands.getAll((commands) => {
//       let missingShortcuts = [];
  
//       for (let {name, shortcut} of commands) {
//         if (shortcut === '') {
//           missingShortcuts.push(name);
//         }
//       }
  
//       if (missingShortcuts.length > 0) {
//         // Update the extension UI to inform the user that one or more
//         // commands are currently unassigned.
//       }
//     });
//   }
