import { DateTime } from 'luxon';

export default class SampleUtils {
  constructor() {}

  static getCurrentDate() {
    return DateTime.now();
  }
}
