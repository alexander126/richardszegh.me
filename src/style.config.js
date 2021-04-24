export const PRIMARY_COLOR = '#0a1147';
export const SECONDARY_COLOR = '#fff';

export const HEADER_HEIGHT = 75;

export function getButtonFontSize(size) {
  switch (size) {
    case 'large':
      return '1.25rem';

    case 'small':
      return '1rem';

    default:
      return '1.15rem';
  }
}

export function getButtonVerticalPadding(size) {
  switch (size) {
    case 'large':
      return '0.7rem';

    case 'small':
      return '0.45rem';

    default:
      return '0.65rem';
  }
}

export function getButtonHorizontalPadding(size) {
  switch (size) {
    case 'large':
      return '1.5rem';

    case 'small':
      return '1rem';

    default:
      return '1.35rem';
  }
}

export function getSectionPadding(size) {
  switch (size) {
    case 'large':
      return '48px';

    case 'small':
      return '24px';

    default:
      return '32px';
  }
}
