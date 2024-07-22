/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bpmnlint-plugin-custom/rules/no-manual-task.js":
/*!********************************************************!*\
  !*** ./bpmnlint-plugin-custom/rules/no-manual-task.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * Rule that reports manual tasks being used.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:ManualTask')) {
      reporter.report(node.id, 'Element has disallowed type bpmn:ManualTask');
    }
  }

  return {
    check: check
  };
};


/***/ }),

/***/ "./.bpmnlintrc":
/*!*********************!*\
  !*** ./.bpmnlintrc ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "resolver": () => (/* binding */ resolver)
/* harmony export */ });
/* harmony import */ var bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmnlint/rules/conditional-flows */ "./node_modules/bpmnlint/rules/conditional-flows.js");
/* harmony import */ var bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmnlint/rules/end-event-required */ "./node_modules/bpmnlint/rules/end-event-required.js");
/* harmony import */ var bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmnlint/rules/event-sub-process-typed-start-event */ "./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js");
/* harmony import */ var bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmnlint/rules/fake-join */ "./node_modules/bpmnlint/rules/fake-join.js");
/* harmony import */ var bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmnlint/rules/label-required */ "./node_modules/bpmnlint/rules/label-required.js");
/* harmony import */ var bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bpmnlint/rules/no-bpmndi */ "./node_modules/bpmnlint/rules/no-bpmndi.js");
/* harmony import */ var bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bpmnlint/rules/no-complex-gateway */ "./node_modules/bpmnlint/rules/no-complex-gateway.js");
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bpmnlint/rules/no-disconnected */ "./node_modules/bpmnlint/rules/no-disconnected.js");
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bpmnlint/rules/no-duplicate-sequence-flows */ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js");
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bpmnlint/rules/no-gateway-join-fork */ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js");
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bpmnlint/rules/no-implicit-split */ "./node_modules/bpmnlint/rules/no-implicit-split.js");
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bpmnlint/rules/no-inclusive-gateway */ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js");
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bpmnlint/rules/single-blank-start-event */ "./node_modules/bpmnlint/rules/single-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bpmnlint/rules/single-event-definition */ "./node_modules/bpmnlint/rules/single-event-definition.js");
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bpmnlint/rules/start-event-required */ "./node_modules/bpmnlint/rules/start-event-required.js");
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bpmnlint/rules/sub-process-blank-start-event */ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bpmnlint/rules/superfluous-gateway */ "./node_modules/bpmnlint/rules/superfluous-gateway.js");
/* harmony import */ var bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bpmnlint_plugin_custom_rules_no_manual_task__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bpmnlint-plugin-custom/rules/no-manual-task */ "./bpmnlint-plugin-custom/rules/no-manual-task.js");
/* harmony import */ var bpmnlint_plugin_custom_rules_no_manual_task__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_custom_rules_no_manual_task__WEBPACK_IMPORTED_MODULE_17__);

const cache = {};

/**
 * A resolver that caches rules and configuration as part of the bundle,
 * making them accessible in the browser.
 *
 * @param {Object} cache
 */
function Resolver() {}

Resolver.prototype.resolveRule = function(pkg, ruleName) {

  const rule = cache[pkg + '/' + ruleName];

  if (!rule) {
    throw new Error('cannot resolve rule <' + pkg + '/' + ruleName + '>');
  }

  return rule;
};

Resolver.prototype.resolveConfig = function(pkg, configName) {
  throw new Error(
    'cannot resolve config <' + configName + '> in <' + pkg +'>'
  );
};

const resolver = new Resolver();

const rules = {
  "conditional-flows": "error",
  "end-event-required": "error",
  "event-sub-process-typed-start-event": "error",
  "fake-join": "warn",
  "label-required": "warn",
  "no-bpmndi": "error",
  "no-complex-gateway": "error",
  "no-disconnected": "error",
  "no-duplicate-sequence-flows": "error",
  "no-gateway-join-fork": "error",
  "no-implicit-split": "error",
  "no-inclusive-gateway": "error",
  "single-blank-start-event": "error",
  "single-event-definition": "error",
  "start-event-required": "error",
  "sub-process-blank-start-event": "error",
  "superfluous-gateway": "warn",
  "custom/no-manual-task": "warn"
};

