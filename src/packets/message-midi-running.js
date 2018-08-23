import MessageMidi from './message-midi';

export default class MessageMidiRunning extends MessageMidi {
  constructor(timestamp, midiStatus, midiOne, midiTwo) {
    super('runningMidiMessage', timestamp, midiStatus, midiOne, midiTwo);
  }
}
