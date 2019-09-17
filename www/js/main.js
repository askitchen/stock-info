// Dom7
var $$ = Dom7;

var items   = //[];
[
  {
    'kdbar': '01330003',
    'nama': 'BASIC SHORT APRON BLACK',
    'hjual': '90.000',
    'store': '10',
    'whouse': '20',
    'gambar': 'https://ik.imagekit.io/aswin/upload/gambar/013300003.webp',
  },
  {
    'kdbar': '01330004',
    'nama': 'BASIC SHORT APRON MAROON',
    'hjual': '90.000',
    'store': '10',
    'whouse': '20',
    'gambar': 'https://ik.imagekit.io/aswin/upload/gambar/013300004.png',
  },
  {
    'kdbar': '01330005',
    'nama': 'BASIC SHORT APRON KHAKY',
    'hjual': '90.000',
    'store': '10',
    'whouse': '20',
    'gambar': 'https://ik.imagekit.io/aswin/upload/gambar/013300005.png',
  },
];

var bBackPressed = false;

var app = new Framework7({
  root: '#app',
  id:   'com.askitchen.stockinfo',
  name: 'Stock Info',
  theme: 'auto', // Automatic theme detection
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

      total_items: 0, // total item cart

      // total: 0,       // sub total
      // tax: 0,         // pajak
      // shipcost: 0,    // ongkos kirim
      // addcost: 0,     // payment gateway
      // gtotal: 0,      // total

      // currentDate: null,
      // lastURL: null,
      
      // bLogedIn: false,
      // token: null,
      // push: null,
    };
  },
  // App root methods
  methods: {
    
    itemExists: function(kode) {
      return true;
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


// $$('.barcode-scan1').on('click', function () {
     
//   bBackPressed = true;

//   cordova.plugins.barcodeScanner.scan(
//     function (result) {
//         app.methods.findItem(result.text);
//         // app.dialog.alert("We got a barcode\n" +
//         //       "Result: " + result.text + "\n" +
//         //       "Format: " + result.format + "\n" +
//         //       "Cancelled: " + result.cancelled);
//     },
//     function (error) {
//         app.dialog.alert("Scanning failed: " + error);
//     },
//     {
//         preferFrontCamera : false, // iOS and Android
//         showFlipCameraButton : false, // iOS and Android
//         showTorchButton : true, // iOS and Android
//         torchOn: true, // Android, launch with the torch switched on (if available)
//         saveHistory: false, // Android, save scan history (default false)
//         prompt : "Place a barcode inside the scan area", // Android
//         resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
//         formats : "EAN_13,CODE_128,QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
//         orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
//         disableAnimations : true, // iOS
//         disableSuccessBeep: false // iOS and Android
//     }
//   );
// });

// $$(document).on('backbutton', function (e) {
//   e.preventDefault();
//   // for example, based on what and where view you have
//   if (app.views.main.router.url == '/') {
//     navigator.app.exitApp();
//   } else {
//     mainView.router.back();
//   }
// });
