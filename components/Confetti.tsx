
import React, { useEffect, useState } from 'react';

interface ConfettiPieceProps {
  id: number;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ id }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const colors = ['#fde047', '#facc15', '#eab308', '#d97706', '#fafafa', '#e5e5e5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomX = Math.random() * 100;
    const randomRotate = Math.random() * 360;
    const randomScale = Math.random() * 0.5 + 0.5;
    const randomDuration = Math.random() * 3 + 4; // 4s to 7s
    const randomDelay = Math.random() * 2;

    setStyle({
      position: 'absolute',
      left: `${randomX}vw`,
      top: '-20px',
      width: '10px',
      height: '10px',
      backgroundColor: randomColor,
      opacity: 1,
      transform: `rotate(${randomRotate}deg) scale(${randomScale})`,
      animation: `fall ${randomDuration}s linear ${randomDelay}s forwards`,
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      <div style={style} />
    </>
  );
};


const Confetti: React.FC = () => {
    const [pieces, setPieces] = useState<number[]>([]);

    useEffect(() => {
        const confettiCount = 150;
        setPieces(Array.from({ length: confettiCount }, (_, i) => i));
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
            {pieces.map(id => <ConfettiPiece key={id} id={id} />)}
        </div>
    );
};


export default Confetti;
