//forked from conditional-flows rule
//https://github.com/bpmn-io/bpmnlint/blob/master/rules/conditional-flows.js

const {
  is
} = require('bpmnlint-utils');

/**
 * A rule that checks that sequence flows outgoing from a
 * conditional forking gateway or activity are
 * either default flows _or_ have a condition attached
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isConditionalForking(node) || is(node, "bpmn:InclusiveGateway")) {
      return;
    }


    const outgoing = node.outgoing || [];

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (missingCondition) {
        reporter.report(flow.id, 'Sequence flow is missing condition');
      }
    });
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function isConditionalForking(node) {

  const defaultFlow = node['default'];
  const outgoing = node.outgoing || [];

  return defaultFlow || outgoing.find(hasCondition);
}

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}
