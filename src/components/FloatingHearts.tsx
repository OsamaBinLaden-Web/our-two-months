const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 12 + Math.random() * 18,
    duration: 10 + Math.random() * 15,
    delay: Math.random() * 10,
    opacity: 0.08 + Math.random() * 0.12,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-particle absolute text-primary"
          style={{
            left: h.left,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
