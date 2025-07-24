import MainCard from './MainCard.tsx';

export default function MainCardsContainer() {
    return (
        <div className='flex justify-center'>
            <div 
                id='cards-container'
                className=' animate-fade-in-up-slow flex gap-6 overflow-x-auto px-6 md:gap-16'
            >
                <MainCard 
                    title='Automação'
                    description='Automatizo tarefas rotineiras para aumentar eficiência e economizar seu tempo.'
                    src='/images/icons/gear-icon.svg'
                    alt=' '
                />
                <MainCard 
                    title='Integrações'
                    description='Conecto sistemas e APIs para criar fluxos eficientes e centralizar informações.'
                    src='/images/icons/link-icon.svg'
                    alt=' '
                />
                <MainCard
                    title='Aplicações Web'
                    description='Desenvolvo aplicações responsivas e funcionais para diferentes dispositivos.'
                    src='/images/icons/link-icon.svg'
                    alt=' '
                />
            </div>
        </div>
    )
}