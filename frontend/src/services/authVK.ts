import * as VKID from '@vkid/sdk';
import { apiProvider } from "src/api";

export const authVK = async () => {

    VKID.Config.init({
        app: parseInt(process.env.REACT_APP_VK_APP_ID || ''),
        redirectUrl: `${process.env.REACT_APP_FRONTEND_URL}/onboarding`,
        state: 'state',
        codeVerifier: 'codeVerifier',
        scope: 'phone email',
        responseMode: VKID.ConfigResponseMode.Callback,
    });

    try {
        // get VK token
        const authData = (await VKID.Auth.login()) as { code: string; device_id: string };
        const token = await VKID.Auth.exchangeCode(authData.code, authData.device_id);

        // get user data
        const userInfo = await VKID.Auth.userInfo(token.access_token);

        // get user token and redirect
        if (userInfo.user.email) {
            const response = await apiProvider.post("/public/vk-auth", { email: userInfo.user.email });
            const authUrl = response.data;

            // Step 4: Redirect to the received URL
            window.location.href = authUrl;
        } else {
            throw new Error("Email not found in VK user data");
        }
    } catch (error) {
        console.error("VK Auth error:", error);
        throw error;
    }
};