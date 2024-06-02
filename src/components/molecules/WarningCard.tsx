import React from "react";
import { Alert, Card } from "antd";

interface WarningCardProps {
    title?: string;
    message: string;
}

const WarningCard: React.FC<WarningCardProps> = ({ title, message }) => {
    return (
        <Card
            size="small"
            title={title}
            bordered={true}
            style={{
                border: "1px solid #ff4d4f", // Cambia el color del borde para que coincida con el color de advertencia
                backgroundColor: "#fff1f0", // Fondo claro para advertencia
            }}
        >
            <Alert
                message={message}
                type="warning"
                showIcon
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    padding: "0",
                }}
            />
        </Card>
    );
};

export default WarningCard;
