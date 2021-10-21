const {
  is,
  isAny
} = require('bpmnlint-utils');

module.exports = function() {

  function check(node, reporter) {

    if (isAny(node, [
      'bpmn:EndEvent',
      'bpmn:SequenceFlow',
      'bpmn:Group',
      'bpmn:TextAnnotation',
      'bpmn:Association',
      'bpmn:Process',
      'bpmn:DataObject'
    ])) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length && !outgoing.length) {
      reporter.report(node.id, 'Element must have outgoing flows');
    }
  }

  return {
    check
  };
};

