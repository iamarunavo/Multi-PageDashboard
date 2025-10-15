/**
 * Utility function to conditionally join class names
 * @param {...(string|undefined|null|boolean|object)} classes - Class names to join
 * @returns {string} - Joined class names
 */
export function cn(...classes) {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim();
}

/**
 * Utility function to create variant classes based on conditions
 * @param {object} variants - Object containing variant classes
 * @param {string} variant - The variant to apply
 * @param {string} base - Base classes to always apply
 * @returns {string} - Combined class names
 */
export function createVariantClasses(variants, variant, base = '') {
  return cn(base, variants[variant]);
}

/**
 * Utility function to create size classes
 * @param {object} sizes - Object containing size classes
 * @param {string} size - The size to apply
 * @param {string} base - Base classes to always apply
 * @returns {string} - Combined class names
 */
export function createSizeClasses(sizes, size, base = '') {
  return cn(base, sizes[size]);
}
