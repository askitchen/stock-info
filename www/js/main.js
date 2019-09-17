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
  theme: 'md', // Automatic theme detection
  init: true,
  initOnDeviceReady: true,

  touch: {
    disableContextMenu: false,
  },
  
  // App root data
  data: function () {
    return {
      // db: null,
      username: null,
      password: null,

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
    addItem: function(kode, qty) {
      
      var bFound = false;

      for (var i=0; i < items.length; i++)
        if (items[i].kdbar === kode) {
          
          bFound = true;
          items[i].qty += parseInt(qty);
          break;
        }

      if (!bFound) {
        items.push({ kdbar: kode, qty: parseInt(qty) })
      }
      
      // hitung total
      // app.methods.calcTotal();
    },
    deleteItem: function(kode) {
      
      for (var i =0; i < items.length; i++)
        if (items[i].kdbar === kode) {
          items.splice(i,1);
          break;
        }
      // app.methods.calcTotal();
    },
  
  },
  on: {

    init: function () { // sama dengan onDeviceReady
    
    }
  },
  routes: [
    // Add your routes here
    {
      path: '/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Router instance
        var router = this;

        // App instance
        var app = router.app;

        // Show Preloader
        // app.preloader.show();

        // app.request.getJSON( app.data.endpoint + 'dashboard', function(res) {

          // Hide Preloader
          // app.preloader.hide();

          // console.log(res)
          // var data = JSON.parse(res)
          
          // Resolve route to load page
          resolve(
            {
              componentUrl: './pages/home.html',
            },
            // {
            //   context: {
            //     banner: res.banner,
            //     data: res.categories,
            //   }
            // }
          );

        // });
      },
    }
  ],
});

var mainView = app.views.create('.view-main', {
  url: '/'
});


$$(document).on('backbutton', function (e) {
  e.preventDefault();
  // for example, based on what and where view you have
  if (app.views.main.router.url == '/') {
    navigator.app.exitApp();
  } else {
    mainView.router.back();
  }
});
