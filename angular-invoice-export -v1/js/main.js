angular.module('invoicing', [])

// The default logo for the invoice
.constant('DEFAULT_LOGO', 'images/metaware_logo.png')

// The invoice displayed when the user first uses the app
.constant('DEFAULT_INVOICE', {
  tax: 13.00,
  invoice_number: 10,
  customer_info: {
    name: 'AMANI INDUSTRY LIMITED',
    address1: 'Limbe Blantyre',
    address2: 'Malawi',
    postal: '5833',
	phone: '123345678'
  },
  company_info: {
    name: 'M/S. PHOENIX EXPORTS',
    address1: '318, Shiv Shakti Paradise',
    address2: 'Central Spine, VidhyaNagar,',
	address3: 'Jaipur (India) - 302023',
    telefax: 'TELEFAX : +91-141-2232036'
  },
  items:[
    { Description: 'Corn', Kind: 'Grits', Num: 0 , qty: 0, rate: 9.95 }
  ]
})

// Service for accessing local storage
.service('LocalStorage', [function() {

  var Service = {};

  // Returns true if there is a logo stored
  var hasLogo = function() {
    return !!localStorage['logo'];
  };

  // Returns a stored logo (false if none is stored)
  Service.getLogo = function() {
    if (hasLogo()) {
      return localStorage['logo'];
    } else {
      return false;
    }
  };

  Service.setLogo = function(logo) {
    localStorage['logo'] = logo;
  };

  // Checks to see if an invoice is stored
  var hasInvoice = function() {
    return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
  };

  // Returns a stored invoice (false if none is stored)
  Service.getInvoice = function() {
    if (hasInvoice()) {
      return JSON.parse(localStorage['invoice']);
    } else {
      return false;
    }
  };

  Service.setInvoice = function(invoice) {
    localStorage['invoice'] = JSON.stringify(invoice);
  };

  // Clears a stored logo
  Service.clearLogo = function() {
    localStorage['logo'] = '';
  };

  // Clears a stored invoice
  Service.clearinvoice = function() {
    localStorage['invoice'] = '';
  };

  // Clears all local storage
  Service.clear = function() {
    localStorage['invoice'] = '';
    Service.clearLogo();
  };

  return Service;

}])

.service('Currency', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'British Pound (£)',
        symbol: '£'
      },
      {
        name: 'Canadian Dollar ($)',
        symbol: 'CAD $ '
      },
      {
        name: 'Euro (€)',
        symbol: '€'
      },
      {
        name: 'Indian Rupee (₹)',
        symbol: '₹'
      },
      {
        name: 'Norwegian krone (kr)',
        symbol: 'kr '
      },
      {
        name: 'US Dollar ($)',
        symbol: '$'
      }
    ]
  }

  return service;
  
}])

.service('Bank', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'YES BANK LTD.',
        details: 'Account Name- PHOENIX EXPORTS \
				  <br>Account No - 004086700000731 \
				  <br>swiftCode - YESBINBB',
		address: '9/1/1, M.G. Road, Near Treasure Island, Indore- MP, INDIA',
		phone: '+91-731-4275105',
		accountName: 'PHOENIX EXPORTS',
		accountNum: '004086700000731',
		swiftCode: 'YESBINBB'
      },
      {
        name: 'AXIS BANK LTD.',
		details: 'Account Name- PHOENIX EXPORTS \
				  <br>Account No - 789010200000055\
				  <br>swiftCode - AXISINBBXXX',
		address: 'Ground Floor and Basement, A-8,RAMA HERITAGE BUILDING,JAIPUR,RAJSTHAN,INDIA,302012',
		phone: '+91-141-2232659 / 677 / 751',
		accountName: 'PHOENIX EXPORTS',
		accountNum: '789010200000055',
		swiftCode: 'AXISINBBXXX'
      }
    ]
  }

  return service;
  
}])

.service('Origin', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'India'
      },
      {
        name: 'Egypt'
      },
      {
        name: 'Turkey'
      },
      {
        name: 'Indonesia'
      },
      {
        name: 'Malaysia'
      },
      {
        name: 'Vietnam'
      }  
    ]
  }

  return service;
  
}])
  
