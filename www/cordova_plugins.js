cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.xiangbalao.activityplugin/www/activityplugin.js",
        "id": "org.xiangbalao.activityplugin.activityplugin",
        "merges": [
            "xiangbalao"
        ]
    },
    {
        "file": "plugins/org.xiangbalao.progressdialog/www/progrress_dialog.js",
        "id": "org.xiangbalao.progressdialog.progrress_dialog",
        "merges": [
            "xiangbalao"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.xiangbalao.activityplugin": "0.3.0",
    "org.xiangbalao.progressdialog": "0.1.0"
}
// BOTTOM OF METADATA
});