const config = {
  rules: rules
};

const bundle = {
  resolver: resolver,
  config: config
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bundle);




cache['bpmnlint/conditional-flows'] = (bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0___default());


cache['bpmnlint/end-event-required'] = (bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1___default());


cache['bpmnlint/event-sub-process-typed-start-event'] = (bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2___default());


cache['bpmnlint/fake-join'] = (bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3___default());


cache['bpmnlint/label-required'] = (bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4___default());


cache['bpmnlint/no-bpmndi'] = (bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5___default());


cache['bpmnlint/no-complex-gateway'] = (bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6___default());


cache['bpmnlint/no-disconnected'] = (bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7___default());


cache['bpmnlint/no-duplicate-sequence-flows'] = (bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8___default());


cache['bpmnlint/no-gateway-join-fork'] = (bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9___default());


cache['bpmnlint/no-implicit-split'] = (bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10___default());


cache['bpmnlint/no-inclusive-gateway'] = (bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11___default());


cache['bpmnlint/single-blank-start-event'] = (bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12___default());


cache['bpmnlint/single-event-definition'] = (bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13___default());


cache['bpmnlint/start-event-required'] = (bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14___default());


cache['bpmnlint/sub-process-blank-start-event'] = (bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15___default());


cache['bpmnlint/superfluous-gateway'] = (bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16___default());


cache['bpmnlint-plugin-custom/no-manual-task'] = (bpmnlint_plugin_custom_rules_no_manual_task__WEBPACK_IMPORTED_MODULE_17___default());

/***/ }),

/***/ "./node_modules/bpmnlint-utils/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmnlint-utils/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "isAny": () => (/* binding */ isAny)
/* harmony export */ });
/**
 * Checks whether node is of specific bpmn type.
 *
 * @param {ModdleElement} node
 * @param {String} type
 *
 * @return {Boolean}
 */
function is(node, type) {

  if (type.indexOf(':') === -1) {
    type = 'bpmn:' + type;
  }

  return (
    (typeof node.$instanceOf === 'function')
      ? node.$instanceOf(type)
      : node.$type === type
  );
}

/**
 * Checks whether node has any of the specified types.
 *
 * @param {ModdleElement} node
 * @param {Array<String>} types
 *
 * @return {Boolean}
 */
function isAny(node, types) {
  return types.some(function(type) {
    return is(node, type);
  });
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/bpmnlint/rules/conditional-flows.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/conditional-flows.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * A rule that checks that sequence flows outgoing from a
 * conditional forking gateway or activity are
 * either default flows _or_ have a condition attached
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isConditionalForking(node)) {
      return;
    }

    const outgoing = node.outgoing || [];

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (missingCondition) {
        reporter.report(flow.id, 'Sequence flow is missing condition', [ 'conditionExpression' ]);
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

/***/ }),

/***/ "./node_modules/bpmnlint/rules/end-event-required.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/end-event-required.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks the presence of an end event per scope.
 */
