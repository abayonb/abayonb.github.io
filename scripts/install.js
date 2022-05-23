import {execSync} from 'child_process';

const packages = ['@lookiero/aurora-tokens', '@lookiero/aurora-iconfont', '@lookiero/aurora'];

const removeCommand = /^win/i.test(process.platform) ? 'rmdir /s /q' : 'rm -rf';

const clearEnvironment = () => {
  console.log('♻️ Removing node_modules ...');
  execSync(`${removeCommand} node_modules`, {
    stdio: 'inherit',
  });
};

// eslint-disable-next-line no-unused-vars
const removeLinkPackages = () => {
  for (const packageItem of packages) {
    execSync(`$npm_execpath unlink ${packageItem}`, {
      stdio: 'inherit',
    });
  }
};

const createLinksPackages = () => {
  for (const packageItem of packages) {
    execSync(`$npm_execpath link ${packageItem}`, {
      stdio: 'inherit',
    });
  }
};

const install = () => {
  execSync(`$npm_execpath install`, {
    stdio: 'inherit',
  });
};

(() => {
  clearEnvironment();
  // removeLinkPackages();
  createLinksPackages();
  install();
})();
