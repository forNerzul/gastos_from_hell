import React from "react";
import { Spin } from "antd";

const Loading: React.FC = () => {
    const [fadeOut, setFadeOut] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div
            className={`flex justify-center items-center h-screen transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <Spin size="large" />
        </div>
    );
};

export default Loading;
