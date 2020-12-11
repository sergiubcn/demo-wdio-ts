function logInfoMessage(message :string) :void {
    if (!message || message == undefined) {
        return;
    }

    console.info(message);
}

export { logInfoMessage };