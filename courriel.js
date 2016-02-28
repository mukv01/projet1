/**
 * Projet 1: Interface web pour le courriel
 * @author Aline Landry, Ariella Sota, Arnaud Niyonkuru, Reagan Shuku, Vestine Mukeshimana
 */
 
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
		"msg": "Bla bla bla ...." } 
	],
	"yp": {
		"AF22111212232211122": {"name": "Jean Fanchon"},
		"90221F212A4200001AA": {"name": "Bob"} 
	}
};

/**
 * Fonction appelée quand le bouton compose est cliqué.
 * L'élément select, textarea et le bouton send sont affiché.
 */
function onButtonComposeClick(){
	var content = [];
	content.push("<form name='form-compose' action='#' method='post' onsubmit='return onButtonComposeSendSubmit()' >");
	content.push("	<table>");
	content.push(" 		<tr>");
	content.push("   		<td class='bold'> To: </td>");
	content.push("     		<td>");
	content.push("       		<select name='select-compose'>");

	for(var obj in etat.yp) {
		content.push("          		<option value=" + obj.toString() + ">" + obj.toString() + "</option>");
	}
	
	content.push("       		</select>");
	content.push("     		</td>");
	content.push("  	</tr>");
	content.push("  	<tr>");
	content.push("    		<td class='bold'> Message: </td>");
	content.push("    		<td>");
	content.push("      		<textarea name='textarea-compose' cols='40' rows='5'>Type your message here...</textarea>");
	content.push("    		</td>");
	content.push("  	</tr>");
	content.push("  	<tr>");
	content.push("    		<td></td>");
	content.push("    		<td>");
	content.push("      		<input class='blue-theme' type='submit' value='Send' />");
	content.push("    		</td>");
	content.push("  	</tr>");
	content.push("	</table>");
	content.push("</form>");

	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");

	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Compose new message";
}

/**
 * Fonction appelée quand le bouton inbox est cliqué.
 * La liste des courriels dans inbox est affichée.
 */
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

/**
 * Fonction appelée quand le bouton outbox est cliqué.
 * La liste des courriels dans outbox est affichée.
 */
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

/**
 * Fonction appelée quand le bouton yp est cliqué.
 * La liste des contacts dans yellow page est affichée.
 */
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
	content.push("     <td></td><td><button class='blue-theme' type='button' onclick='onButtonYpAddClick()'>Add</button></td><td></td>");
	content.push("    </tr>");
	content.push(" </tbody>");
	content.push("</table>");

	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");

	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Yp";
}

/**
 * Fonction appelée quand le bouton send est cliqué.
 * L'état outbox est mis à jour en y ajoutant le message envoyé.
 *
 * @return {Boolean} true si la validation est réussi sinon false
 */
function onButtonComposeSendSubmit() { 
	var selectText = document.forms['form-compose']['select-compose'].value;
	var texteareaText = document.forms['form-compose']['textarea-compose'].value.trim();
	var dateText = getCurrentDateTimeText();
	
	if(texteareaText === "") {
		alert("The message is empty");
        return false;
	}

	var objet = {
		"to": selectText,
		"date": dateText,
		"msg": texteareaText 
	};

	etat.outbox.push(objet);
	onButtonOutboxClick();
	return true;
}

/**
 * Fonction appelée pour afficher le message dans inbox.
 *
 * @param {String} from1 
 * @param {String} date
 * @param {String} msg
 */
function onLinkInboxMessageClick(from1,date,msg) {
	var content = [];
	content.push("<table>");
	content.push(" <tr>");
	content.push("   <td class='bold'>From:</td>");
	content.push("   <td>" + from1 + "</td>");
	content.push("	</tr>");
	content.push(" <tr>");
	content.push("   <td class='bold'>Date:</td>");
	content.push("   <td>" + date + "</td>");
	content.push("	</tr>");
	content.push(" <tr>");
	content.push("   <td class='bold'>Message:</td>");
	content.push("   <td>" + msg + "</td>");
	content.push("	</tr>");
	content.push("</table>");

	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");

	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Inbox message";
}

