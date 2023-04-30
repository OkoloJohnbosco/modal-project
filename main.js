// Create a funtion to toggle the modal


class Modal {
    constructor(modalClassName, modalOverlayClassName) {
        this.modal = document.querySelector(`.${modalClassName}`)
        this.modalOverLay = document.querySelector(`.${modalOverlayClassName}`)
    }

    logElement() {
        console.log(this.modal)
    }
}