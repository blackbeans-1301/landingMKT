module.exports = {
  siteMetadata: {
    title: `Mau-kinh-te`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Máu Kinh tế",
        short_name: "MKT",
        start_url: "/",
        background_color: "#0000",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
}
