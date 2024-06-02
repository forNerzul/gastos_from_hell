import React from "react";
import { Button, Form, FormProps, Input } from "antd";
import { useAuthStore } from "../../stores";
import { WarningCard } from "../molecules";

type RegisterFields = {
    email: string;
    password: string;
};

interface RegisterFormProps {
    onSubmit: (email: string, password: string) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const { error } = useAuthStore();
    const onFinish: FormProps<RegisterFields>["onFinish"] = (
        values: RegisterFields
    ) => {
        onSubmit(values.email, values.password);
    };

    const onFinishFailed: FormProps<RegisterFields>["onFinishFailed"] = (
        errorInfo: any
    ) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            style={{ maxWidth: "400px", width: 500 }}
        >
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                    {
                        type: "email",
                        message: "Please enter a valid email!",
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    "The two passwords that you entered do not match!"
                                )
                            );
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" htmlType="submit" block>
                    Sign in
                </Button>
            </Form.Item>
            {error && <WarningCard message={error.message} />}
        </Form>
    );
};

export default RegisterForm;
