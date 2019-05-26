

function search(term) {
  window.location.href='/search?q=' + term;
}

function clearsearch() {
  window.location.href='/listings';
}

function logon(user, pass) {
  window.location.href=`/logon?user=${user}&pass=${pass}`;
}
