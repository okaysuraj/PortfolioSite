export function navigateWithTransition(targetSelector) {
  window.dispatchEvent(new CustomEvent('trigger-curtain', { detail: targetSelector }))
}
