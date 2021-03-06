const version = '0_6_0';

export const Const = {
  version,
  defaultUserId: 'user',
  defaultStorageKey: `firebase://arcs-storage.firebaseio.com/AIzaSyBme42moeI-2k8WgXh-6YK_wYyjEXo4Oz8/${version}`,
  defaultManifest: `https://$particles/canonical.manifest`,
  launcherSuffix: `-launcher`,
  LOCALSTORAGE: {
    user: `${version}-user`,
    storage: `${version}-storage`
  },
  SHARE: {
    private: 1,
    self: 2,
    friends: 3
  },
  STORES: {
    boxed: 'BOXED',
    my: 'PROFILE',
    shared: 'FRIEND'
  }
};
