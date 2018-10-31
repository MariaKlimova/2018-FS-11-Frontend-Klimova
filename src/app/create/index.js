import FormInput from '../../lib/components/form/-input';
import MessageForm from '../../lib/components/message-form';
import mystyles from './shadow.css' /*'../../app/create/shadow.css';*/
import  '../../lib/components/form/-input';
import  '../../lib/components/message-form';
//import myextrastyles from '../../lib/components/form/-input/shadow.css';
window.document.body.innerHTML = `
<style>${mystyles.toString()}</style>
<div class = "message-form">
<message-form> </message-form>

	<label for = "file_input"> <img class = "pin-file-icon" src="../../public/icons/clip.png"/></label>
               <input type="file" formmethod="post" id="file_input" class="message-file"/>
</div>
`;

//window.onload = function() {

//}
