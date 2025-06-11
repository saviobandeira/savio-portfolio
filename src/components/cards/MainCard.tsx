interface Props {
    title: string;
    description: string;
    src: string;
    alt: string;
}

export default function MainCard({title, description, src, alt}: Props) {
    return (
        <div
            id='card-item'
            className='flex flex-col items-center justify-center gap-4 text-center bg-primary-100 border border-details rounded-2xl w-48 h-48 p-6 md:min-w-64 md:min-h-64 aspect-square box-content'
        >
            <img 
                className='w-8 md:w-12'
                src={src}
                alt={alt}
            />
            <h4 className='uppercase text-xl font-bold md:text-2xl'>{title}</h4>
            <p>{description}</p>
        </div>
    )
}