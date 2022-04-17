const sideBars = [
  {
    title: 'Teknik Pembuatan Akta',   // required
    path: '/teknik-pembuatan-akta/',      // optional, link of the title, which should be an absolute path and must exist
    collapsable: false, // optional, defaults to true
    sidebarDepth: 1,    // optional, defaults to 1
    children: [
      '/',
      'struktur-akta-otentik',
      'komparisi'
    ]
  },
  
  {
    title: 'Harta Benda & Keluarga',   // required
    path: '/harta-benda-keluarga/',      // optional, link of the title, which should be an absolute path and must exist
    collapsable: false, // optional, defaults to true
    sidebarDepth: 1,    // optional, defaults to 1
    children: [
      '/',
      'waris',
      'wasiat'
    ]
  },

]

export default sideBars;