import BaseButton from './buttons/BaseButton.tsx';
import ContactMeButton from './buttons/ContactMeButton.tsx';
import MobileNavButton from './buttons/MobileNavButton.tsx';

export default function Header() {
    return (
        <header className='animate-fade-in-down-normal flex flex-col items-center border-b border-details p-6'>
            <div className='w-full flex flex-col gap-6 sm:flex-row sm:justify-between max-w-7xl'>
                <a
                    href='/'
                    className='flex flex-col items-center gap-4 text-center xs:text-start xs:flex-row'>
                    <img 
                        className='w-14 h-auto'
                        src='/images/logo-3.svg'
                        alt='Logo de Sávio Bandeira'
                        />
                    <h1 className=' font-bold text-4xl'>Sávio Bandeira</h1>
                </a>
                <div className='flex flex-col gap-4 xs:flex-row'>
                    <ContactMeButton />
                    <BaseButton name='contate-me' color='secondary' />
                    <MobileNavButton />
                </div>
            </div>
        </header>
    )
}