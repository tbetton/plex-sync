import Conf from 'conf';

export const config = new Conf({
  configName: '.plex-sync',
  cwd: process.cwd(),
  defaults: {
    v1: {
      users: [],
    },
  },
});

export const getConfigV1 = () => config.get('v1');
export const setConfigV1 = v1 => config.set('v1', v1);

export const del = (...args) => config.delete(...args);
export const get = (...args) => config.get(...args);
export const set = (...args) => config.set(...args);
