
var etat = {
  "inbox": [
    {
      "from": "AF22111212232211122",
      "date": "2015 12 28 20:15:42",
      "msg": "Un court message ...." },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31",
      "msg": "Un autre message ...." },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31",
      "msg": "Un autre message ...." },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31",
      "msg": "Un autre message ...." }
    ],
  "outbox": [
    {
      "to": "AF22111212232211122",
      "date": "2016 01 12 20:15:42",
      "msg": "Bla bla bla ...." } ],
  "yp": {
    "AF22111212232211122": {"name": "Jean Fanchon"},
    "90221F212A4200001AA": {"name": "Bob"} }
};

function onButtonComposerClick(){
  //alert("Composer");

  var content = "<table>\n";
  content    += " <tr>\n";
  content    += "   <td> To: </td>\n";
  content    += "     <td>\n";
  content    += "       <select id='select-compose'>\n";

  for(var obj in etat.yp) {
     content += "          <option value=" + obj.toString() + ">" + obj.toString() + "</option>\n";
  }
  content    += "       </select>\n";
  content    += "     </td>\n";
  content    += "  </tr>\n";
  content    += "  <tr>\n";
  content    += "    <td> Message: </td>\n"
  content    += "    <td>\n";
  content    += "      <textarea id='textarea-compose' cols='40' rows='5'>messag...</textarea>\n";
  content    += "    </td>\n";
  content    += "  </tr>\n";
  content    += "  <tr>\n";
  content    += "    <td></td>\n";
  content    += "    <td>\n";
  content    += "      <button type='button' onclick='onButtonSendClick()'>Send</button>\n";
  content    += "    </td>\n";
  content    += "  </tr>\n";
  content    += "</table>\n";

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content;
}

function onButtonInboxClick(){
  //alert("Inbox");

  var content = "<table>\n";
  content    += " <thead>\n";
  content    += "   <tr>\n";
  content    += "     <td>From</td><td>Date</td>\n";
  content    += "   </tr>\n";
  content    += " </thead>\n";
  content    += " <tbody>\n";

  for(var i = 0;i < etat.inbox.length;i++){
    content += "    <tr>\n";
    content += "      <td><a href='#'>" + etat.inbox[i].from + "</a></td><td>" + etat.inbox[i].date + "</td>\n";
    content += "    </tr>\n";
  }
  content    += " </tbody>\n";
  content    += "</table>\n";

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content;
}

function onButtonOutboxClick(){
  //alert("outbox");

  var content = "<table>\n";
  content    += " <thead>\n";
  content    += "   <tr>\n";
  content    += "     <td>To</td><td>Date</td>\n";
  content    += "   </tr>\n";
  content    += " </thead>\n";
  content    += " <tbody>\n";

  for(var i = 0;i < etat.outbox.length;i++){
    content += "    <tr>\n";
    content += "      <td><a href='#'>" + etat.outbox[i].to + "</a></td><td>" + etat.outbox[i].date + "</td>\n";
    content += "    </tr>\n";
  }
  content    += " </tbody>\n";
  content    += "</table>\n";

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content;
}

function onButtonYpClick() {
  //alert("Yp");

  var content = "<table>\n";
  content    += " <thead>\n";
  content    += "   <tr>\n";
  content    += "     <td>To</td><td>Date</td>\n";
  content    += "   </tr>\n";
  content    += " </thead>\n";
  content    += " <tbody>\n";

  for(var obj in etat.yp) {
    content += "    <tr>\n";
    content += "      <td><a href='#'>" + obj.toString() + "</a></td><td>" + etat.yp[obj].name + "</td>";
    content += "    </tr>\n";
  }
  content    += " </tbody>\n";
  content    += "</table>\n";

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content;
}

function onButtonSendClick() { 
	var selectText = getSelectedText('select-compose');
	var texteareaText = document.getElementById('textarea-compose').value
	var dateText = getCurrentDateTimeText();
	//"2016 01 03 10:15:31"
	alert(dateText);
}


// Outils
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}

function getCurrentDateTimeText(){
	var today = new Date();
	var yyyy = today.getFullYear();
	var mm = today.getMonth()+1;
	var dd = today.getDate();
	var hh = today.getHours();
	var MM = today.getMinutes();
	var ss = today.getSeconds();
	
	if(dd < 10) {
		dd = '0' + dd;
	}
	if(mm < 10) {
		mm = '0' + mm;
	} 
	if(hh < 10) {
		hh = '0' + hh;
	}
	if(MM < 10) {
		MM = '0' + MM;
	} 
	if(ss < 10) {
		ss = '0' + ss;
	} 
	return yyyy + " " +  mm + " " + dd + " " + hh + ":" + MM + ":" + ss;     
}
