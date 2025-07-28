interface Props {
    name: string;
    color: 'primary' | 'primary-100' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    rounded?: 'small' | 'medium' | 'large';
    icon?: 'github' | 'linkedin' | 'logo';
}

export default function BaseButton({ name, color, size, icon }: Props) {
    const sizes = {
        small: 'px-2 py-2',
        medium: 'px-4 py-4',
        large: 'px-8 py-4',
    }

    const setIcon = () => {
        switch (icon) {
            case 'github':
                return <img className=' w-6 h-auto' src='/images/icons/github-icon.svg' alt='GitHub icon' />;
            
            case 'logo':
                return <img className=' w-6 h-auto' src='/images/logo-3.svg' alt='Logo icon' />;
        }
    }

    const setColor = () => {
        switch (color) {
            case 'primary':
                return 'text-secondary-100 bg-primary border border-details';
            case 'primary-100':
                return 'text-secondary-100 bg-primary-100 border border-details';
            case 'secondary':
                return 'text-primary-100 bg-secondary';
            default:
                return 'text-primary-100 bg-secondary';
        }
    }

    const setHref = () => {
        switch (name) {
            case 'contate-me':
                return '/#contact-me';
                
            case 'projetos':
                return '/projects/';

            case 'github':
                return 'https://github.com/saviobandeira';
            
            case 'Ver Mais':
                return '/projects/';
            
            case 'Baixar currículo':
                return '/curriculo.pdf'
        }
    }

    return (
        <a
            className={`
            flex items-center justify-center gap-2 rounded-lg uppercase cursor-pointer whitespace-nowrap
            ${sizes[size || 'medium']}
            ${setColor()}`}
            href={setHref()}
        >
            {setIcon()}
            {name}
        </a>
    )
}