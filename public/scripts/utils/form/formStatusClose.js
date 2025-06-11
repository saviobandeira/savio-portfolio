export default function formStatusClose() {
    const buttons = document.getElementsByClassName('form-status-close');

    function closeButton(event) {
        const formStatusElement = event.target.parentElement.parentElement.parentElement;

        formStatusElement.classList.remove('flex');
        formStatusElement.classList.add('hidden');
    }

    for (const button of buttons) {
        button.addEventListener('click', closeButton);
    }
}

formStatusClose();