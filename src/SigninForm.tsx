import { CTA } from "./components/CTA"
import { TextInput } from "./components/form/TextInput"

export const SigninForm = () => {

    return (

        <form className="flex flex-col gap-5 00 w-form gap-500">

            <div className="flex flex-col gap-400">
                <TextInput label={'Email address'} defaultValue="kimmo@outrospective.fi" />
                <TextInput label={'Password'} password={true} />
            </div>

            <div className="flex flex-row justify-center ">
                <CTA type={'primary'} label={'Sign in'} size={'md'}  />
            </div>

        </form>
    )
}