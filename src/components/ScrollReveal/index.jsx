import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

const ScrollReveal = ({ children, style }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'top',
        distance: '50px',
        duration: 2000,
        delay: 300,
        reset: true,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
