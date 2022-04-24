import { execSync } from 'child_process';
import { getOptions } from '../.esbuildrc';

const { outfile } = getOptions();

try {
  execSync(`eslint -c ${outfile} --no-ignore ${outfile}`);
  throw new Error('ESLint should have failed');
} catch (error) {
  if (!error.stdout) {
    throw new Error('ESLint failed through no fault config');
  }
}
