angryCatfishApp.service('ReservationService', function ($http, $location) {

  // the public API

  //Retrieves ALL reservations from the DB
  this.getReservations = function () {
      return $http.get('/reservation');
  };


  //Retrives reservations matching a unique _id from reservation collection in DB
  this.getReservationsByBikeID = function(bikeID){
    var config = { params: { bikeID : bikeID}};
    return $http.get('/reservation/bikeID', config);
  }

  //Retrives reservations matching a TransactionID from reservation collection in DB
  this.getReservationsByTransactionID = function(transactionID){
    var config = { params: { transactionID : transactionID}};
    return $http.get('/reservation/transactionID', config);
  }

  //Retrives reservations matching a Email from reservation collection in DB
  this.getReservationsByEmail = function(email){
    var config = { params: { email : email}};
    return $http.get('/reservation/email', config);
  }


  //Add a reservation to DB
  this.addReservation = function (reservation) {

    return $http.post('/reservation', reservation).then(function (data) {
      console.log("data back from DB after post", data);
    });

  };

  this.deleteReservation = function (id) {
    $http.delete('/reservation/' + id);
    return $http.get('/reservation');
  };



});
