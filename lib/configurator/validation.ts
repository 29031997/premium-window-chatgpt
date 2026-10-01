import type { WindowConfiguration } from "@/types/configurator";

export const LIMITS = {
  width: { min: 600, max: 5200 },
  height: { min: 600, max: 3000 },
  section: { min: 300, max: 1800 },
};

export function validateConfiguration(configuration: WindowConfiguration) {
  const errors: string[] = [];
  if (configuration.width < LIMITS.width.min || configuration.width > LIMITS.width.max) {
    errors.push(`Ширина должна быть от ${LIMITS.width.min} до ${LIMITS.width.max} мм.`);
  }
  if (configuration.height < LIMITS.height.min || configuration.height > LIMITS.height.max) {
    errors.push(`Высота должна быть от ${LIMITS.height.min} до ${LIMITS.height.max} мм.`);
  }
  const sectionTotal = configuration.sections.reduce((sum, section) => sum + section.width, 0);
  if (Math.abs(sectionTotal - configuration.width) > 2) {
    errors.push("Сумма ширин створок должна совпадать с общей шириной окна.");
  }
  return errors;
}
