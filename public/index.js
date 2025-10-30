document.getElementById("copy").addEventListener("click", function () {

    const textToCopy = document.getElementById("txt").innerText;

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        console.log("Copied: " + textToCopy);
        showFlash()
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
    });
});

function showFlash(duration = 4000) {
    const el = document.getElementById("flash");

    if (el._hideTimer) clearTimeout(el._hideTimer);

    el.classList.add("is-visible");


    el._hideTimer = setTimeout(() => {
    el.classList.remove("is-visible");
    }, duration);
}