import {
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_HEIGHT,
  MIN_WIDTH,
} from "../constants/common";

export const checkHeight = (height: number | undefined) => {
  if (!height) return DEFAULT_HEIGHT;
  if (height > MAX_HEIGHT) return MAX_HEIGHT;
  if (height < MIN_HEIGHT) return MIN_HEIGHT;
  return height;
};

export const checkWidth = (width: number | undefined) => {
  if (!width) return DEFAULT_WIDTH;
  if (width > MAX_WIDTH) return MAX_WIDTH;
  if (width > MIN_WIDTH) return MIN_WIDTH;
  return width;
};