module.exports = function() {

  function hasEndEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:EndEvent'))
    );
  }

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Process',
      'bpmn:SubProcess'
    ])) {
      return;
    }

    if (!hasEndEvent(node)) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' is missing end event');
    }
  }

  return { check };
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks that start events inside an event sub-process
 * are typed.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:SubProcess') || !node.triggeredByEvent) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      if (eventDefinitions.length === 0) {
        reporter.report(flowElement.id, 'Start event is missing event definition', [ 'eventDefinitions' ]);
      }
    });
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/fake-join.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmnlint/rules/fake-join.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks that no fake join is modeled by attempting
 * to give a task or event join semantics.
 *
 * Users should model a parallel joining gateway
 * to achieve the desired behavior.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Event'
    ])) {
      return;
    }

    const incoming = node.incoming || [];

    if (incoming.length > 1) {
      reporter.report(node.id, 'Incoming flows do not join');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/helper.js":
/*!***********************************************!*\
  !*** ./node_modules/bpmnlint/rules/helper.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * Create a checker that disallows the given element type.
 *
 * @param {String} type
 *
 * @return {Function} ruleImpl
 */
function disallowNodeType(type) {

  return function() {

    function check(node, reporter) {

      if (is(node, type)) {
        reporter.report(node.id, 'Element has disallowed type <' + type + '>');
      }
    }

    return {
      check
    };

  };

}

module.exports.disallowNodeType = disallowNodeType;

/***/ }),

/***/ "./node_modules/bpmnlint/rules/label-required.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmnlint/rules/label-required.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks the presence of a label.
 */
module.exports = function() {

  function check(node, reporter) {

    if (isAny(node, [
      'bpmn:ParallelGateway',
      'bpmn:EventBasedGateway'
    ])) {
      return;
    }

    // ignore joining gateways
    if (is(node, 'bpmn:Gateway') && !isForking(node)) {
      return;
    }

    if (is(node, 'bpmn:BoundaryEvent')) {
      return;
    }

    // ignore sub-processes
    if (is(node, 'bpmn:SubProcess')) {

      // TODO(nikku): better ignore expanded sub-processes only
      return;
    }

    // ignore sequence flow without condition
    if (is(node, 'bpmn:SequenceFlow') && !hasCondition(node)) {
      return;
    }

    // ignore data objects and artifacts for now
    if (isAny(node, [
      'bpmn:FlowNode',
      'bpmn:SequenceFlow',
      'bpmn:Participant',
      'bpmn:Lane'
    ])) {

      const name = (node.name || '').trim();

      if (name.length === 0) {
        reporter.report(node.id, 'Element is missing label/name', [ 'name' ]);
      }
    }
  }

  return { check };
};


// helpers ////////////////////////

function isForking(node) {
  const outgoing = node.outgoing || [];

  return outgoing.length > 1;
}

function hasCondition(node) {
  return node.conditionExpression;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-bpmndi.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-bpmndi.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  flatten
} = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");

/**
 * A rule that checks that there is no BPMNDI information missing for elements,
 * which require BPMNDI.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Definitions')) {
      return false;
    }

    // (1) Construct array of all BPMN elements
    const bpmnElements = getAllBpmnElements(node.rootElements);

    // (2) Filter BPMN elements without visual representation
    const visualBpmnElements = bpmnElements.filter(hasVisualRepresentation);

    // (3) Construct array of BPMNDI references
    const diBpmnReferences = getAllDiBpmnReferences(node);

    // (4) Report elements without BPMNDI
    visualBpmnElements.forEach((element) => {
      if (diBpmnReferences.indexOf(element.id) === -1) {
        reporter.report(element.id, 'Element is missing bpmndi');
      }
    });
  }

  return {
    check
  };

};


// helpers /////////////////////////////

/**
 * Get all BPMN elements within a bpmn:Definitions node
 *
 * @param {array<ModdleElement>} rootElements - An array of Moddle rootElements
 * @return {array<Object>} A flat array with all BPMN elements, each represented with { id: elementId, $type: elementType }
 *
 */
