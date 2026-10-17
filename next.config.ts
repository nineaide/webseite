import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Resolve route metadata before sending HTML, so titles, descriptions and
  // canonicals are in <head> for readers that never execute JavaScript.
  htmlLimitedBots: /.*/,
};

export default nextConfig;
