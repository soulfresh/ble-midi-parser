import Message from './message';

export default class MessageUnknown extends Message {
  constructor(skipIndex, skipData) {
    super('unknown');
    this.skipIndex = skipIndex;
    this.skipData = skipData;
  }
}
