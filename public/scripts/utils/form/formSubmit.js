export default function formSubmit() {

    const form = document.getElementById('my-form');
    const formStatusSuccess = document.getElementById('form-status-success');
    const formStatusFailure = document.getElementById('form-status-failure');
    
    async function handleSubmit(event) {
        event.preventDefault();

        closeAlert(formStatusSuccess);
        closeAlert(formStatusFailure);

        const data = new FormData(event.target);

        if (!data.get('name') || !data.get('email') || !data.get('message')) {
            openAlert(formStatusFailure);

            return;
        } 

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
            'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                openAlert(formStatusSuccess);
                form.reset()

            } else {
                openAlert(formStatusFailure);
            }
        }).catch(error => {
            openAlert(formStatusFailure);
        });
    }
    form.addEventListener("submit", handleSubmit);
}

function openAlert(element) {
    element.classList.add('flex');
    element.classList.remove('hidden');
}

function closeAlert(element) {
    element.classList.add('hidden');
    element.classList.remove('flex');
}

formSubmit();