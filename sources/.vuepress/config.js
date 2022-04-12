module.exports = {
  title: "Notaris Wiki",
  description: " Dokumentasi singkat seputar bidang kenotariatan. Dokumentasi ini dibuat untuk dipergunakan sebagai panduan internal Kantor Notaris Indra Pratama Putra SH, MKn.",
  dest: 'docs',

  // Sidebar
  sidebarDepth: 3,
  themeConfig: {
    sidebar: {

      // TPA
      '/teknik-pembuatan-akta/': [
        '',
        'struktur-akta-otentik',
        'komparisi'
      ],

      // Root Website
      '/': [
        '',
      ]
    }
  }
}