// AccessibilityWidget.js
import { useEffect } from 'react';

function AccessibilityWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://example.com/accessibility-widget.js'; // Replace with actual script URL
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}

export default AccessibilityWidget;
