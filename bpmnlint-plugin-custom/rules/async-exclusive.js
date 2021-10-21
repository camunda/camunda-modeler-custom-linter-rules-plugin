const {
  isAny
} = require('bpmnlint-utils');

module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:CallActivity',
      'bpmn:BoundaryEvent'
    ]))
        return;

     const isAsync = node.asyncBefore || node.asyncAfter;

     if (!isAsync){
         reporter.report(node.id, 'Prefer async tasks. Use sync tasks only if you know what you doing');
     }

    const isExclusive = node.exclusive;
    if (!isExclusive) {
        reporter.report(node.id, 'Prefer exclusive tasks. Use non-exclusive tasks only if you know what you doing');
    }

  }

  return {
    check
  };
};

