import Message from './message';

export default class MessageMidiSysex extends Message {
  constructor(isStart, isEnd, data) {
    super('sysex');
    this.isStart = isStart;
    this.isEnd = isEnd;
    this.data = data;
  }
}
