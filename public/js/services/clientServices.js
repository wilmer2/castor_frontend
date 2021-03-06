(function () {
     angular.module('castor.services')

     .factory('clientService', ['$http', '$q', 'Backend', 
        function ($http, $q, Backend) {
          function findClient(id) {
              var deferred = $q.defer();

              $http.get(Backend.url + 'clients/' + id).then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function store(client) {
              var deferred = $q.defer();

              $http.post(Backend.url + 'clients', client).then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function update(client) {
              var deferred = $q.defer();

              $http.put(Backend.url + 'clients/' + client.id, client).then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function getClients() {
              var deferred = $q.defer();

              $http.get(Backend.url + 'clients').then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function getRentals(clientId) {
              var deferred = $q.defer();

              $http.get(Backend.url + 'clients/' +  clientId + '/rentals')
              .then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function getReservations(clientId) {
              var deferred = $q.defer();

              $http.get(Backend.url + 'clients/' + clientId + '/reservations')
              .then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function search(data) {
              var deferred = $q.defer();

              $http.post(Backend.url + 'clients/search', data)
              .then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          function deleteClient(clientId) {
              var deferred = $q.defer();

              $http.delete(Backend.url + 'clients/' + clientId).then(function (res) {
                  deferred.resolve(res.data);
              },  function (err) {
                   deferred.reject(err);
              });

              return deferred.promise;
          }

          function findByIdentityCard(identityCard) {
              var deferred = $q.defer();

              $http.get(Backend.url + 'clients/identity_card/' + identityCard)
              .then(function (res) {
                  deferred.resolve(res.data);
              }, function (err) {
                  deferred.reject(err);
              });

              return deferred.promise;
          }

          return {
            findClient: findClient,
            findByIdentityCard: findByIdentityCard,
            store: store,
            search: search,
            update: update,
            deleteClient: deleteClient,
            getClients: getClients,
            getRentals: getRentals,
            getReservations: getReservations
          }
    }])
})();