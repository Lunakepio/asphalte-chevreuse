import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGameStore } from '../../../store/store';

export const Success = () => {
  const successRef = useRef(null);
  const showSuccess = useGameStore((state) => state.showSuccess);

  useGSAP(() => {
    if(successRef.current && showSuccess){
      gsap.to(successRef.current, { opacity: 1, y: 0, duration: 0.5, onComplete: () => {
          gsap.to(successRef.current, { opacity: 0, y: -100, duration: 0.5, delay: 3 });
      } });
    }
  }, [showSuccess]);

  return (
    <div className="success" ref={successRef}>
      <div className="image">
        <img src="/success/plot.png" alt="Success" />
      </div>
      <div className="content">
        <p className="title">Destructeur de plots</p>
        <p className="message">Le parcours n'a jamais été aussi dégagé...</p>
      </div>
    </div>
  )
}
