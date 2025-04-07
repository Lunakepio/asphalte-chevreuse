import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { audioManager } from './AudioManager';

export const AudioSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    const listener = audioManager.getListener();
    camera.add(listener);
    return () => {
      camera.remove(listener);
    };
  }, [camera]);

  return null;
}
