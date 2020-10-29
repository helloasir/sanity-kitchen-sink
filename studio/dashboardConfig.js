export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9b20fba38aaf0095803561',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-srv65yna',
                  apiId: '0124e5e8-75f2-4324-b004-af8da0fcb538'
                },
                {
                  buildHookId: '5f9b20fb22f044010779219b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nwxypxhk',
                  apiId: '261fb990-0355-4458-a5e1-2c2278a0a6cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helloasir/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nwxypxhk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
