module.exports = function(username, password, walletphrase) {
    return {
        host: 'rpc.blockchain.info',
        port: 443,
        user: username,
        pass: password,
        walletpassphrase: walletphrase || null,
        ssl: true,
        sslStrict: true
    }
};