import ProjectCard from './ProjectCard.tsx';

export default function ProjectsCardsContainer() {
    return (
        <div
            id='project-card-container'
            className='grid gap-4 py-16 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6'
        >
            <ProjectCard
                image='example.png'
                title='whatsapp API'
                description='Sistema de auto atendimento'
            />
            <ProjectCard
                image='example.png'
                title='whatsapp API'
                description='Sistema de auto atendimento'
            />
            <div className='sm:col-span-2 xl:col-span-1'>
                <ProjectCard
                    image='example.png'
                    title='Whatsapp API'
                    description='Sistema de auto atendimento'
                />
            </div>
            <div className='xl:flex xl:flex-col'>
                <ProjectCard
                    image='example.png'
                    title='Whatsapp API'
                    description='Sistema de auto atendimento'
                />
            </div>
            <div className='hidden sm:block xl:col-span-2'>
                <ProjectCard
                    image='example.png'
                    title='Whatsapp API'
                    description='Sistema de auto atendimento'
                />
            </div>
            <div className='hidden sm:block sm:col-span-2'>
                <ProjectCard
                    image='example.png'
                    title='Whatsapp API'
                    description='Sistema de auto atendimento'
                />
            </div>
            <div className='hidden xl:flex xl:flex-col'>
                <ProjectCard
                    image='example.png'
                    title='Whatsapp API'
                    description='Sistema de auto atendimento'
                />
            </div>
        </div>
    )
}