const eventName = 'nine:inquiry-status';
let receivedInMemory = false;

export function hasReceivedInquiry() {
  if (typeof window === 'undefined') return false;
  return receivedInMemory;
}

// Call only after the server has confirmed that the inquiry was stored.
export function markInquiryReceived() {
  if (typeof window === 'undefined') return;
  receivedInMemory = true;
  // Confirmation is needed only by the current page. Do not persist this
  // convenience state in cookies or browser storage across page loads.
  window.dispatchEvent(new Event(eventName));
}

export function subscribeInquiryStatus(onChange: () => void) {
  window.addEventListener(eventName, onChange);
  return () => window.removeEventListener(eventName, onChange);
}

export function inquiryServerSnapshot() {
  return false;
}
