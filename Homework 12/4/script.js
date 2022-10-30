for (let li of document.querySelectorAll('li')){
  alert(`${li.firstChild.data} ${li.getElementsByTagName('li').length}`);
}