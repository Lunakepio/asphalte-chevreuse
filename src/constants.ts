export const RAPIER_UPDATE_PRIORITY = -50
export const BEFORE_RAPIER_UPDATE = RAPIER_UPDATE_PRIORITY + 1
export const AFTER_RAPIER_UPDATE = RAPIER_UPDATE_PRIORITY - 1
export const spawn = {
    position: [0, 3, 0],
    rotation: [0, Math.PI / 4, 0],
}

export const maxRPM = 7000;
export const minRPM = 1500;
export const gears = [
  { ratio: 3.50, maxSpeed: 35 },  // 1st gear: Strong acceleration
  { ratio: 2.20, maxSpeed: 75 },  // 2nd gear
  { ratio: 1.60, maxSpeed: 110 }, // 3rd gear
  { ratio: 1.20, maxSpeed: 150 }, // 4th gear
  { ratio: 1.00, maxSpeed: 185 }, // 5th gear
  { ratio: 0.82, maxSpeed: 240 }, // 6th gear: Cruising & efficiency
];
