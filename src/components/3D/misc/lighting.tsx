import { useControls as useLeva } from "leva";

export const Lighting = () => {
  const ambientLightControls = useLeva(
    "AmbientLight",
    {
      intensity: { value: 0.2, min: 0, max: 2, step: 0.1 },
      color: { value: "#91ffe6" },
    },
    {
      collapsed: true,
    },
  );

  return (
    <>
      <ambientLight {...ambientLightControls} />
    </>
  );
};
