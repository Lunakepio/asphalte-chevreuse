import {
  Bloom,
  EffectComposer,
  SMAA,
  BrightnessContrast,
  Vignette,
} from "@react-three/postprocessing";


export const Composer = () => {

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0} intensity={0.3} mipmapBlur />
      <BrightnessContrast brightness={0.001} contrast={-0.01} />
      <SMAA />
      {/* <DepthOfField focusDistance={0.99} focalLength={0.07} bokehScale={10} height={1080} /> */}
      <Vignette eskil={false} offset={0.1} darkness={0.6} />
    </EffectComposer>
  );
};
