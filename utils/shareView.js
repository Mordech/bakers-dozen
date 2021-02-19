import * as Sharing from 'expo-sharing';
import { Platform, Share } from 'react-native';
import { captureRef } from 'react-native-view-shot';

let openShareDialogAsync = async (url) => {
  if (!(await Sharing.isAvailableAsync())) {
    alert(`Uh oh, sharing isn't available on your platform`);
    return;
  }

  await Sharing.shareAsync(url);
};

export default function shareView(viewRef) {
  if (viewRef === undefined) {
    console.log('No ref');
    return null;
  }
  captureRef(viewRef, {
    format: 'png',
    result: 'tmpfile',
  }).then((uri) => {
    console.log(uri);
    Platform.OS === 'android'
      ? openShareDialogAsync(uri)
      : Share.share({ url: uri });
  });
}
