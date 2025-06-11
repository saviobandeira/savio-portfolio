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
                    title='Dashboards'
                    description='Crio dashboards interativos e claros para visualização eficiente dos seus dados.'
                    src='/images/icons/dashboard-icon.svg'
                    alt=' '
                />
                <MainCard
                    title='Integração'
                    description='Conecto sistemas para tornar seus fluxos de trabalho mais ágeis e seguros.'
                    src='/images/icons/link-icon.svg'
                    alt=' '
                />
            </div>
        </div>
    )
}