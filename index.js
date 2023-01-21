import { Application, isAndroid } from '@nativescript/core';

let showDoorbellFeedback;

if (isAndroid) {
  showDoorbellFeedback = function (appId, appKey, viewController, properties = undefined) {
    const feedback = new io.doorbell.android.Doorbell(
      Application.android.startActivity,
      parseInt(appId),
      appKey
    );
    if (properties) {
      for (let p in properties) {
        feedback.addProperty(p, properties[p]);
      }
    }
    return feedback.show();
  };
} else {
  showDoorbellFeedback = function (
    appId,
    appKey,
    viewController,
    properties = undefined,
    animated = true
  ) {
    const feedback = Doorbell.alloc().initWithApiKeyAppId(appKey, appId);
    feedback.animated = animated;
    if (properties) {
      for (let p in properties) {
        feedback.addPropertyWithNameAndValue(p, properties[p]);
      }
    }
    if (viewController) {
      feedback.showFeedbackDialogInViewControllerCompletion(viewController, (error) => {
        if (error) {
          throw error;
        }
      });
    }
  };
}

export { showDoorbellFeedback };
