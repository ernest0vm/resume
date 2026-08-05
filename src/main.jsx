import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Unregister the service worker left behind by the old CRA build so
// returning visitors don't get stuck on a cached version of the site.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

createRoot(document.getElementById('root')).render(<App />);
