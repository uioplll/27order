(function () {
  const registry = {
    sites: {},
    pages: {},
    extras: {},
    extrasBySite: {},

    registerSite(key, site, pages, extras) {
      this.sites[key] = { ...site, key };
      Object.assign(this.pages, pages);
      Object.assign(this.extras, extras);
      this.extrasBySite[key] = Object.keys(extras);
    }
  };

  window.ARG_REGISTRY = registry;
})();
