export default defineNuxtRouteMiddleware((to, from) => {
    if (to.name == "index") {
        return navigateTo("/dashboard");
    }

    const token = useCookie("_auth_token");

    if (to.path.startsWith("/auth") && token.value) {
        return navigateTo('/dashboard');
    }

    if (!to.path.startsWith("/auth") && !token.value) {
        return navigateTo("/auth");
    }
});
