interface Colors {
  reset: string;
  black: string;
  green: string;
  yellow: string;
  blue: string;
  cyan: string;
}

const colors: Colors = {
  reset: '\x1b[0m',
  black: '\x1b[30m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

export default colors;
