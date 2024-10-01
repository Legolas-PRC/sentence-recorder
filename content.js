document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      console.log('Selected text:', selectedText);
      // 可以在这里处理选中的内容，例如发送到后台脚本
      chrome.runtime.sendMessage({type: 'selection', text: selectedText});
      alert(selectedText);
    }
  });