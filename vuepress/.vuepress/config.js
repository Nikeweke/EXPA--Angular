module.exports = {
  title: 'Angular',
  description: 'Experience from angular world',
  base: '/EXPA--Angular/',
  dest: '../docs',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: true,
        children: [
          '/intro/angular-cli.md',
          '/intro/angular-project.md',
          '/intro/typescript.md',
        ]
      },
      'optimization-of-code.md',
      'templates-syntax.md',
      'forms.md',
      'http.md',
      'props-input-and-output.md',
      'services.md',
      'routing.md',
      'decorators.md',
      'animation.md',
    ]
  }
}