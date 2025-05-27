// next.config.js

/** @type {import('next').NextConfig} */

// This wrapper is needed because `await` can only be used in top-level ESM,
// and Next.js expects next.config.js to export an object, not a Promise.
const loadConfig = async () => {
  let userConfig = undefined;

  try {
    // Try to load ESM config first
    userConfig = await import('./v0-user-next.config.mjs');
  } catch (e) {
    try {
      // Fallback to CommonJS if ESM fails
      userConfig = await import('./v0-user-next.config.js');
    } catch (innerError) {
      // If both fail, ignore and continue
    }
  }

  const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    experimental: {
      webpackBuildWorker: true,
      parallelServerBuildTraces: true,
      parallelServerCompiles: true,
    },
  };

  if (userConfig) {
    const config = userConfig.default || userConfig;

    for (const key in config) {
      if (
        typeof nextConfig[key] === 'object' &&
        !Array.isArray(nextConfig[key])
      ) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...config[key],
        };
      } else {
        nextConfig[key] = config[key];
      }
    }
  }

  return nextConfig;
};

export default await loadConfig();
