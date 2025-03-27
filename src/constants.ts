export const RAPIER_UPDATE_PRIORITY = -50
export const BEFORE_RAPIER_UPDATE = RAPIER_UPDATE_PRIORITY + 1
export const AFTER_RAPIER_UPDATE = RAPIER_UPDATE_PRIORITY - 1
export const spawn = {
    position: [-7, 2, -130],
    rotation: [0, -Math.PI / 2, 0],
}

export const maxRPM = 7000;
export const minRPM = 1500;
export const gears = [
  { ratio: 4, maxSpeed: 40 }, // 1st gear: High torque, low speed
  { ratio: 2.8, maxSpeed: 80 }, // 2nd gear
  { ratio: 2.2, maxSpeed: 120 }, // 3rd gear
  { ratio: 1.6, maxSpeed: 160 }, // 4th gear
  { ratio: 1.2, maxSpeed: 220 }, // 5th gear
  { ratio: 1.0, maxSpeed: 280 }, // 6th gear: Low torque, high speed
];