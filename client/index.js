import { registerClientPlugin } from 'camunda-modeler-plugin-helpers';

import { config, resolver } from '../.bpmnlintrc';

// provide { config, resolver } as a `lintRules.${tabType}` plug-in
registerClientPlugin({ config, resolver }, 'lintRules.cloud-bpmn');
registerClientPlugin({ config, resolver }, 'lintRules.bpmn');