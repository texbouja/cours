document.querySelectorAll('.sticky-header').forEach(header => {
    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle('stuck', e.intersectionRatio < 1)
      },
      {threshold: [1]}
    );
    
    observer.observe(header);
  });