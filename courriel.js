
var etat = {
  "inbox": [
    {
      "from": "AF22111212232211122",
      "date": "2015 12 28 20:15:42",
      "msg": "Un court message ...." },
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

function onButtonComposeClick(){
  var content = [];
  content.push("<table>");
  content.push(" <tr>");
  content.push("   <td> To: </td>");
  content.push("     <td>");
  content.push("       <select id='select-compose'>");

  for(var obj in etat.yp) {
     content.push("          <option value=" + obj.toString() + ">" + obj.toString() + "</option>");
  }
  content.push("       </select>");
  content.push("     </td>");
  content.push("  </tr>");
  content.push("  <tr>");
  content.push("    <td> Message: </td>");
  content.push("    <td>");
  content.push("      <textarea id='textarea-compose' cols='40' rows='5'>messag...</textarea>");
  content.push("    </td>");
  content.push("  </tr>");
  content.push("  <tr>");
  content.push("    <td></td>");
  content.push("    <td>");
  content.push("      <button type='button' onclick='onButtonComposeSendClick()'>Send</button>");
  content.push("    </td>");
  content.push("  </tr>");
  content.push("</table>");

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content.join("\n");
  
  var topRightRegion = document.getElementById('top-right-region');
  topRightRegion.innerHTML = "Compose new message";
}

function onButtonInboxClick(){
  var content = [];
  content.push("<table>");
  content.push(" <thead>");
  content.push("   <tr>");
  content.push("     <td>From</td><td>Date</td>");
  content.push("   </tr>");
  content.push(" </thead>");
  content.push(" <tbody>");

  for(var i = 0;i < etat.inbox.length;i++){
    content.push("    <tr>");
    content.push("      <td><a href='#' onclick='onLinkInboxMessageClick(\"" + etat.inbox[i].from + "\",\"" + etat.inbox[i].date + "\",\"" + etat.inbox[i].msg + "\")' >" + etat.inbox[i].from + "</a></td><td>" + etat.inbox[i].date + "</td>");
    content.push("    </tr>");
  }
  content.push(" </tbody>");
  content.push("</table>");

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content.join("\n");
  
  var topRightRegion = document.getElementById('top-right-region');
  topRightRegion.innerHTML = "Inbox";
}

function onButtonOutboxClick(){
  var content = [];
  content.push("<table>");
  content.push(" <thead>");
  content.push("   <tr>");
  content.push("     <td>To</td><td>Date</td>");
  content.push("   </tr>");
  content.push(" </thead>");
  content.push(" <tbody>");

  for(var i = 0;i < etat.outbox.length;i++){
    content.push("    <tr>");
	content.push("      <td><a href='#' onclick='onLinkOutboxMessageClick(\"" + etat.outbox[i].to + "\",\"" + etat.outbox[i].date + "\",\"" + etat.outbox[i].msg + "\")' >" + etat.outbox[i].to + "</a></td><td>" + etat.outbox[i].date + "</td>");
    content.push("    </tr>");
  }
  content.push(" </tbody>");
  content.push("</table>");

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content.join("\n");
  
  var topRightRegion = document.getElementById('top-right-region');
  topRightRegion.innerHTML = "Outbox";
}

function onButtonYpClick() {
  var content = [];
  content.push("<table>");
  content.push(" <thead>");
  content.push("   <tr>");
  content.push("     <td>Address</td><td>Name</td><td>Actions</td>");
  content.push("   </tr>");
  content.push(" </thead>");
  content.push(" <tbody>");

  for(var obj in etat.yp) {
    content.push("    <tr>");
    content.push("      <td>" + obj.toString() + "</td><td>" + etat.yp[obj].name + "</td><td><a href='#' onclick='onLinkYpEditClick(\"" + obj.toString() + "\",\"" + etat.yp[obj].name + "\")'>Edit</a>|<a href='#' onclick='onLinkYpDeleteClick(\"" + obj.toString() + "\")'>Delete</a></td>");
    content.push("    </tr>");
  }
  content.push("    <tr>");
  content.push("     <td></td><td><button type='button' onclick='onButtonYpAddClick()'>Add</button></td><td></td>");
  content.push("    </tr>");
  content.push(" </tbody>");
  content.push("</table>");

  var bottomRightRegion = document.getElementById('bottom-right-region');
  bottomRightRegion.innerHTML = content.join("\n");
  
  var topRightRegion = document.getElementById('top-right-region');
  topRightRegion.innerHTML = "Yp";
}

function onButtonComposeSendClick() { 
	var selectText = getSelectedText('select-compose');
	var texteareaText = document.getElementById('textarea-compose').value;
	var dateText = getCurrentDateTimeText();
	
	var objet = {
      "to": selectText,
      "date": dateText,
      "msg": texteareaText };
	  
	etat.outbox.push(objet);
	onButtonOutboxClick();
}

function onLinkInboxMessageClick(from1,date,msg) {
	var content = [];
	content.push("<table>");
	content.push(" <tr>");
	content.push("   <td>From:</td>");
	content.push("   <td>" + from1 + "</td>");
	content.push("	</tr>");
	content.push(" <tr>");
	content.push("   <td>Date:</td>");
	content.push("   <td>" + date + "</td>");
	content.push("	</tr>");
	content.push(" <tr>");
	content.push("   <td>Message:</td>");
	content.push("   <td>" + msg + "</td>");
	content.push("	</tr>");
	content.push("</table>");

	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");
	
	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Inbox message";
}

function onLinkOutboxMessageClick(to,date,msg) {
	var content = [];
	content.push("<table>");
	content.push(" <tr>");
	content.push("   <td>To:</td>");
	content.push("   <td>" + to + "</td>");
	content.push("	</tr>");
	content.push(" <tr>");
	content.push("   <td>Date:</td>");
	content.push("   <td>" + date + "</td>");
	content.push("	</tr>");
	content.push(" <tr>");
	content.push("   <td>Message:</td>");
	content.push("   <td>" + msg + "</td>");
	content.push("	</tr>");
	content.push("</table>");

	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");
	
	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Outbox message";
}

function onLinkYpEditClick(address,name){
	var content = [];
	content.push("<table>");
	content.push("	<tr>");
	content.push("		<td class='title'><label for='address'>Address:</label></td><td><input type='text' name='address' id='text-address' value='" + address + "' disabled /></td>");
	content.push("	</tr>");
	content.push("	<tr>");
	content.push("		<td class='title'><label for='name'>Name:</label></td><td><input type='text' name='name' id='text-name' value='" + name + "' /></td>");
	content.push("	</tr>");
	content.push("	<tr>");
	content.push("		<td></td><td><button type='button' onclick='onButtonYpEditSaveClick()'>Save</button></td>");
	content.push("	</tr>");
	content.push("</table>");
	
	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");
	
	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Update Yp";
}

function onLinkYpDeleteClick(address){
	delete etat.yp[address];
	
	onButtonYpClick();
}

function onButtonYpAddClick(){
	var content = [];
	content.push("<table>");
	content.push("	<tr>");
	content.push("		<td><label for='address'>Address</label></td><td><input type='text' name='address' id='text-address' value='' /></td>");
	content.push("	</tr>");
	content.push("	<tr>");
	content.push("		<td><label for='name'>Name</label></td><td><input type='text' name='name' id='text-name' value='' /></td>");
	content.push("	</tr>");
	content.push("	<tr>");
	content.push("		<td></td><td><button type='button' onclick='onButtonYpAddSaveClick()'>Add</button></td>");
	content.push("	</tr>");
	content.push("</table>");
	
	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");
	
	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Add to Yp";
}

function onButtonYpEditSaveClick(){
	var addressText = document.getElementById('text-address').value
	var nameText = document.getElementById('text-name').value;
	
	etat.yp[addressText] = {"name": nameText};
	onButtonYpClick();
}

function onButtonYpAddSaveClick(){
	var addressText = document.getElementById('text-address').value
	var nameText = document.getElementById('text-name').value;
		  
	etat.yp[addressText] = {"name": nameText};
	onButtonYpClick();
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
	//"2016 01 03 10:15:31"
	return yyyy + " " +  mm + " " + dd + " " + hh + ":" + MM + ":" + ss;     
}
