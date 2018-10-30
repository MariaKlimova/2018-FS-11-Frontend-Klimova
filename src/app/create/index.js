import FormInput from '../../lib/components/form/-input';
import MessageForm from '../../lib/components/message-form';
import mystyles from './shadow.css'

window.document.body.innerHTML = `
<style>${mystyles.toString()}</style>
<div class = "message-form">
<message-form> </messaage-form>

	<label for = "file_input"> <img class = "pin-file-icon" src="../../public/icons/clip.png"/></label>
               <input type="file" formmethod="post" id="file_input" class="message-file"/>
</div>
`;

window.onload = function() {

}
