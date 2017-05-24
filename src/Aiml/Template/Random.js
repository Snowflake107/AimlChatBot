"use strict";

var BaseNode = require('../BaseNode');

/**
 * From AIML Spec
 * http://www.alicebot.org/TR/2001/WD-aiml/#section-random
 *
 * The random element instructs the AIML interpreter to return exactly one of
 * its contained li elements randomly. The random element must contain one or
 * more li elements of type defaultListItem, and cannot contain any other
 * elements.
 *
 * <!-- Category: aiml-template-elements -->
 * <aiml:random>
 *    <!-- Contents: default-list-item+ -->
 * </aiml:random>
 */
module.exports = class Random extends BaseNode {
  getText (callback) {
    var elem = this.children[Math.floor(Math.random() * this.children.length)];

    elem.getText(callback);
  }
};
