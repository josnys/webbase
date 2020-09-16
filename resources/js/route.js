var Ziggy = {
     namedRoutes: [],
     baseUrl: 'http://posadmin.test/',
     baseProtocol: 'http',
     baseDomain: 'posadmin.test',
     basePort: false,
     defaultParameters: []
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
     for (var name in window.Ziggy.namedRoutes) {
          Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
     }
}

export {
     Ziggy
}
