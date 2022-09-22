import { registerClientPlugin } from 'camunda-modeler-plugin-helpers';

import { config, resolver } from '../.bpmnlintrc';

registerClientPlugin({ config, resolver }, 'lintRules.cloud-bpmn');