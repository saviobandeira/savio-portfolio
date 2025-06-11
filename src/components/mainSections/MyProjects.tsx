import FilterButton from '../buttons/FilterButton.tsx';
import ProjectsCardsContainer from '../cards/ProjectsCardsContainer.tsx';

export default function MyProjects() {
    return (
        <section
            id='projects'
            className='px-6 w-full'
        >
            <div
                data-aos='fade-up'
                className='sm:flex sm:justify-between sm:items-center'
            >
                <div>
                    <h2 className=' text-2xl font-bold pb-2'>Meus Projetos</h2>
                    <p>Utilzando as melhores ferramentes!</p>
                </div>
                <div className=' pt-6 sm:pt-0'>
                    <FilterButton />
                </div>

            </div>
            <div>
                <ProjectsCardsContainer />
            </div>
        </section>
    )
}