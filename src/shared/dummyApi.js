const commonDetails = body =>
  new Promise((resolve, reject) => {
    let data = {
      meta: {success: true, code: 200},
      data: {
        vLatestAppVersion: '1.0.0',
        vLongitude: '30,01111',
        vLatitude: '76.012344',
      },
    };
    resolve({data});
  });

const signIn = body =>
  new Promise((resolve, reject) => {
    let data = {
      meta: {success: true, code: 200},
      data: {
        iUserId: 28,
        vEmail: 'amit@gmail.com',
        iVenueId: null,
        vFirstName: 'Amit',
        vLastName: 'Sajane',
        vUserName: 'blackpeacock389',
        eMaritalStatus: 'Single',
        eGender: 'Male',
        iAge: 23,
        vProfilePicture: '',
        vSocialPictureUrl:
          'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        vDeviceToken: '',
        vAccessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpVXNlcklkIjoiMjgiLCJpYXQiOjE2MjMyMTU4NDB9.TXbzGvJzps8bxYVCrijI9GIIl5OzeQ8TSK2d85YPIBE',
        vTempLoginToken: null,
        vAppVersion: '1.0.0',
        vSocialId: 113616929788793550000n,
        eSocialPlatform: 'Google',
        vSocialToken:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3MTllYjk1N2Y2OTU2YjU4MThjMTk2OGZmMTZkZmY3NzRlNzA4ZGUiLCJ0eXAiOiJKV1Qi',
        vPlatform: 'ios',
        dUpdatedDate: '2021-06-09 05:17:20',
        dCreatedDate: '2021-06-04 12:56:21',
      },
    };
    resolve({data});
  });

const logIn = body =>
  new Promise((resolve, reject) => {
    let data = {
      meta: {success: true, code: 200},
      data: {
        vEmail: 'amit@gmail.com',
        vPassword: '123456',
      },
    };
    resolve({data});
  });

const getProductList = body =>
  new Promise((resolve, reject) => {
    let data = {};

    data = {
      meta: {success: true, code: 200},
      data: {
        products: [
          {
            productid: 1,
            productName: 'RoadStar',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: '1000',
            redeme: '10',
            finalPrice: '900',
            amountsaved: '100',
          },
          {
            productid: 2,
            productName: 'RoadStar',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: '1000',
            redeme: '10',
            finalPrice: '900',
            amountsaved: '100',
          },
          {
            productid: 3,
            productName: 'RoadStar ',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: '1000',
            redeme: '10',
            finalPrice: '900',
            amountsaved: '100',
          },
          {
            productid: 4,
            productName: 'RoadStar',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: '1000',
            redeme: '10%',
            finalPrice: '900',
            amountsaved: '100',
          },
          {
            productid: 5,
            productName: 'RoadStar',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: 1000,
            redeme: '10%',
            finalPrice: 900,
            amountsaved: 100,
          },
          {
            productid: 6,
            productName: 'RoadStar',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: 1000,
            redeme: '10%',
            finalPrice: 900,
            amountsaved: 100,
          },

          {
            productid: 7,
            productName: 'RoadStar 1',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: 1000,
            redeme: '10%',
            finalPrice: 900,
            amountsaved: 100,
          },
          {
            productid: 8,
            productName: 'RoadStar',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: 1000,
            redeme: '10%',
            finalPrice: 900,
            amountsaved: 100,
          },
          {
            productid: 9,
            productName: 'RoadStar 1',
            productDescription: 'Slim fit casual shirt',
            productUrl:
              'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            totolPrice: 1000,
            redeme: '10%',
            finalPrice: 900,
            amountsaved: 100,
          },
        ],
      },
    };
    resolve({data});
  });

export default class dummyApi {
  static defaults = {
    headers: {
      common: {},
    },
  };

  static get = async (endpoint, body) => {
    let response = {};
    switch (endpoint) {
      case 'common-details':
        response = commonDetails(body);
        break;
      case 'get-products':
        response = getProductList(body);
    }

    console.log('..Dummy Endpoint Get Response', endpoint, await response);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response);
      }, 1200);
    });
  };

  static post = async (endpoint, body) => {
    let response = {};
    switch (endpoint) {
      case 'login/signin':
        response = signIn(body);
        break;
    }

    console.log('..Dummy Endpoint Post Response', endpoint, response);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response);
      }, 1200);
    });
  };
}
