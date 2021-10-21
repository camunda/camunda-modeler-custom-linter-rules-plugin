const {
  is
} = require('bpmnlint-utils');

module.exports = function() {

  function check(node, reporter) {

    if (!node.extensionElements || !node.extensionElements.values)
        return;

    let hasListeners = node.extensionElements.values.some(x => is(x, 'camunda:ExecutionListener'));

    if (hasListeners){
        reporter.report(node.id, `Consider refactoring listeners to script tasks if possible`);
    }
  }

  return { check };
};


