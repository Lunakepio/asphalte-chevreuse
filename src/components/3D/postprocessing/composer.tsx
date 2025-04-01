import {
  Bloom,
  EffectComposer,
  SMAA,
  BrightnessContrast,
  Vignette,
  N8AO,
  SSR,
  TiltShift2,
  ToneMapping,
} from "@react-three/postprocessing";

export const Composer = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0} intensity={0.2} mipmapBlur />
      {/* <BrightnessContrast brightness={0.001} contrast={-0.01} />
      <SMAA /> */}
      {/* <DepthOfField focusDistance={0.99} focalLength={0.07} bokehScale={10} height={1080} /> */}
      <Vignette eskil={false} offset={0.1} darkness={0.6} />
      {/* <TiltShift2 blur={0.1} strength={1} /> */}
      <ToneMapping    resolution={1024} // Lower resolution for a softer adaptation
  middleGrey={0.2} // Darker overall exposure
  maxLuminance={4.0} // Limit brightness for a night-time look
  averageLuminance={0.2} // Reduce the overall brightness perception
  adaptationRate={0.3}/>
    </EffectComposer>
  );
};
