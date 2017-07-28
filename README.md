# nativescript-doorbell.io
Doorbell.io plugin for nativescript

# Installation
```tns plugin add nativescript-doorbell.io```

# Usage
```
import { showDoorbellFeedback } from 'nativescript-doorbell.io';
import { isIOS } from 'platform';

const viewController = isIOS ? this.feedbackContainer.nativeElement.ios.viewController : null;
showDoorbellFeedback(appId, appKey, viewController);
```

FeedbackContainer is a StackLayout in the html of the page where the function is called from. It does not need to have any particular alignment. It is only used by iOS.

appId is the id of the app in the app store.

appKey is the key from doorbell.io.
