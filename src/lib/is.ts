/**
 * 'target' is in 'items'
 */
const is = <T extends unknown>(target: T, ...items: T[]): target is T => {
  for (const item of items) {
    if (target === item) {
      return true;
    }
  }

  return false;
};

export { is };
