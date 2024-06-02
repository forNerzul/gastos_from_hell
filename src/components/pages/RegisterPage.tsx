import { useAuthStore } from "../../stores";
import { RegisterTemplate } from "../templates";

const RegisterPage = () => {
    const { signUp } = useAuthStore();
    const onSubmit = async (email: string, password: string) => {
        await signUp(email, password);
    };

    return <RegisterTemplate onSubmit={onSubmit} />;
};

export default RegisterPage;
