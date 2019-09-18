// Dom7
var $$ = Dom7;

var items   = [];
// [
//   {
//     'kdbar': '01330003',
//     'nama': 'BASIC SHORT APRON BLACK',
//     'hjual': '90.000',
//     'store': '10',
//     'whouse': '20',
//     'gambar': 'https://ik.imagekit.io/aswin/upload/gambar/013300003.webp',
//   },
//   {
//     'kdbar': '01330004',
//     'nama': 'BASIC SHORT APRON MAROON',
//     'hjual': '90.000',
//     'store': '10',
//     'whouse': '20',
//     'gambar': 'https://ik.imagekit.io/aswin/upload/gambar/013300004.png',
//   },
//   {
//     'kdbar': '01330005',
//     'nama': 'BASIC SHORT APRON KHAKY',
//     'hjual': '90.000',
//     'store': '10',
//     'whouse': '20',
//     'gambar': 'https://ik.imagekit.io/aswin/upload/gambar/013300005.png',
//   },
// ];

var bBackPressed = false;

var app = new Framework7({
  root: '#app',
  id:   'com.askitchen.stockinfo',
  name: 'Stock Info',

  // App root data
  data: function () {
    return {
      // db: null,
      // username: null,
      // password: null,

      endpoint: 'https://askitchen.com/api/v1/',

    };
  },
  // App root methods
  methods: {
    
    itemExists: function(kode) {
      
      var bFound = false;

      for (var i=0; i < items.length; i++)
        if (items[i].kdbar === kode) {
          
          bFound = true;
          break;
        }
      return bFound;
    },
  },
  routes: [
    // Add your routes here
    {
      path: '/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Router instance
        // var router = this;

        // App instance
        // var app = router.app;

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/home.html',
          }
        );
      },
    }
  ],
});

var mainView = app.views.create('.view-main', {
  url: '/'
});
