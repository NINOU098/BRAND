// next.config.js

module.exports = {
  // Ta configuration Next.js ici, sans la propriété 'i18n'
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // N'oublie pas d'ajouter les autres configurations spécifiques à ton projet si nécessaire
};
