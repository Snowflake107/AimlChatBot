"use strict";

var BaseNode = require('../BaseNode');

/**
 * From AIML Spec
 * http://www.alicebot.org/TR/2001/WD-aiml/#section-formal
 *
 * The formal element tells the AIML interpreter to render the contents of the
 * element such that the first letter of each word is in uppercase, as defined
 * (if defined) by the locale indicated by the specified language (if
 * specified). This is similar to methods that are sometimes called
 * "Title Case".
 *
 * <!-- Category: aiml-template-elements -->
 * <aiml:formal>
 *    <!-- Content: aiml-template-elements -->
 * </aiml:formal>
 *
 * If no character in this string has a different uppercase version, based on
 * the Unicode standard, then the original string is returned.
 *
 * See Unicode Case Mapping for implementation suggestions.
 */
module.exports = class Formal extends BaseNode {
  getText (callback) {
    this.evaluateChildren(function (err, text) {
      text = text
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, function(a) {
          return a.toUpperCase();
        });
      callback(err, text);
    });
  }
};
