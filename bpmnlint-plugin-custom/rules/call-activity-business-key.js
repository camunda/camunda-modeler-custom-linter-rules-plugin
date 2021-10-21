const {
  is
} = require('bpmnlint-utils');

module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:CallActivity'))
        return;

    let businessKeyParameter = node.extensionElements.values.find(x => is(x,'camunda:In') && x.businessKey);

    let businessKey = (businessKeyParameter || {}).businessKey;

    if (businessKey != "#{execution.processBusinessKey}"){
        reporter.report(node.id, `BusinessKey should be inherited`);
    }
  }

  return { check };
};


