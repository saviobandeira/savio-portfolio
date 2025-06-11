export default function FormStatusSuccess() {
    return (
        <div
            id='form-status-success'
            className='animate-fade-in-down-normal w-full hidden items-center justify-center p-4 gap-4 bg-green-400'
        >
            <div className='max-w-7xl w-full flex justify-between'>
                <p className='font-bold'>Sua mensagem foi enviado com sucesso!</p>
                <div className='cursor-pointer flex justify-center items-center w-6 h-6 form-status-close'>
                    <img
                        src='/images/icons/close-icon.svg'
                        alt='Close icon'
                        className='min-w-4 min-h-4 w-4 h-4'
                    />
                </div>
            </div>
        </div>
    )
}