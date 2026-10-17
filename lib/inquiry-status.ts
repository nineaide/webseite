const storageKey = 'nine:inquiry-received';
const eventName = 'nine:inquiry-status';
let receivedInMemory = false;

export function hasReceivedInquiry() {
  if (typeof window === 'undefined') return false;
  if (receivedInMemory) return true;
  try {
    return window.sessionStorage.getItem(storageKey) === 'true';
  } catch {
    return false;
  }
}

// Call only after the server has confirmed that the inquiry was stored.
export function markInquiryReceived() {
  if (typeof window === 'undefined') return;
  receivedInMemory = true;
  try {
    window.sessionStorage.setItem(storageKey, 'true');
  } catch {
    // The confirmation still works when browser storage is unavailable.
  }
  window.dispatchEvent(new Event(eventName));
}

export function subscribeInquiryStatus(onChange: () => void) {
  window.addEventListener(eventName, onChange);
  return () => window.removeEventListener(eventName, onChange);
}

export function inquiryServerSnapshot() {
  return false;
}
