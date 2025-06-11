import FormStatusSuccess from './FormStatusSuccess.tsx';
import FormStatusFailure from './FormStatusFailure.tsx';

export default function FormStatus() {
    return (
        <div className='fixed left-0 top-0 w-screen shadow-custom z-10'>
            <FormStatusSuccess />
            <FormStatusFailure />
        </div>
    )
}