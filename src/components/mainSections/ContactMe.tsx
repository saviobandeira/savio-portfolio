import FormStatus from "../formStatus/FormStatus";

export default function ContactMe() {
    return (
        <section 
            id='contact-me'
            className='w-full px-6 pt-24'
        >

            <FormStatus />

            <div
                data-aos='fade-up'
                className='lg:pb-16 lg:flex lg:justify-between lg:items-center'
            >
                <div className=''>
                    <h2 className='text-2xl font-bold pb-2'>Você pode me contatar diretamente.</h2>
                    <p>Estou pronto para ajudar no seu projeto.</p>
                </div>
                <div className='flex flex-wrap gap-4 pt-6 md:gap-6 lg:pt-0 lg:pl-0 '>
                    <a href='https://www.instagram.com/savio.band/'>
                        <img 
                            src='/images/icons/instagram-icon.svg'
                            alt='Instagram icon'
                            className='w-10 h-10'
                        />
                    </a>
                    <a href='https://github.com/saviobandeira'>
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
            </div>
            <div className='flex flex-col justify-center items-center sm:flex-row sm:gap-4 md:gap-8 lg:gap-16'>
                <div
                    data-aos='fade-right'
                    className='w-full max-w-md font-bold pt-12'
                >
                    <a href='mailto:saviobandeira.dev@gmail.com'>
                        <div className='flex items-center gap-4 px-4 py-4 mt-4 bg-primary-100 border border-details rounded-lg hover:bg-tertiary transition-colors ease-in-out duration-500'>
                            <img
                                src='/images/icons/email-icon.svg'
                                alt='E-mail icon'
                                className='w-6 h-auto'
                            />
                            <p>saviobandeira.dev@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href='https://wa.me/5577988644589'
                        target='blank'
                    >
                        <div className='flex items-center gap-4 px-4 py-4 mt-4 bg-primary-100 border border-details rounded-lg hover:bg-tertiary transition-colors ease-in-out duration-500 lg:mt-6'>
                            <img
                                src='/images/icons/whatsapp-icon.svg'
                                alt='WhatsApp icon'
                                className='w-6 h-auto'
                            />
                            <p>+55 (77) 9 8864-4589</p>
                        </div>
                    </a>
                    
                    <a
                        href='https://www.instagram.com/savio.band/'
                        target='blank'
                    >
                        <div className='flex items-center gap-4 px-4 py-4 mt-4 bg-primary-100 border border-details rounded-lg hover:bg-tertiary transition-colors ease-in-out duration-500 lg:mt-6'>
                            <img
                                src='/images/icons/instagram-icon.svg'
                                alt='Instagram icon'
                                className='w-6 h-auto'
                            />
                            <p>band.savio</p>
                        </div>
                    </a>
                </div>
                <div 
                    data-aos='fade-left'
                    data-aos-
                    className='w-full max-w-md mt-6 bg-primary-100 border border-details px-2 py-4 rounded-lg font-bold lg:p-4'
                >
                    <form
                        id='my-form'
                        action='https://formspree.io/f/myzelgpy'
                        method='POST'
                        className='flex flex-col gap-2 lg:gap-4'
                    >
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Nome'
                            className='px-4 py-4 bg-primary rounded-sm border border-details'
                        />
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='E-mail'
                            className='px-4 py-4 bg-primary rounded-sm border border-details'
                        />
                        <textarea
                            name='message'
                            id='message'
                            placeholder='Mensagem'
                            className='px-4 py-4 bg-primary rounded-sm border border-details'
                        ></textarea>
                        <input
                            type='submit'
                            value='ENVIAR'
                            className=' cursor-pointer py-2 text-primary bg-secondary rounded-sm'
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}