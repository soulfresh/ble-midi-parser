import log from './logger';

export default name => (...args) => log(`${name}: ${JSON.stringify(args)}`);
