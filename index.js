var application = require("application");
var platform = require("platform");

var exports = {};

if (platform.isAndroid) {
  exports.showDoorbellFeedback = function(appId, appKey) {
    const feedback = new io.doorbell.android.Doorbell(application.android.startActivity, parseInt(appId), appKey);
    feedback.show();
  }
} else {
  exports.showDoorbellFeedback = function(appId, appKey, viewController, animated = true) {
    const feedback = Doorbell.alloc().initWithApiKeyAppId(appKey, appId);
    feedback.animated = animated;
    feedback.showFeedbackDialogInViewControllerCompletion(viewController, (error) => {});
  }
}

module.exports = exports;
