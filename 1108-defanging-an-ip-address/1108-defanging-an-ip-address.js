/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newest=address.replaceAll(".","[.]");
    return newest;
};