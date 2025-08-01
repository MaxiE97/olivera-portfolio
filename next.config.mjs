import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esta función redirige la página de inicio a /about
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true, // Importante para que los buscadores entiendan el cambio
      },
    ];
  },

  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);