function getAllBpmnElements(rootElements) {
  return flatten(rootElements.map((rootElement) => {
    const laneSet =
      rootElement.laneSets && rootElement.laneSets[0] || rootElement.childLaneSet;

    // Include
    // * flowElements (e.g., tasks, sequenceFlows),
    // * nested flowElements,
    // * participants,
    // * artifacts (groups),
    // * laneSets
    // * nested laneSets
    // * childLaneSets
    // * nested childLaneSets
    // * messageFlows
    const elements = flatten([].concat(
      rootElement.flowElements || [],
      (rootElement.flowElements && getAllBpmnElements(rootElement.flowElements.filter(hasFlowElements))) || [],
      rootElement.participants || [],
      rootElement.artifacts || [],
      laneSet && laneSet.lanes || [],
      laneSet && laneSet.lanes && getAllBpmnElements(laneSet.lanes.filter(hasChildLaneSet)) || [],
      rootElement.messageFlows || []
    ));

    if (elements.length > 0) {
      return elements.map((element) => {

        return {
          id: element.id,
          $type: element.$type
        };
      });
    } else {

      // We are not interested in the rest here (DI)
      return [];
    }
  }));
}

/**
 * Get all BPMN elements within a bpmn:Definitions node
 *
 * @param {ModdleElement} definitionsNode - A moddleElement representing the
 * bpmn:Definitions element
 * @return {array<String>} A flat array with all BPMNDI element ids part of
 * this bpmn:Definitions node
 *
 */
function getAllDiBpmnReferences(definitionsNode) {
  return flatten(
    definitionsNode.diagrams.map((diagram) => {

      const diElements = diagram.plane.planeElement || [];

      return diElements.map((element) => {

        return element.bpmnElement.id;
      });
    })
  );
}

function hasVisualRepresentation(element) {
  const noVisRepresentation = [ 'bpmn:DataObject' ];

  return noVisRepresentation.includes(element.$type) ? false : true;
}

function hasFlowElements(element) {
  return element.flowElements ? true : false;
}

function hasChildLaneSet(element) {
  return element.childLaneSet ? true : false;
}


/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-complex-gateway.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-complex-gateway.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const disallowNodeType = (__webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js").disallowNodeType);

module.exports = disallowNodeType('bpmn:ComplexGateway');

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-disconnected.js":
/*!********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-disconnected.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isAny,
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that verifies that there exists no disconnected
 * flow elements, i.e. elements without incoming
 * _or_ outgoing sequence flows
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Gateway',
      'bpmn:SubProcess',
      'bpmn:Event'
    ]) || node.triggeredByEvent) {
      return;
    }

    // compensation activity and boundary events are
    // linked visually via associations. If these associations
    // exist we are fine, too
    if (isCompensationLinked(node)) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (!incoming.length && !outgoing.length) {
      reporter.report(node.id, 'Element is not connected');
    }
  }

  return {
    check
  };
};


// helpers /////////////////

function isCompensationBoundary(node) {

  var eventDefinitions = node.eventDefinitions;

  if (!is(node, 'bpmn:BoundaryEvent')) {
    return false;
  }

  if (!eventDefinitions || eventDefinitions.length !== 1) {
    return false;
  }

  return is(eventDefinitions[0], 'bpmn:CompensateEventDefinition');
}

function isCompensationActivity(node) {
  return node.isForCompensation;
}

function isCompensationLinked(node) {
  var source = isCompensationBoundary(node);
  var target = isCompensationActivity(node);

  // TODO(nikku): check, whether compensation association exists
  return source || target;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js":
/*!********************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that verifies that there are no disconnected
 * flow elements, i.e. elements without incoming
 * _or_ outgoing sequence flows
 */
module.exports = function() {

  const keyed = {};

  const outgoingReported = {};
  const incomingReported = {};

  function check(node, reporter) {

    if (!is(node, 'bpmn:SequenceFlow')) {
      return;
    }

    const key = flowKey(node);

    if (key in keyed) {
      reporter.report(node.id, 'SequenceFlow is a duplicate');

      const sourceId = node.sourceRef.id;
      const targetId = node.targetRef.id;

      if (!outgoingReported[sourceId]) {
        reporter.report(sourceId, 'Duplicate outgoing sequence flows');

        outgoingReported[sourceId] = true;
      }

      if (!incomingReported[targetId]) {
        reporter.report(targetId, 'Duplicate incoming sequence flows');

        incomingReported[targetId] = true;
      }
    } else {
      keyed[key] = node;
    }
  }

  return {
    check
  };

};


// helpers /////////////////

function flowKey(flow) {
  const conditionExpression = flow.conditionExpression;

  const condition = conditionExpression ? conditionExpression.body : '';
  const source = flow.sourceRef ? flow.sourceRef.id : flow.id;
  const target = flow.targetRef ? flow.targetRef.id : flow.id;

  return source + '#' + target + '#' + condition;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-gateway-join-fork.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks, whether a gateway forks and joins
 * at the same time.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Gateway')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length > 1 && outgoing.length > 1) {
      reporter.report(node.id, 'Gateway forks and joins');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-implicit-split.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-implicit-split.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks that no implicit split is modeled
 * starting from a task.
 *
 * users should model the parallel splitting gateway
 * explicitly instead.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Event'
    ])) {
      return;
    }

    const outgoing = node.outgoing || [];

    const outgoingWithoutCondition = outgoing.filter((flow) => {
      return !hasCondition(flow) && !isDefaultFlow(node, flow);
    });

    if (outgoingWithoutCondition.length > 1) {
      reporter.report(node.id, 'Flow splits implicitly');
    }
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-inclusive-gateway.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const disallowNodeType = (__webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js").disallowNodeType);

module.exports = disallowNodeType('bpmn:InclusiveGateway');

/***/ }),

