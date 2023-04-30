const openModalBtn = document.querySelector(".modal_open_btn");
const closeModalBtn = document.querySelector(".modal_close_btn");

openModalBtn.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)

// Create a funtion to open/close the modal
function openModal() {
    const modalController = new Modal("modal", "modal_overlay", "modal_content")
    modalController.show()
}

function closeModal() {
    const modalController = new Modal("modal", "modal_overlay", "modal_content")
    modalController.hide()
}

class Modal {
    constructor(modalClassName, modalOverlayClassName, modalContentClassName) {
        this.modal = document.querySelector(`.${modalClassName}`)
        this.modalOverLay = document.querySelector(`.${modalOverlayClassName}`)
        this.modalContent = document.querySelector(`.${modalContentClassName}`)
        this.pageBody = document.querySelector("body")
    }

    hide() {
        this.modalOverLay.classList.remove("shown")
        this.modalOverLay.classList.add("fade")
        this.modalContent.classList.remove("shown")
        this.modalContent.classList.add("fade")
        setTimeout(() => {
            this.unMount()
        }, 1000)
    }

    show() {
        this.mount()
        setTimeout(() => {
            this.modalOverLay.classList.add("shown")
            this.modalContent.classList.add("shown")
        }, 100)
    }

    unMount() {
        this.modal.style.display = "none"
        this.pageBody.classList.remove("modal_shown")
    }

    mount() {
        this.modal.style.display = "flex"
        this.pageBody.classList.add("modal_shown")
        this.modalOverLay.classList.remove("fade")
        this.modalContent.classList.remove("fade")
    }
}