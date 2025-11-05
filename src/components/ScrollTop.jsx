import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={toTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 rounded-full p-3 shadow-lg transition-all ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'} bg-sky-500 hover:bg-sky-400 text-white`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
