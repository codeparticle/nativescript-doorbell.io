var application = require("application");
var platform = require("platform");

var exports = {};

if (platform.isAndroid) {
  exports.showDoorbellFeedback = function(appId, appKey) {
    const feedback = new io.doorbell.android.Doorbell(application.android.currentContext, parseInt(appId), appKey);
    feedback.show();
  }
} else {
  exports.showDoorbellFeedback = function(appId, appKey, viewController, animated = true) {
    const feedback = Doorbell.alloc().initWithApiKeyAppId(appKey, appId);
    feedback.showFeedbackDialogInViewControllerCompletionAnimated(viewController, (error) => {}, animated);
  }
}
 
module.exports = exports;
