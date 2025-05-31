import { useEffect } from 'react';

function AccessibilityScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://nagishli.org.il/nagishli.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default AccessibilityScript;
