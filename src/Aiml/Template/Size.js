"use strict";

var BaseNode = require('../BaseNode');

/**
 * From AIML Spec
 * http://www.alicebot.org/TR/2001/WD-aiml/#section-system-defined-predicates
 *
 * The size element tells the AIML interpreter that it should substitute the
 * number of categories currently loaded.
 *
 * The size element does not have any content.
 *
 * <!-- Category: aiml-template-elements -->
 * <aiml:size/>
 */
module.exports = class Size extends BaseNode {
  constructor (node, surly) {
    super(node, surly);
  }

  getText (callback) {
    callback(null, this.surly.environment.countCategories());
  }
};
