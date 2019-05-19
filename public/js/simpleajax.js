var xhr = createRequest();

function getData(dataSource, divID, aName, aPwd) {
  if (xhr) {
    var obj = document.getElementById(divID);
    var requestbody = "name=" + encodeURIComponent(aName) + "&pwd=" + encodeURIComponent(aPwd);


    xhr.onreadystatechange = function() {
		alert(xhr.readyState);
      if (xhr.readyState == 4 && xhr.status == 200) {
        obj.innerHTML = xhr.responseText;
      } //
    } // end anonymous call-back function

    xhr.open("POST", dataSource, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(requestbody);
  } // end if
} // end function getData()