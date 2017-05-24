"use strict";

/**
 * Plain text node. This is build to function the same as a BaseNode but it
 * doesn't inherit because the constructor needs to be different and I don't
 * know it's late leave me alone.
 *
 * This is not part of the AIML Spec, it just represents the plain text
 * within other elements.
 */
module.exports = class Text {

  /**
   * Constructor method
   * @param  {Node} node Xmllibjs node object
   */
  constructor (node, surly) {
    this.children = [];
    this.type = 'text';

    if (typeof node === 'string') {
      this.content = node;
    } else {
      this.content = node.toString();
    }
  }

  getType() {
    return this.type;
  }

  /**
   * Return the node and any children as text
   * @return {String}
   */
  getText (callback) { // function (err, output)
    callback(null, this.content);
  }
};
