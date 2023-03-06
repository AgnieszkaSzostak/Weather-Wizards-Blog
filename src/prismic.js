import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'blog-application-react-routing'
export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5aQUVaX3hBQUFKcC1jMHhW.77-9NjAA77-977-9Gu-_ve-_vU0-77-9c--_vSM0bSDvv73vv73vv73vv73vv71Ace-_ve-_vTfvv73vv73vv71a',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'homepage',
      path: '/',
    },       
    {
      type: 'category',
      path: '/category',
    },
    {
      type: 'post',
      path: '/post/:uid',
    },

  ],
})