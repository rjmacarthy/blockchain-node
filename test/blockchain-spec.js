var blockchain = require('../index');
var bitcoin = require('bitcoin');

describe('blockchain instantiation', function() {

    it('should throw an error without a username and password', function() {
        expect(function() {
            new blockchain();
        }).toThrow();
    });

    it('should be able to instantiate with username and password', function() {
        var bc = new blockchain({
            username: 'username',
            password: 'password'
        });
        expect(bc).toBeDefined();
        expect(bc.username).toBe('username');
        expect(bc.password).toBe('password');
    });

});


describe('blockchain suite', function() {

    var bc = new blockchain({
        username: 'a49adefc-a4dc-42ab-b3dc-68b2fc6fa0f8',
        password: 'tinkerisnt'
    });

    it('should be able to get info', function(done) {
        bc.getInfo(function(err, response) {
            expect(response.info).toBeDefined();
            expect(response.info.balance).toBeDefined();
            done();
        });
    });

    it('should be able to get the balance', function(done) {
        bc.getBalance(1, function(err, response) {
            expect(response.balance).toBeDefined();
            done();
        });
    });

    it('should be able to list accounts', function(done) {
        bc.listAccounts(function(err, response) {
            expect(response.accounts).toBeDefined();
            done();
        });
    });

    it('should be able to list transactions', function(done) {
        bc.listTransactions(function(err, response) {
            expect(response.transactions).toBeDefined();
            done();
        });
    });

    it('should be able to validate an address', function(done) {
        bc.validateAddress('13VJhb7gs5LiWmXsDR7ja4i8Bu2Yeoyb4E', function(err, response) {
            expect(response.valiation).toBeDefined();
            done();
        });
    });

    xit('should be able to get addresses by account', function(done) {
        bc.getAddressesByAccount('address', function(err, response) {
            expect(response.addresses).toBeDefined();
            done();
        });
    });

    xit('should be able to list recieved by account', function(done) {
        bc.listReceivedByAccount('address', function(err, response) {
            expect(response.received).toBeDefined();
            done();
        });
    });

    xit('should be able to get a transaction', function(done) {
        bc.getTransaction('txid', function(err, response) {
            expect(response.valiation).toBeDefined();
            done();
        });
    });

    //TODO

    //Send from test
    //Mode from test

});