/**
 * Fonction appelée pour afficher le message dans outbox.
 *
 * @param {String} to 
 * @param {String} date
 * @param {String} msg
 */
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

/**
 * Fonction appelée pour modifier le nom d'un contact dans yp.
 *
 * @param {String} address 
 * @param {String} name
 */
function onLinkYpEditClick(address,name){
	var content = [];
	content.push("<form name='form-edit' action='#' method='post' onsubmit='return onButtonYpEditSaveSubmit()'>");
	content.push("	<table>");
	content.push("		<tr>");
	content.push("			<td class='bold'><label for='text-address'>Address:</label></td><td><input type='text' name='text-address' value='" + address + "' disabled /></td>");
	content.push("		</tr>");
	content.push("		<tr>");
	content.push("			<td class='bold'><label for='text-name'>Name:</label></td><td><input type='text' name='text-name' value='" + name + "' /></td>");
	content.push("		</tr>");
	content.push("		<tr>");
	content.push("			<td></td><td><input class='blue-theme' type='submit' value='Save' /></td>");
	content.push("		</tr>");
	content.push("	</table>");
	content.push("</form>");

	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");

	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Update Yp";
}

/**
 * Fonction appelée pour supprimer un contact dans yp.
 *
 * @param {String} address 
 */
function onLinkYpDeleteClick(address){
	var result = confirm("Do you really want to delete this record?");
	if (result === true) {
		delete etat.yp[address];
		onButtonYpClick();
	} 
}

/**
 * Fonction appelée pour ajouter un contact dans yp.
 */
function onButtonYpAddClick(){
	var content = [];
	content.push("<form name='form-add' action='#' method='post' onsubmit='return onButtonYpAddSaveSubmit()'>");
	content.push("	<table>");
	content.push("		<tr>");
	content.push("			<td class='bold'><label for='text-address'>Address:</label></td><td><input type='text' name='text-address' value='' /></td>");
	content.push("		</tr>");
	content.push("		<tr>");
	content.push("			<td class='bold'><label for='text-name'>Name:</label></td><td><input type='text' name='text-name' value='' /></td>");
	content.push("		</tr>");
	content.push("		<tr>");
	content.push("			<td></td><td><input class='blue-theme' type='submit' value='Add' /></td>");
	content.push("		</tr>");
	content.push("	</table>");
	content.push("</form>");
	
	var bottomRightRegion = document.getElementById('bottom-right-region');
	bottomRightRegion.innerHTML = content.join("\n");
	
	var topRightRegion = document.getElementById('top-right-region');
	topRightRegion.innerHTML = "Add to Yp";
}

/**
 * Fonction appelée pour sauvegarder les modification sur un contact dans yp.
 *
 * @return {Boolean} true si la validation est réussi sinon false
 */
function onButtonYpEditSaveSubmit(){
	var addressText = document.forms['form-edit']['text-address'].value.trim();
	var nameText = document.forms['form-edit']['text-name'].value.trim();
	
	
	if(nameText === "") {
		alert("The name is empty.");
		return false;
	}
	
	etat.yp[addressText] = {"name": nameText};
	onButtonYpClick();
	return true;
}

/**
 * Fonction appelée pour sauvegarder le nom et l'adresse du contact ajouté dans yp.
 *
 * @return {Boolean} true si la validation est réussi sinon false
 */
function onButtonYpAddSaveSubmit(){
	var addressText = document.forms['form-add']['text-address'].value.trim();
	var nameText = document.forms['form-add']['text-name'].value.trim();
	
	if(etat.yp[addressText]) {
		alert(addressText + " already exists.");
		return false;
	}
	else if(addressText === "") {
		alert("The address is empty.");
		return false;
	}
	else if(nameText === "") {
		alert("The name is empty.");
		return false;
	}
	else {
		etat.yp[addressText] = {"name": nameText};
		onButtonYpClick();
	}
	return true;
}

////////////////////////////////////////////////////// Outils /////////////////////////////////////////////////////
/**
 * Fonction pour arranger l'affichage de la date de cet instant.
 *
 * @return {String} la data bien arrangé selon le format "yyyy MM dd hh:mm:ss"
 */
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
