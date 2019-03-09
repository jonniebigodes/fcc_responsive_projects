module.exports={
    siteMetadata: {
        title: `FCC Responsive Challenges`,
        description: `Implementation of the responsive challenges for FCC`,
        author: `jonniebigodes`,
      },
      plugins:[
        `gatsby-plugin-react-helmet`,
        
        {
          resolve:`gatsby-plugin-styled-components`,
          options:{
            minify: false,
          }
        }

      ]
}