.service('Destination', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'Egypt'
      },
      {
        name: 'Jordan'
      },
	  {
        name: 'Sudan'
      },
	  {
        name: 'UAE'
      },
  	  {
        name: 'South Africa'
      },
  	  {
        name: 'Kenya'
      },
  	  {
        name: 'Tanzania'
      },
  	  {
        name: 'Ethiopia'
      },
	  {
        name: 'Nigeria'
      },
  	  {
        name: 'Algeria'
      },
  	  {
        name: 'Morocco'
      },
  	  {
        name: 'Mozambique'
      },
  	  {
        name: 'Hungary'
      }, 
  	  {
        name: 'Mexcio'
      }, 
  	  {
        name: 'Ecuador'
      }, 
  	  {
        name: 'Romania'
      }, 
  	  {
        name: 'Malaysia'
      },
  	  {
        name: 'Philippines'
      },
  	  {
        name: 'Vietnam'
      }	  
    ]
  }

  return service;
  
}])

.service('DischargePort', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'Alexandria Port'
      },
      {
        name: 'El Dekheila'
      },
      {
        name: 'Damietta Port'
      },
      {
        name: 'Aqaba'
      },
      {
        name: 'Port Sudan'
      },
      {
        name: 'Jebel Ali Port'
      },
      {
        name: 'Durban'
      },
      {
        name: 'Mombassa'
      },
      {
        name: 'Dar-es-salam'
      },
      {
        name: ' Addis Ababa'
      },
      {
        name: 'Djibouti'
      },      
	  {
        name: 'Lagos'
      },
      {
        name: 'Tincan'
      },
      {
        name: 'Algers'
      },
      {
        name: 'Casablanca'
      },
      {
        name: 'Beira'
      },
      {
        name: 'Koper'
      },
      {
        name: 'manzanillo'
      },
      {
        name: 'Veracruz'
      },
      {
        name: 'Guayaquil'
      },
      {
        name: 'Constanta'
      },      
	  {
        name: 'Port Klang'
      },
	  {
        name: 'Penang'
      },
	  {
        name: 'Manila'
      },
	  {
        name: 'Catlai'
      },
	  {
        name: 'Hanoi'
      }	  
    ]
  }

  return service;
  
}])

.service('DeliveryTerm', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'CIF'
      },
      {
        name: 'CNF'
      },
      {
        name: 'FOB'
      },
      {
        name: 'CFR'
      },
      {
        name: 'FOR'
      },
      {
        name: 'EXW'
      },
      {
        name: 'CIP'
      }
    ]
  }

  return service;
  
}])

.service('LoadingPort', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'Mundra Port'
      },
      {
        name: 'Nhavasheva Port'
      },
      {
        name: 'Kolkata Port'
      },
      {
        name: 'Chennai Port'
      },
      {
        name: 'Vizag Port'
      },
      {
        name: 'Hazira Port'
      },
      {
        name: 'Any Indian Port'
      }	  
    ]
  }

  return service;
  
}])

.service('PaymentTerm', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: '100% Scan copy of the documents'
      },
      {
        name: '20% Advance and balance against scan copy of the docs'
      },
      {
        name: '50% Advance and balance against scan copy of the docs'
      },
      {
        name: '25% Advance and balance against scan copy of the docs'
      },
      {
        name: 'CAD- Cash Against Documents'
      },	
      {
        name: 'Irrevocable LC at sight'
      },
      {
        name: '100% Advance Payment'
      },
      {
        name: 'DP at Sight through Bank'
      },
      {
        name: 'DA 30 days through bank'
      }	  
    ]
  }

  return service;
  
}])

.service('ReceiptPlace', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'By Pre Carrier'
      },
      {
        name: 'Place 2'
      }
    ]
  }

  return service;
  
}])

