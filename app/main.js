function sendLog(eventName) {
  // Demo implementation: replace this with a real analytics SDK call.
  console.log("[analytics] send", {
    event_name: eventName,
    sent_at: new Date().toISOString()
  });
}

document.addEventListener("DOMContentLoaded", () => {
  sendLog("show_page_home");

  const sendButton = document.getElementById("sendButton");
  if (!sendButton) {
    return;
  }

  sendButton.addEventListener("click", () => {
    sendLog("click_btn_send");
  });
});
