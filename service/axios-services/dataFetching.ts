import apiService from '@/service/apiService'

interface loginProps {
    mobile: string
    password: string
}

// for fetching data in the login form
const login = async ({ mobile, password }: loginProps) => {
    try {
        const response = await apiService.post('api/auth/login', { mobile: mobile, password: password });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

interface createUserProps {
    mobile: string
    username: string
    password: string
}

// for creating a new user
const CreateUser = async ({ mobile, username, password }: createUserProps) => {
    try {
        const response = await apiService.post('api/user', { mobile: mobile, username: username, password: password })
        return response
    } catch (error) {
        console.error(error);
        throw error;
    }
}


interface sendOtpProps {
    phoneNumber: string
}

// for sending otp to a created user
const Sendotp = async ({ phoneNumber }: sendOtpProps) => {
    try {
        const response = await apiService.post('api/send-otp', { phoneNumber: phoneNumber })
        return response
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// for verifying otp
const VerifyOtp = async (phoneNumber: string, code: string) => {
    try {
        const response = await apiService.post('/api/verify-otp', { phoneNumber: phoneNumber, code: code })
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

// for updating the password
const UpdatePassword = async (mobile: string, password: string) => {
    try {
        const respone = await apiService.patch('api/auth/forgotpassword', { mobile: mobile, password: password })
        return respone
    } catch (error) {
        console.log(error)
        throw error
    }
}



const ForgotPassword = async (mobile: string) => {
    try {
        const response = await apiService.post('api/auth/forgotpassword', { mobile: mobile })
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}


const PatchUser = async (userId: string) => {
    try {
        const response = await apiService.patch('/api/user', { userId: userId, verified: true })
        return response
    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
}

export { login, CreateUser, Sendotp, VerifyOtp, UpdatePassword, ForgotPassword, PatchUser };
