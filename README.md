Parse BLE MIDI data into timestamp and MIDI data
that can be passed to the MIDI parsing library of your choice.

Example Usage:
```
import MIDIMessage from 'midimessage';
import parsePacket from 'ble-midi-parser';

// After receiving a BLE MIDI packet from a source
// such as the `noble` library.
const info = parsePacket(data);

info.events.forEach((event) => {
  const m = MIDIMessage({
    receivedTime: event.timestamp,
    data: [event.midiStatus, event.midiOne, event.midiTwo]
  });

  // Do something with your midi message.
});
```

The contents of this library were extracted from the
[ble-midi](https://github.com/skratchdot/ble-midi)
project. Big thank you to skratchdot.
