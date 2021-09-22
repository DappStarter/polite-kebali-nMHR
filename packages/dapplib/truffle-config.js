require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan remember night equip hockey end army ghost'; 
let testAccounts = [
"0xfa87f3a92c5d09840ed604bedbe4d585f7cba300ff9ef81dc645a34b7dc7d1e4",
"0xa9905d7a7ca5375a07c33c117d7f1ba8f418059ef28093257bfacf79b0970b1b",
"0x8bacdb70cff7fa8e75297957fa49f45b4b76f3c0e9d1fdbad33f75ddcdc72410",
"0x91b59e1df0ecfdab09d0cf94357de7c113b96afff2ce7d8e98138de9daffb10e",
"0x8d8286eaa256a8309846a299d4d63f2eac6e27c3a4bd883d2df679d9ece03258",
"0xe5b0c07664c9e47d8fc3baca709455bece69962e60cda6974ff2495ada671b31",
"0xc14ef86609241e4ff4bc546b9bd99c031f20682868e54e924f48dc75b4df8236",
"0x3476213e488814945d5df05ba3dc0ce7672ac5bc011acbea71f4abdc01b9283f",
"0xb37e68d693eb4637834d7f2297b04c2a6dbf2d3a0dc40da4e6b66a300f1470e4",
"0x9c15a4a8eed6c129d12a70002132d0648d6a0eb15fed021bcd40011226673488"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

