//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
// const IPFS = require('ipfs-api');
// const IPFS = require('ipfs-api/dist');
const ipfs = new window.Ipfs({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

export default ipfs;
