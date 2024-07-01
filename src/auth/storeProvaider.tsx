/* eslint-disable react-refresh/only-export-components */
import createStore from "react-auth-kit/createStore";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

export const SignInComponent = (token: string) => {
  const signIn = useSignIn();
  signIn({
    auth: {
      token: token,
      type: "Bearer",
    },
  });
};

export const VerifyAuth = () => {
  if (useIsAuthenticated()) {
    return true;
  } else {
    return "/login";
  }
};
