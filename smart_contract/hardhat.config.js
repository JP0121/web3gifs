// https://eth-rinkeby.alchemyapi.io/v2/rD519FIprjpZ1QHeSQChg_4R-XMFlm6h
 
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/rD519FIprjpZ1QHeSQChg_4R-XMFlm6h',
      accounts: [ 'ecf51464c68c873675594e335a0ee4b77ac5639c4276e80cc35e8ddec0a6f40b' ]
    }
  }

}
