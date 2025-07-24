interface Props {
    image: string;
    title: string;
    description: string;
    url: string;
}

export default function ProjectCard({ image, title, description, url }: Props) {
    return (
        <div
            id='project-card'
            data-aos='fade-up' data-aos-anchor-placement='bottom-bottom' 
            className='bg-primary-100 border border-details rounded-2xl h-full'
        >
            <a
                className=' p-4 h-full flex flex-col'
                href={url}
            >
                <div className='flex w-full items-center max-h-48 rounded-t-lg overflow-hidden md:max-h-56 lg:max-h-64 lg:h-64'>
                    <img
                        className=' w-full h-full object-cover'
                        src={ '/images/' + image }
                        alt={ title }
                    />
                </div>
                <div className='flex flex-col justify-center h-full px-4 bg-tertiary rounded-b-lg md:px-6'>
                    <h4 className=' font-bold text-xl'> { title } </h4>
                    <p className='pt-2'> { description } </p>
                </div>
            </a>
        </div>
    )
}