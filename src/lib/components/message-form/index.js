//import styles from './index.css';
import shadowStyles from './shadow.css';

const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<form-input name="message_text" placeholder="Введите сообщеине" slot="message-input">
		</form-input>
	</form>
`;

class MessageForm extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	static get observedAttributes() {
		return [
			"action",
			"method"
		]
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this._elements.form[attrName] = newVal;
	}

	_initElements () {
		const form = this.shadowRoot.querySelector('form');
		const message = this.shadowRoot.querySelector('.result');
		const sendFile = document.body.querySelector('#file_input');
                this._elements = {
			form,
                        message, 
			sendFile
		};
	}

	_addHandlers () {
		this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
		this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
		this._elements.sendFile.addEventListener('change', this._onAddFile.bind(this));
	}
       
        _onAddFile(event) {
        const file = document.querySelector('#file_input').files[0];
            if (file.type.startsWith('image')) {
                const messageList = document.querySelector('.message-list')
                alert(image)
            }
        this._newOutgoingMessage('"'+file.name+ '"\n '+file.type + '\n' + file.size + "B");
        }

	_onSubmit (event) {

         var messageList = document.body.querySelector('.message-list');
         //messageList.scrollTop = messageList.scrollHeight;
         
         const text = Array.from(this._elements.form.elements).map(
          el => el.value,
         ).join(', ');
         
         if (text != '') {
             const newMessage = document.createElement('div');
             newMessage.className = 'result';

             if ((text.startsWith('#')) && (text != '#')) {
                 newMessage.style.color = 'green';
                 newMessage.style.alignSelf = 'flex-start';
                 newMessage.style.textAlign = 'left';
                 newMessage.innerText = text.substring(1);

                 messageList.appendChild(newMessage);
             }
             else {
                 newMessage.innerText = text;       
                 messageList.appendChild(newMessage);
             }     
         }
         //const newMessage = document.createElement('div');
         //newMessage.className = 'result';
         //newMessage.innerText = Array.from(this._elements.form.elements).map(
         // el => el.value,
         //).join(', ');
         
         //messageList.appendChild(newMessage);
	//	event.preventDefault();
	return false;
	}

	_onKeyPress (event) {
		if (event.keyCode == 13) {
			this._elements.form.dispatchEvent(new Event('submit'));
		}
}
}

customElements.define('message-form', MessageForm);
