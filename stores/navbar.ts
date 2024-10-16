import { defineStore } from "pinia";
export const navBarStore = defineStore("navBarStore", () => {
    const showNavBar = ref<boolean>(false);
    const toogle = () => {
        showNavBar.value = !showNavBar.value;
    };

    return {
        showNavBar,
        toogle,
    };
});
