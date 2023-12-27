import { Sendotp } from '@/service/axios-services/dataFetching';

const useResendOtp = (phoneNumber: string, success: any, failed: any) => {
    const handleResendToken = async () => {
        try {
            const request = await Sendotp({ phoneNumber: `+91${phoneNumber}` })
            if (request.status == 200) {
                await success({ message: 'Your OTP has been resend please check your mobile' })
            }
        } catch (error) {
            failed({ message: "Your otp couldn't be send due to some technial issue please try later!!" })
        }
    }

    handleResendToken()

    return {  };
};

export default useResendOtp;
