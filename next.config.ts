import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/avatar/**',
        search: '?s=300&d=404',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/calblueprint-prod/images/**',
        search: '',
      },
    ],
  },
  sassOptions: {
    additionalData: `
      /* Main Blueprint Blue color */
      $bp-blue:        #187BE5;
      $bp-blue-80:     rgba($bp-blue, 0.80);
      $bp-blue-60:     rgba($bp-blue, 0.60);
      $bp-blue-50:     rgba($bp-blue, 0.50);
      $bp-blue-40:     rgba($bp-blue, 0.40);
      $bp-blue-20:     rgba($bp-blue, 0.20);
      $bp-blue-10:     rgba($bp-blue, 0.10);
      $bp-blue-5:      rgba($bp-blue, 0.05);

      $dark-gray:      #2C3E50;
      $dark-gray-80:   rgba($dark-gray, 0.80);
      $dark-gray-70:   rgba($dark-gray, 0.70);
      $dark-gray-60:   rgba($dark-gray, 0.60);
      $dark-gray-50:   rgba($dark-gray, 0.50);
      $dark-gray-40:   rgba($dark-gray, 0.40);
      $dark-gray-20:   rgba($dark-gray, 0.20);
      $dark-gray-10:   rgba($dark-gray, 0.10);

      $smoke:          #c0c7cf;
      $smoke-80:       rgba($smoke, 0.80);
      $smoke-60:       rgba($smoke, 0.60);
      $smoke-40:       rgba($smoke, 0.40);
      $smoke-20:       rgba($smoke, 0.20);

      $white:          #F9FAFC;
      $white-90:       rgba($white, 0.90);
      $white-80:       rgba($white, 0.80);
      $white-60:       rgba($white, 0.60);
      $white-50:       rgba($white, 0.50);
      $white-40:       rgba($white, 0.40);
      $white-20:       rgba($white, 0.20);
      $white-10:       rgba($white, 0.10);

      $red:            #E74C3C;

      $off-white:      #F8F8F8;


      $bptext-font:    "BPText";
      $sans-serif:     "Roboto", "Inter", sans-serif;

      $breakpt-mobile: 600px;
    `,
  },
};

export default nextConfig;
