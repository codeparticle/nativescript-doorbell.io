var application = require('application');
var platform = require('platform');

var exports = {};

if (platform.isAndroid) {
  exports.showDoorbellFeedback = function(appId, appKey, properties = null) {
    const feedback = new io.doorbell.android.Doorbell(
      application.android.startActivity,
      parseInt(appId),
      appKey
    );
    if (properties) {
      for (var p in properties) {
        feedback.addProperty(p, properties[p]);
      }
    }
    feedback.show();
  };
} else {
  exports.showDoorbellFeedback = function(
    appId,
    appKey,
    viewController,
    properties = null,
    animated = true
  ) {
    const feedback = Doorbell.alloc().initWithApiKeyAppId(appKey, appId);
    feedback.animated = animated;
    if (properties) {
      for (var p in properties) {
        feedback.addPropertyWithNameAndValue(p, properties[p]);
      }
    }
    feedback.showFeedbackDialogInViewControllerCompletion(viewController, error => {});
  };
}

module.exports = exports;
