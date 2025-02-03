chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "pasteMessage") {
        let textArea = document.querySelector("textarea"); // Ajusta si el campo no es un <textarea>
        if (textArea) {
            textArea.value = request.message;
        }
    }
});
