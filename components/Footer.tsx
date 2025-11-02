import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 mt-12 border-t border-white/10">
      <p className="text-gray-400">
        Once again, thank you for everything, <span className="font-semibold text-yellow-300">Bhavana Mam</span>.
        <span className="inline-block animate-pulse"> ❤️</span>
      </p>
      <p className="text-sm text-gray-500 mt-2">
        This page was built with gratitude and code.
      </p>
    </footer>
  );
};

export default Footer;