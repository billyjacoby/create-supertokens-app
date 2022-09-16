import * as ThirdPartyPasswordlessReact from "supertokens-auth-react/recipe/thirdpartypasswordless";
import SessionReact from "supertokens-auth-react/recipe/session";
import Session from "supertokens-web-js/recipe/session";

export const SuperTokensReactConfig = {
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        ThirdPartyPasswordlessReact.init({
            emailVerificationFeature: {
                mode: "REQUIRED",
            },
            signInUpFeature: {
                providers: [
                    ThirdPartyPasswordlessReact.Github.init(),
                    ThirdPartyPasswordlessReact.Google.init(),
                    ThirdPartyPasswordlessReact.Apple.init(),
                ],
            },
            contactMethod: "EMAIL_OR_PHONE",
        }),
        SessionReact.init(),
    ],
};

export const SuperTokensWebJSConfig = {
    appInfo: {
        appName: "SuperTokens Demo",
        apiDomain: "http://localhost:3001",
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [Session.init()],
};
