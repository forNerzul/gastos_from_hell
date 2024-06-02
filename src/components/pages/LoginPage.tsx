import { LoginTemplate } from "../templates";

const LoginPage = () => {
    return (
        <LoginTemplate
            onSubmit={(email, password) => console.log(email, password)}
        />
    );
};

export default LoginPage;