/***/ "./node_modules/bpmnlint/rules/single-blank-start-event.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/single-blank-start-event.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks whether not more than one blank start event
 * exists per scope.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:FlowElementsContainer')) {
      return;
    }

    const flowElements = node.flowElements || [];

    const blankStartEvents = flowElements.filter(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      return eventDefinitions.length === 0;
    });

    if (blankStartEvents.length > 1) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' has multiple blank start events');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/single-event-definition.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/single-event-definition.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that verifies that an event contains maximum one event definition.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Event')) {
      return;
    }

    const eventDefinitions = node.eventDefinitions || [];

    if (eventDefinitions.length > 1) {
      reporter.report(node.id, 'Event has multiple event definitions', [ 'eventDefinitions' ]);
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/start-event-required.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/start-event-required.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks for the presence of a start event per scope.
 */
module.exports = function() {

  function hasStartEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:StartEvent'))
    );
  }

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Process',
      'bpmn:SubProcess'
    ])) {
      return;
    }

    if (!hasStartEvent(node)) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' is missing start event');
    }
  }

  return { check };
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/sub-process-blank-start-event.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks that start events inside a normal sub-processes
 * are blank (do not have an event definition).
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:SubProcess') || node.triggeredByEvent) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      if (eventDefinitions.length > 0) {
        reporter.report(flowElement.id, 'Start event must be blank', [ 'eventDefinitions' ]);
      }
    });
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/superfluous-gateway.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/superfluous-gateway.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks, whether a gateway has only one source and target.
 *
 * Those gateways are superfluous since they don't do anything.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Gateway')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length === 1 && outgoing.length === 1) {
      reporter.report(node.id, 'Gateway is superfluous. It only has one source and target.');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModelerDirectory": () => (/* binding */ getModelerDirectory),
/* harmony export */   "getPluginsDirectory": () => (/* binding */ getPluginsDirectory),
/* harmony export */   "registerBpmnJSModdleExtension": () => (/* binding */ registerBpmnJSModdleExtension),
/* harmony export */   "registerBpmnJSPlugin": () => (/* binding */ registerBpmnJSPlugin),
/* harmony export */   "registerClientExtension": () => (/* binding */ registerClientExtension),
/* harmony export */   "registerClientPlugin": () => (/* binding */ registerClientPlugin),
/* harmony export */   "registerCloudBpmnJSModdleExtension": () => (/* binding */ registerCloudBpmnJSModdleExtension),
/* harmony export */   "registerCloudBpmnJSPlugin": () => (/* binding */ registerCloudBpmnJSPlugin),
/* harmony export */   "registerCloudDmnJSModdleExtension": () => (/* binding */ registerCloudDmnJSModdleExtension),
/* harmony export */   "registerCloudDmnJSPlugin": () => (/* binding */ registerCloudDmnJSPlugin),
/* harmony export */   "registerDmnJSModdleExtension": () => (/* binding */ registerDmnJSModdleExtension),
/* harmony export */   "registerDmnJSPlugin": () => (/* binding */ registerDmnJSPlugin),
/* harmony export */   "registerPlatformBpmnJSModdleExtension": () => (/* binding */ registerPlatformBpmnJSModdleExtension),
/* harmony export */   "registerPlatformBpmnJSPlugin": () => (/* binding */ registerPlatformBpmnJSPlugin),
/* harmony export */   "registerPlatformDmnJSModdleExtension": () => (/* binding */ registerPlatformDmnJSModdleExtension),
/* harmony export */   "registerPlatformDmnJSPlugin": () => (/* binding */ registerPlatformDmnJSPlugin)
/* harmony export */ });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a client plugin.
 *
 * @param {import('react').ComponentType} extension
 *
 * @example
 *
 * import MyExtensionComponent from './MyExtensionComponent';
 *
 * registerClientExtension(MyExtensionComponent);
 */
