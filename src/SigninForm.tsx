import { CTA, CTASizes, CTATypes } from "./components/CTA"
import { TextInput } from "./components/form/TextInput"

export const SigninForm = () => {

    return (

        <form className="flex flex-col gap-500 w-form">

            <div className="flex flex-col gap-400">
                <TextInput label={'Email address'} defaultValue="kimmo@outrospective.fi" />
                <TextInput label={'Password'} password={true} />
            </div>

            <div className="flex flex-row justify-center ">
                <CTA type={CTATypes.primary} label={'Sign in'} size={CTASizes.md}  />
            </div>

        </form>
    )
}