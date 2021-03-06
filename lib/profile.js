/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
    if ('string' == typeof json) {
        json = JSON.parse(json);
    }
    var profile = {};
    profile.id = json.User.Id;
    profile.realName = {
        FirstaName: json.User.FirstName,
        MidName: json.User.MidName,
        LastName: json.User.LastName
    }
    profile.emails = [{ value: json.User.Account }];

    return profile;

};