export default class NotificationMessage {

	static shownNotification;

	element;

	constructor(
		message = '',
		{
			duration = 1000,
			type = 'success'
		} = {}) {

		this.message = message;
		this.duration = duration;
		this.type = type;

		this.show();
	}

	get template () {
		return `
			<div class="notification ${this.type}" style="--value:${(this.duration/1000).toFixed(0)}s">
    			<div class="timer"></div>
    			<div class="inner-wrapper">
      				<div class="notification-header">${this.type}</div>
      				<div class="notification-body">
        				${this.message}
      				</div>
    			</div>
  			</div>`;
	}

	show(parentElement) {
	    const element = document.createElement('div');
	    
    	element.innerHTML = this.template;    	
    	this.element = element.firstElementChild;

    	if(NotificationMessage.whownNotification) {
    		NotificationMessage.whownNotification.remove();
    	}

    	NotificationMessage.whownNotification = this;

    	if(parentElement)
    		parentElement.append(this.element);

    	setTimeout(() => this.remove(), this.duration);
	}

	remove() {
		this.element.remove();
		NotificationMessage.whownNotification = null;
	}

	destroy() {
		this.remove();		
	}

}
