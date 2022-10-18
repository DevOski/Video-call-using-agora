import * as React from 'react';
import AgoraUIKit from 'agora-rn-uikit';
// import { RtcL } from "react-native-agora"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = React.useState(true);
  const connectionData = {
    appId: 'e15a674158ce47bd987300e6699767af',
    channel: 'channelName',
    cert: "b9c6458c78fa419bbe6588ab2360672d",
    token: "c39ea4bfffcb42c2aac39fb817043822"
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {videoCall ? (
        <View>
          <AgoraUIKit
            connectionData={{
              appId: "e15a674158ce47bd987300e6699767af",
              channel: "channelName",
              rtcToken:"007eJxTYLC8M213lPKc67OkZikXXdn4e9tbl+bA+wxmd+8kcd56zCGvwJBqaJpoZm5iaGqRnGpinpRiaWFubGCQamZmaWluZp6Ydr7SL7khkJHhcKYhIyMDBIL43AzJGYl5eak5fom5qQwMAHtYIoM=",
              rtmToken:"b9c6458c78fa419bbe6588ab2360672d",
              username: `Haris${Math.random()}`
            }}
            rtcCallbacks={rtcCallbacks} />
        </View>
      ) : (
        <Text onPress={() => setVideoCall(true)}>Start Call</Text>
      )}
    </GestureHandlerRootView>
  );
};

export default App;