import React from "react";
import { Row, Col, Card } from "antd";
import { LoginForm } from "../organisms";

interface LoginTemplateProps {
    onSubmit: (email: string, password: string) => void;
}
const LoginTemplate: React.FC<LoginTemplateProps> = ({ onSubmit }) => {
    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <Col>
                <Card
                    style={{
                        padding: "20px",
                        maxWidth: "520px",
                        width: "100%",
                    }}
                    title="Login"
                >
                    <LoginForm onSubmit={onSubmit} />
                </Card>
            </Col>
        </Row>
    );
};

export default LoginTemplate;
