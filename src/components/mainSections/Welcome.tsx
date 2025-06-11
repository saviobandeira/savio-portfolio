import MainCardsContainer from '../cards/MainCardsContainer.tsx';
import ContactMeButtonCTA from '../buttons/ContactMeButtonCTA.tsx';

export default function Welcome() {
    return (
        <section className=' py-16 relative max-w-screen lg:min-h-screen lg:py-24'>
            <div className='flex flex-col items-center px-6'>
                <h2 className=' text-4xl font-bold text-center md:text-5xl lg:text-6xl lg:pb-4'>Tecnologia que faz sentido.</h2>
                <p className='text-center pt-6 pb-16 max-w-3/4 lg:text-lg'>Seja automatizando tarefas, conectando sistemas ou criando ferramentas do zero, meu foco é entregar algo que funcione, economize tempo e faça diferença no seu dia a dia.</p>
            </div>

            <MainCardsContainer />

            <div className='px-6 pt-16'>
                <div className='flex flex-col p-4 bg-primary-100 border border-details rounded-lg md:p-6 md:flex-row md:justify-between md:items-center'>
                    <p className='pb-4 md:pb-0'>Quer mais produtividade e segurança? Vamos conversar!</p>
                    <ContactMeButtonCTA />
                </div>
            </div>
        </section>
    )
}