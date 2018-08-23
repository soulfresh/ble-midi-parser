import MessageMidi from './message-midi';

export default class MessageMidiFull extends MessageMidi {
  constructor(timestamp, midiStatus, midiOne, midiTwo) {
    super('fullMidiMessage', timestamp, midiStatus, midiOne, midiTwo);
  }
}
