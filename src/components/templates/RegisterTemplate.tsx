import React from "react";
import { Card, Col, Row } from "antd";
import { RegisterForm } from "../organisms";

interface RegisterTemplateProps {
    onSubmit: (email: string, password: string) => Promise<void>;
}
const RegisterTemplate: React.FC<RegisterTemplateProps> = ({ onSubmit }) => {
    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <Col>
                <Card
                    style={{
                        padding: "20px",
                        maxWidth: "520px",
                        width: "100%",
                    }}
                    title="Register"
                >
                    <RegisterForm onSubmit={onSubmit} />
                </Card>
            </Col>
        </Row>
    );
};

export default RegisterTemplate;
