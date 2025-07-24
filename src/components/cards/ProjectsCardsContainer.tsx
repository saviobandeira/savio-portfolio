import ProjectCard from './ProjectCard.tsx';

export default function ProjectsCardsContainer() {
    return (
        <div
            id='project-card-container'
            className='grid gap-4 py-16 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6'
        >
            <ProjectCard
                image='user-authentication.png'
                title='Autenticação de Usuário com FastAPI'
                description='Sistema full-stack para autenticação usando FastAPI'
                url='https://github.com/saviobandeira/user-authentication'
            />
            <ProjectCard
                image='ph-link.png'
                title='Catálogo Online'
                description='Catálogo digital personalizado para divulgação de produtos'
                url='https://paulotrindade.vercel.app/'
            />
            <div className='sm:col-span-2 xl:col-span-1'>
                <ProjectCard
                    image='sicont-auto.png'
                    title='SiCont Auto'
                    description='Automação do sistema de contabilidade da Sudoeste Informática'
                    url='https://github.com/saviobandeira/sicont-auto'
                />
            </div>
            <div className='xl:flex xl:flex-col'>
                <ProjectCard
                    image='pedeja-wppbot.png'
                    title='PedeJá'
                    description='Automação do WhatsApp Web para auto atendimento'
                    url='https://github.com/saviobandeira/pedeja_wppbot'
                />
            </div>
            <div className='hidden sm:block xl:col-span-2'>
                <ProjectCard
                    image='meu-portifolio.png'
                    title='Meu Portifólio'
                    description='Site responsivo para organização e apresentação de projetos'
                    url='https://github.com/saviobandeira/savio-portfolio'
                />
            </div>
        </div>
    )
}