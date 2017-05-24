"use strict";

var BaseNode = require('../BaseNode');

/**
 * From AIML Spec. Handles both the transformational PERSON element and
 * the PERSON shortcut element
 * http://www.alicebot.org/TR/2001/WD-aiml/#section-person
 * http://www.alicebot.org/TR/2001/WD-aiml/#section-short-cut-elements
 *
 *
 * SHORTCUT
 *
 * The atomic version of the person element is a shortcut for:
 *
 * <person><star/></person>
 *
 * The atomic person does not have any content.
 *
 * <!-- Category: aiml-template-elements -->
 * <aiml:person/>
 *
 *
 * TRANSFORMATIONAL
 *
 * The person element instructs the AIML interpreter to:
 * 
 *   1. replace words with first-person aspect in the result of processing the
 *       contents of the person element with words with the
 *       grammatically-corresponding third-person aspect; and
 *   2. replace words with third-person aspect in the result of processing the
 *       contents of the person element with words with the
 *       grammatically-corresponding first-person aspect.
 *
 * The definition of "grammatically-corresponding" is left up to the
 * implementation.
 *
 * <!-- Category: aiml-template-elements -->
 * <aiml:person>
 *    <!-- Contents: aiml-template-elements -->
 * </aiml:person>
 *
 * Historically, implementations of person have dealt with pronouns, likely due
 * to the fact that most AIML has been written in English. However, the decision
 * about whether to transform the person aspect of other words is left up to the
 * implementation.
 */

module.exports = class Person extends BaseNode {
  constructor (node, surly) {
    super(node, surly);
    this.type = 'person';

    if (node.childNodes().length === 0) {
      var star = new libxmljs.Element(node.doc(), 'star');
      this.children.push(new Star(star, surly));
    }
  }

  getText (callback) {
    this.evaluateChildren(function (err, text) {
      callback(err, substitute(text, 'person'));
    });
  }
};

const libxmljs = require('libxmljs');
const substitute = require('../../Substitutions');
const Star = require('./Star');
