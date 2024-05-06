import { DEFAULT_HEIGHT, MAX_HEIGHT } from "../constants/common";

export const checkHeight = (height: number | undefined) => {
  if (!height) return DEFAULT_HEIGHT;
  if (height > MAX_HEIGHT) return MAX_HEIGHT;
  return height;
};
