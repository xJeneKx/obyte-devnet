exports.deviceName = 'Byteball Devnet Witness';
exports.permanent_pairing_secret = '0000';
exports.KEYS_FILENAME = 'keys.json';

exports.port = 6611;
exports.rpcPort = '6612';
exports.webPort = 8080; // dag explorer
exports.bServeAsHub = true;
exports.bLight = false;

// witness configuration
exports.bSingleAddress = true;
exports.THRESHOLD_DISTANCE = 1;
exports.MIN_AVAILABLE_WITNESSINGS = 100;
exports.TIMESTAMPING_INTERVAL = 60 * 1000; // in milliseconds

exports.admin_email='witness';
exports.from_email='witness';

exports.initial_witnesses = [
	'ZQFHJXFWT2OCEBXF26GFXJU4MPASWPJT'
];
