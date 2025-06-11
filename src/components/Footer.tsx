import DownloadCVButton from './buttons/DownloadCVButton.tsx';

export default function Footer() {
    return (
        <footer className='animate-fade-in-up-slow max-w-screen flex flex-col items-center border-t border-details lg:mt-24'>
            <div className='max-w-7xl w-full flex flex-col items-center justify-between gap-12 p-6 md:flex-row'>
                <div className='flex justify-center flex-wrap gap-6'>
                    <a href='https://www.instagram.com/savio.band/'>
                        <img
                            src='/images/icons/instagram-icon.svg'
                            alt='Instagram icon'
                            className='w-10 h-10'
                        />
                    </a>
                    <a href='https://github.com/saviotrindade/'>
                        <img
                            src='/images/icons/github-icon.svg'
                            alt='GitHub icon'
                            className='w-10 h-10'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/savio-bandeira-79760620b/'>
                        <img
                            src='/images/icons/linkedin-icon.svg'
                            alt='Linkedin icon'
                            className='w-10 h-10'
                        />
                    </a>
                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <div>
                        <p className='text-center max-w-2xs'>Procurando por um desenvolvedor experiente? Estou disponível para novas oportunidades como PJ.</p>
                    </div>
                    <DownloadCVButton />
                </div>
            </div>
        </footer>
    )
}