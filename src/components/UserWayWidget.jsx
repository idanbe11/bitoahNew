// src/components/UserWayWidget.js
import { useEffect } from 'react';

function UserWayWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.defer = true;
    script.setAttribute('data-account', 'iWaXUdmNXP'); // ← your free widget code
    document.body.appendChild(script);
  }, []);

  return null;
}

export default UserWayWidget;
