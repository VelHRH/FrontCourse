let table = document.body.children[0];
table.style.borderCollapse=`collapse`;
for (let row=0; row<table.rows.length; row++){
  for (let cell=0; cell<table.rows[row].cells.length; cell++){
    table.rows[row].cells[cell].innerText=`${row+1}:${cell+1}`;
    if (row==cell) table.rows[row].cells[cell].style.backgroundColor=`red`;
  }
}