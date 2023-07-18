export default class Alert{
    constructor(alertId){
        this.alert = document.getElementById(alertId)
    }

    showMessage(message){
        this.alert.classList.remove('d-none')
        this.alert.innerText = message
    }

    hideMessage(){
        this.alert.classList.add('d-none')
    }
}