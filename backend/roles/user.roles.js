const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
    ac.grant("basic")
        .readAny("profile")

    ac.grant("admin")
        .extend("basic")
        .readAny("profile")
        .updateAny("profile")
        .deleteAny("profile")

    return ac;
})();