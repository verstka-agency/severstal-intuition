import { useMutation } from "@tanstack/react-query";
import { authVK } from "src/services/authVK";

const VkAuth = () => {
    const { mutate: handleVKAuth, isLoading } = useMutation({
        mutationFn: authVK
    });

    return (
        <div className="VKLogin">
            {isLoading ? (
                'Загрузка...'
            ) : (
                <img src={`/authorization/vk-login.svg`}
                    alt="VK" onClick={() => handleVKAuth()} />
            )}
        </div>
    );
};

export default VkAuth;