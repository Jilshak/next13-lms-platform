import { validateMobile } from '@/components/validations';
import { login } from '@/service/axios-services/dataFetching';

const useLogin = (mobile: string, password: string,  failed: any, router: any) => {
    const handleLogin = async () => {
        try {
            if (validateMobile(`+91${mobile}`)){
                const request = await login({mobile, password})
                if (request?.status === 200) {
                    router.push('/')
                }
            }else{
                failed({message: 'Invalid Mobile entered Please try again!!!'})
            }
            
        } catch (error) {
            failed({message: 'Invalid Credentials Please try again'})
        }
    }

    handleLogin()

    return {  };
};

export default useLogin;
