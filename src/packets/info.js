import getTimestampHigh from '../util/get-timestamp-high';
import isBitOn from '../util/is-bit-on';

export default class Info {
  constructor(packet) {
    const header = packet[0];
    this.packet = packet;
    this.events = [];
    this.isHeaderValid = isBitOn(header, 7);
    this.index = 1;
    this.timestampHigh = getTimestampHigh(header);
    this.timestampLow = -1;
    this.timestamp = -1;
    this.midiStatus = -1;
  }
}