function registerClientExtension(component) {
  registerClientPlugin(component, 'client');
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a platform specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformBpmnJSPlugin(BpmnJSModule);
 */
function registerPlatformBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.platform.modeler.additionalModules');
}

/**
 * Validate and register a cloud specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudBpmnJSPlugin(BpmnJSModule);
 */
function registerCloudBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.cloud.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformBpmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudBpmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerDmnJSModdleExtension(moddleDescriptor);
 */
function registerDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudDmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformDmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.modeler.${c}.additionalModules`));
}

/**
 * Validate and register a cloud specific dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerCloudDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerCloudDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.cloud.modeler.${c}.additionalModules`));
}

/**
 * Validate and register a platform specific dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerPlatformDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerPlatformDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.platform.modeler.${c}.additionalModules`));
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "ensureArray": () => (/* binding */ ensureArray),
/* harmony export */   "every": () => (/* binding */ every),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "groupBy": () => (/* binding */ groupBy),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNil": () => (/* binding */ isNil),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "matchPattern": () => (/* binding */ matchPattern),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "omit": () => (/* binding */ omit),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "reduce": () => (/* binding */ reduce),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "size": () => (/* binding */ size),
/* harmony export */   "some": () => (/* binding */ some),
/* harmony export */   "sortBy": () => (/* binding */ sortBy),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "unionBy": () => (/* binding */ unionBy),
/* harmony export */   "uniqueBy": () => (/* binding */ uniqueBy),
/* harmony export */   "values": () => (/* binding */ values),
/* harmony export */   "without": () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire(force) {
    var now = Date.now();
    var scheduledDiff = force ? 0 : lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  function callback() {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;
  return callback;
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */

function set(target, path, value) {
  var currentTarget = target;
  forEach(path, function (key, idx) {
    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + _typeof(key) + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    var nextKey = path[idx + 1];
    var nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });
  return target;
}
/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */

function get(target, path, defaultValue) {
  var currentTarget = target;
  forEach(path, function (key) {
    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;
      return false;
    }

    currentTarget = currentTarget[key];
  });
  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.bpmnlintrc */ "./.bpmnlintrc");




// provide { config, resolver } as a `lintRules.${tabType}` plug-in
(0,camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__.registerClientPlugin)({ config: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.config, resolver: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.resolver }, 'lintRules.cloud-bpmn');
(0,camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__.registerClientPlugin)({ config: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.config, resolver: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_1__.resolver }, 'lintRules.bpmn');
})();

/******/ })()
;
//# sourceMappingURL=client.bundle.js.map