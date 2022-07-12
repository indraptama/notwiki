module.exports = {
  base: '/notwiki/',
  title: "NotWiki",
  description:
    " Dokumentasi singkat seputar bidang kenotariatan. Dokumentasi ini dibuat untuk dipergunakan sebagai panduan internal Kantor Notaris Indra Pratama Putra SH, MKn.",
  dest: "docs",

  // Sidebar
  sidebarDepth: 3,
  themeConfig: {
    smoothScroll: true,
    sidebar: {
      // Harta Benda
      "/harta-benda-keluarga/": ["", "waris", "wasiat"],

      // Badan Usaha dan Badan Hukum
      "/badan-usaha-badan-hukum/": ['',"perseroan-terbatas"],

      // TPA
      "/teknik-pembuatan-akta/": ["", "struktur-akta-otentik", "komparisi"],

      // Root Website
      "/": [""],
    },
  },
};
