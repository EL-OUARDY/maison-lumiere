import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

// Register custom eases
CustomEase.create('CustomEaseIn', 'M0,0 C0.198,0 1,0.1 1,1');
CustomEase.create('CustomEaseOut', 'M0,0 C0,0.202 0.204,1 1,1');
CustomEase.create('CustomEaseInOut', 'M0,0 C0.496,0.004 0,1 1,1');

// Export the ease names for reuse
export const Eases = {
  in: 'CustomEaseIn',
  out: 'CustomEaseOut',
  inOut: 'CustomEaseInOut',
};
