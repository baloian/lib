export function abort(error?: Error | string, signame: NodeJS.Signals = 'SIGTERM'): never {
  if (error) {
    if (error instanceof Error) {
      console.error('Aborting due to error:', error.message);
      console.error(error.stack);
    } else {
      console.error('Aborting:', error);
    }
  }
  if (typeof process !== 'undefined' && process.kill) {
    process.kill(process.pid, signame);
  }
  throw new Error('Process abort failed');
}
