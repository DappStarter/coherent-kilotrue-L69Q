require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember honey hockey knife broken type'; 
let testAccounts = [
"0xe6ac7249e5c9ffd703fbddc5ceef2b07cced5eabfa391f42d4e4642a48134d69",
"0xc3ba2b4ff8cc96a14dfa7b696f50a0f56c150cbd4c6da2b937f2524450c424ef",
"0x2c5b3496ce2bbe681e21f2f322900bf13dad41f14149a3eea1f2ece3b88713c8",
"0x34338272cb39ea2bf5d023f0651ccf0f088aee835a8aeedb6859e871f4918783",
"0xba1ae353bb7e90fb3bb7fa072f2ff183a317b76c0fdd3ca941813d4a99195ab2",
"0xdd11a24d66b2d20add53b6034923bd942c127ef4bbd11f760e763c9922c1bf3e",
"0x189ab8d9bd3d6303bd3fd9cc5e3bea4428d2c9600241eb043188f914c51db457",
"0xe56d1128e5ee30bf3bfac8074d5bb3f36ba251185bc1ea46aa031013f38497df",
"0x4803b847aa4225ecf1668efd36f409df45534d0eb2da3176462043e148eaceed",
"0x81bbe28fe1b55e76be6e07516300bcb3bf33706936bda54d3b65d30d6d74307c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


