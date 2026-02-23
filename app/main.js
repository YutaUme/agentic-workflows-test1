const EVENT_DEFINITIONS = [
  {
    name: "show_page_home",
    condition: "home page is displayed",
    description: "Tracks when the home page becomes visible"
  }
];

function sendLog(eventName) {
  const knownEvent = EVENT_DEFINITIONS.find((eventDef) => eventDef.name === eventName);
  if (!knownEvent) {
    console.warn(`[analytics] Unknown event: ${eventName}`);
    return;
  }

  // Demo implementation: replace this with a real analytics SDK call.
  console.log("[analytics] send", {
    event_name: knownEvent.name,
    condition: knownEvent.condition,
    description: knownEvent.description,
    sent_at: new Date().toISOString()
  });
}

document.addEventListener("DOMContentLoaded", () => {
  sendLog("show_page_home");
});

export { EVENT_DEFINITIONS };
