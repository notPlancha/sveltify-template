import "svelte";
import Button from "./lib/button.svelte";
async function main() {
    while (!Spicetify?.showNotification || document.getElementsByClassName("player-controls__right").length === 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // https://svelte.dev/docs#run-time-client-side-component-api-creating-a-component
    const button = new Button({
        target: document.getElementsByClassName("player-controls__right")[0],
        props: {
            color:"#2e77d0"
        }
    })
}

export default main;

