import { CreateUser, Sendotp } from '@/service/axios-services/dataFetching';
import userInputValidation from './input-validation';

const useSendOtp = (username: string, phoneNumber: string, password: string, confirmPassword: string, success: any, failed: any, setUserId: any, toggle: boolean, setToggle: any) => {
    const handleSendOTP = async () => {
        const verify = userInputValidation(username, phoneNumber, password, confirmPassword, failed)
        if (verify) {
            try {
                const createUser = await CreateUser({ mobile: phoneNumber, username: username, password: password })
                if (createUser.status == 201) {
                    const userId = await createUser.data.user.id
                    console.log("this is the userId: ", userId)
                    await setUserId(userId)
                    const request = await Sendotp({ phoneNumber: `+91${phoneNumber}` })
                    if (request.status == 200) {
                        await success({message: 'An otp has been send to your mobile number'})
                        verify && setToggle(!toggle)
                    } else {
                        failed({ message: "The otp service is down for the moment" })
                    }
                }
            } catch (error) {
                failed({ message: 'A user with the given phone number already exists!!' })
            }
        }
    }

    handleSendOTP()
};

export default useSendOtp;
