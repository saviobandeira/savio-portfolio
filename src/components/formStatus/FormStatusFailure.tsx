export default function FormStatusFailure() {
    return (
        <div
            id='form-status-failure'
            className='animate-fade-in-down-normal w-full hidden items-center justify-center p-4 bg-red-400'
        >
            <div className='max-w-7xl w-full flex items-center justify-between gap-4 '>
                <p className='font-bold'>Não foi possivel enviar a mensagem!</p>
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