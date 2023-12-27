// useVerifyOTP.js
import { PatchUser, VerifyOtp } from '@/service/axios-services/dataFetching';

const useVerifyOtp = (state: string[], phoneNumber: string, userId: string, successToast: any, customToast: any, router: any) => {

    const verifyOtp = async () => {
        try {
            const code = state.join('')
            const response = await VerifyOtp(`+91${phoneNumber}`, code)
            if (response.status == 200) {
                const verify = await PatchUser(userId)
                if (verify.status === 200) {
                    await successToast({message: 'Your OTP has been verified'})
                    return true
                } else {
                    await customToast({ message: 'Verification failed, please try again!!' })
                    return false
                }
            } else {
                await customToast({ message: 'Invalid OTP please try again!!' })
                return false
            }
        } catch (error: any) {
            await customToast({ message: 'Invalid OTP please try again!!' })
        }
    };

    const handleVerifyToken = async () => {
        const final_otp = state.join('')
        if (final_otp.length == 6) {
            const verify = await verifyOtp()
            if (verify) {
                router.push('sign-in')
            }else{
                customToast({ message: 'Something went wrong!!!' })
            }
        } else {
            customToast({ message: 'Some field of the OTP seems to be missing' })
        }
    }

    handleVerifyToken()

    return {  };
};

export default useVerifyOtp;
