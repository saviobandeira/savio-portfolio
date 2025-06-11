interface Props {
    image: string;
    title: string;
    description: string;
}

export default function ProjectCard({ image, title, description }: Props) {
    return (
        <div
            id='project-card'
            data-aos='fade-up' data-aos-anchor-placement='bottom-bottom' 
            className='bg-primary-100 border border-details rounded-2xl h-full'
        >
            <div className=' p-4'>
                <div className='flex w-full items-center max-h-48 object-fill rounded-t-lg overflow-hidden md:max-h-56 lg:max-h-64 lg:h-64'>
                    <img
                        className=' w-full h-auto'
                        src={ '/images/' + image }
                        alt={ title }
                    />
                </div>
                <div className=' px-4 py-8 bg-tertiary rounded-b-lg md:px-6 md:py-12 '>
                    <h4 className=' font-bold text-xl'> { title } </h4>
                    <p className='pt-2'> { description } </p>
                </div>
            </div>
        </div>
    )
}