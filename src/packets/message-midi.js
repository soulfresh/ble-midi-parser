import Message from './message';

export default class MessageMidi extends Message {
  constructor(type, timestamp, midiStatus, midiOne, midiTwo) {
    super(type);
    this.timestamp = timestamp;
    this.midiStatus = midiStatus;
    this.midiOne = midiOne;
    this.midiTwo = midiTwo;
  }
}
