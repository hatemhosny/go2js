export const getUrl = (baseUrl?: string) => {
  if (baseUrl) {
    if (typeof baseUrl === 'string') {
      if (baseUrl.endsWith('/')) {
        return baseUrl.slice(0, -1);
      }
      return baseUrl;
    } else {
      throw new Error('invalid baseUrl');
    }
  }

  const buildPath = '/go2js/build/index.js';
  const metaUrl = import.meta?.url;
  const currentScriptSrc = (document?.currentScript as HTMLScriptElement)?.src;
  const locationHref = location.href;

  const url =
    metaUrl && typeof metaUrl === 'string' && !metaUrl.endsWith('.js') // https://unpkg.com/@live-codes/go2js
      ? metaUrl + buildPath
      : metaUrl && typeof metaUrl === 'string'
      ? metaUrl
      : currentScriptSrc && typeof currentScriptSrc === 'string'
      ? currentScriptSrc
      : locationHref && typeof locationHref === 'string'
      ? locationHref
      : '.';

  return url.split('/').slice(0, -1).join('/');
};