.service('ProductList', [function(){

  var service = {};

  service.all = function() {
    return [
    { Desciption: 'Corn', Kind: 'Grits', Numr: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Non GMO Soya Lecithin', Kind: 'Food Grade', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Soya Lecithin', Kind: 'Food Grade', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Non GMO Soya Lecithin', Kind: 'Powder', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Soya', Kind: 'TVP', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Maize Starch ', Kind: 'Food Grade', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Maize Starch ', Kind: 'Technical Grade', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Dextrose Monohydrate', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Maltodextrin', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Defatted Soya Flour ', Kind: 'Toasted', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Defatted Soya Flour', Kind: 'Untoasted', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Full Fat Soya Flour ', Kind: 'Enzyme Active /Inactive', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Sorbitol 70% ', Kind: 'Non Crystalline', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Glycerine 99.5%', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Liquid Glucose', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Polyglycerol Polyricinoleate (PGPR)', Kind: '', Num: 0 , qty: 0, rate: 9.95 },	
	{ Desciption: 'Sorbitan Mono Stearate (SMS)', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Glycerol Mono Stearate (GMS)', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Sorbitan Mono Oleate (SMO)', Kind: '', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Steam Activated Carbon (Coconut Shell)', Kind: 'Granular', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Steam Activated Carbon (Coal Based)', Kind: 'Granular', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Steam Activated Carbon (Coal Based)', Kind: 'Powder', Num: 0 , qty: 0, rate: 9.95 },
	{ Desciption: 'Salt Tablets', Kind: '', Num: 0 , qty: 0, rate: 9.95 }
    ]
  }

  return service;
  
}])
// Main application controller
.controller('InvoiceCtrl', ['$scope', '$http', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', 'LocalStorage', 'Currency', 'Bank', 'Origin', 'Destination', 'LoadingPort', 'DischargePort', 'DeliveryTerm', 'PaymentTerm', 'ReceiptPlace','ProductList',
  function($scope, $http, DEFAULT_INVOICE, DEFAULT_LOGO, LocalStorage, Currency, Bank, Origin, Destination, LoadingPort, DischargePort, DeliveryTerm, PaymentTerm, ReceiptPlace , ProductList) {

  // Set defaults
  $scope.currencySymbol = '$';
  $scope.accountName = 'PHOENIX EXPORTS';
  $scope.accountNum = '004086700000731';
  $scope.CountryOrigin = 'India';
  $scope.DeliveryTerm = 'CIF';
  $scope.CountryDestination = 'India';
  $scope.LoadingPort = 'Any Indian';
  //$scope.DischargePort = 'Aqaba';
  $scope.ReceiptPlace = 'By Pre-carrier';
  $scope.logoRemoved = false;
  $scope.printMode   = false;

  (function init() {
    // Attempt to load invoice from local storage
    !function() {
      var invoice = LocalStorage.getInvoice();
      $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;
    }();

    // Set logo to the one from local storage or use default
    !function() {
      var logo = LocalStorage.getLogo();
      $scope.logo = logo ? logo : DEFAULT_LOGO;
    }();

    $scope.availableCurrencies = Currency.all();
	$scope.bankDetails = Bank.all();
	$scope.availableOrigins = Origin.all();
	$scope.availableDestinations = Destination.all();
	$scope.LoadingPorts = LoadingPort.all();
	$scope.DischargePorts = DischargePort.all();
	$scope.DeliveryTerms = DeliveryTerm.all();
	$scope.PaymentTerms = PaymentTerm.all();
	$scope.ReceiptPlaces = ReceiptPlace.all();
	$scope.availableProducts = ProductList.all();

  })()
  // Adds an item to the invoice's items
  $scope.addItem = function() {
    $scope.invoice.items.push({ qty:0, rate:0, description:"", Num:0, kind:""  });
  }

  // Toggle's the logo
  $scope.toggleLogo = function(element) {
    $scope.logoRemoved = !$scope.logoRemoved;
    LocalStorage.clearLogo();
  };

  // Triggers the logo chooser click event
  $scope.editLogo = function() {
    // angular.element('#imgInp').trigger('click');
    document.getElementById('imgInp').click();
  };

  $scope.printInfo = function() {
    window.print();
  };

  // Remotes an item from the invoice
  $scope.removeItem = function(item) {
    $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
  };

  // Calculates the sub total of the invoice
  $scope.invoiceSubTotal = function() {
    var total = 0.00;
    angular.forEach($scope.invoice.items, function(item, key){
      total += (item.qty * item.cost);
    });
    return total;
  };

  // Calculates the tax of the invoice
  $scope.calculateTax = function() {
    return (($scope.invoice.tax * $scope.invoiceSubTotal())/100);
  };

  // Calculates the grand total of the invoice
  $scope.calculateGrandTotal = function() {
    saveInvoice();
    return $scope.calculateTax() + $scope.invoiceSubTotal();
  };

  // Clears the local storage
  $scope.clearLocalStorage = function() {
    var confirmClear = confirm('Are you sure you would like to clear the invoice?');
    if(confirmClear) {
      LocalStorage.clear();
      setInvoice(DEFAULT_INVOICE);
    }
  };

  // Sets the current invoice to the given one
  var setInvoice = function(invoice) {
    $scope.invoice = invoice;
    saveInvoice();
  };

  // Reads a url
  var readUrl = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('company_logo').setAttribute('src', e.target.result);
        LocalStorage.setLogo(e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  };

  // Saves the invoice in local storage
  var saveInvoice = function() {
    LocalStorage.setInvoice($scope.invoice);
  };

  // Runs on document.ready
  angular.element(document).ready(function () {
    // Set focus
    document.getElementById('invoice-number').focus();

    // Changes the logo whenever the input changes
   // document.getElementById('imgInp').onchange = function() {
   //   readUrl(this);
   // };
  });

}])
