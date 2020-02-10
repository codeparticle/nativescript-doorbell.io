var application = require('application');
var platform = require('platform');

var exports = {};

if (platform.isAndroid) {
  exports.showDoorbellFeedback = function(
    appId,
    appKey,
    viewController,
    properties = undefined
  ) {
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
    return feedback.show();
  };
} else {
  exports.showDoorbellFeedback = function(
    appId,
    appKey,
    viewController,
    properties = undefined,
    animated = true
  ) {
    const feedback = Doorbell.alloc().initWithApiKeyAppId(appKey, appId);
    feedback.animated = animated;
    if (properties) {
      for (var p in properties) {
        feedback.addPropertyWithNameAndValue(p, properties[p]);
      }
    }
    if (viewController) {
      feedback.showFeedbackDialogInViewControllerCompletion(
        viewController,
        error => {
          if (error) {
            throw error;
          }
        }
      );
    }
  };
}

module.exports = exports;
