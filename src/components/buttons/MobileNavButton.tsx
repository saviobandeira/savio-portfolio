import BaseButton from './BaseButton.tsx';

export default function MobileNavButton() {
    return (
        <div className='lg:hidden'>
            <div
                id='mobile-menu-button'
                className='flex gap-4'
            >
                <BaseButton name='...' color='primary-100' size={'large'}/>
            </div>

            <div
                id='mobile-menu'
                className=' min-h-1/2 absolute hidden flex-col justify-center gap-4 bg-primary pt-12 pb-6 px-6 left-0 w-screen z-10'
            >
                <a
                    href='/projects/'
                    className='mobile-menu-option cursor-pointer border-2 border-transparent p-4 rounded-lg hover:bg-primary-100 hover:border-details'
                >
                    <p className='uppercase text-center'>projetos</p>
                </a>
                <a
                    href='https://github.com/saviobandeira'
                    className='mobile-menu-option cursor-pointer border-2 border-transparent p-4 rounded-lg hover:bg-primary-100 hover:border-details'
                >
                    <p className='uppercase text-center'>github</p>
                </a>
                <a
                    href='https://www.linkedin.com/in/savio-bandeira-79760620b/'
                    className='mobile-menu-option cursor-pointer border-2 border-transparent p-4 rounded-lg hover:bg-primary-100 hover:border-details'
                >
                    <p className='uppercase text-center'>linkedin</p>
                </a>
                <a
                    href='https://www.instagram.com/savio.band/'
                    className='mobile-menu-option cursor-pointer border-2 border-transparent p-4 rounded-lg hover:bg-primary-100 hover:border-details'
                >
                    <p className='uppercase text-center'>instagram</p>
                </a>
            </div>
        </div>
    )
}