var bitcoin = require('bitcoin');

var Blockchain = function(config) {
    if (config && (config.username && config.password)) {
    	this.username = config.username;
        this.password = config.password;
        this.client = new bitcoin.Client({
            host: 'rpc.blockchain.info',
            port: 443,
            user: this.username,
            pass: this.password,
            walletpassphrase: config.walletphrase || null,
            ssl: true,
            sslStrict: true
        });
    } else {
        throw new Error('Failed to instantiate, config is required');
    }

};

Blockchain.prototype.HandleError = function(err, callback) {
    callback(err, null);
};

Blockchain.prototype.getBalance = function(confirmations, callback) {
    var self = this;
    if (confirmations < -1) {
        self.HandleError('No confirmation amount supplied', callback);
    } else {
        self.client.getBalance('*', confirmations, function(err, balance) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    balance: balance
                });
            }
        });
    }
};

Blockchain.prototype.getInfo = function(callback) {
    var self = this;
    self.client.getInfo(function(err, info) {
        if (err) {
            self.HandleError(err, callback);
        } else {
            callback(null, {
                info: info
            });
        }
    });
};

Blockchain.prototype.listAccounts = function(callback) {
    var self = this;
    self.client.listAccounts(function(err, accounts) {
        if (err) {
            self.HandleError(err, callback);
        } else {
            callback(null, {
                accounts: accounts
            });
        }
    });
};

Blockchain.prototype.getAddressesByAccount = function(account, callback) {
    var self = this;
    if (account) {
        self.client.getAddressesByAccount(account, function(err, addresses) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    addresses: addresses
                });
            }
        });
    } else {
        self.HandleError('No account supplied', callback);
    }
};

Blockchain.prototype.listReceivedByAccount = function(account, callback) {
    var self = this;
    if (account) {
        self.client.listReceivedByAccount(function(err, received) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    received: received
                });
            }
        });
    } else {
        self.HandleError('No account supplied', callback);
    }
};

Blockchain.prototype.listTransactions = function(callback) {
    var self = this;
    self.client.listTransactions(function(err, transactions) {
        if (err) {
            self.HandleError(err, callback);
        } else {
            callback(null, {
                transactions: transactions
            });
        }
    });
};

Blockchain.prototype.validateAddress = function(address, callback) {
    var self = this;
    if (address) {
        self.client.validateAddress(address, function(err, validation) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    validation: validation
                });
            }
        });
    } else {
        self.HandleError('No address specified', callback);
    }
};

Blockchain.prototype.getTransaction = function(txid, callback) {
    var self = this;
    if (txid) {
        self.client.getTransaction(txid, function(err, transaction) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    transaction: transaction
                });
            }
        });
    } else {
        self.HandleError('No txid specified', callback);
    }
};

Blockchain.prototype.sendFrom = function(to, from, amount, callback) {
    var self = this;
    if (to && from && amount) {
        self.client.sendFrom(from, to, amount, function(err, txid) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    txid: txid
                });
            }
        });
    } else {
        self.HandleError('Need to, from and amount', callback);
    }
};

Blockchain.prototype.move = function(to, from, amount, callback) {
    var self = this;
    if (from && to && amount) {
        self.client.move(from, to, amount, function(err, txid) {
            if (err) {
                self.HandleError(err, callback);
            } else {
                callback(null, {
                    txid: txid
                });
            }
        });
    } else {
        self.HandleError('Need to, from and amount', callback);
    }
};

module.exports = Blockchain;
