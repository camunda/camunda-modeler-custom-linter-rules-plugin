const {
  is
} = require('bpmnlint-utils');

module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:CallActivity'))
        return;

    let binding = node['calledElementBinding'] || "";

    if (binding != "latest"){
        reporter.report(node.id, `Binding should be latest, got ${binding}`);
    }
  }

  return { check };
};


