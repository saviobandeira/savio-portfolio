import BaseButton from './BaseButton';

export default function ContactMeButton() {
    return (
        <div className='hidden lg:flex lg:gap-4'>
            <BaseButton name='projetos' color='primary-100' icon='logo'/>
            <BaseButton name='github' color='primary-100' icon='github'/>
        </div>
    )
}