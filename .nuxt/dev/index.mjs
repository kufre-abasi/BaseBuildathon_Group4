import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getQuery as getQuery$1, readBody, getResponseStatusText } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/devalue/index.js';
import destr from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/ufo/dist/index.mjs';
import { propsToString, renderSSRHead } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/scule/dist/index.mjs';
import { hash } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/consola/dist/index.mjs';
import { getContext } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/errx/dist/index.js';
import { isVNode, version, unref } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/vue/index.mjs';
import BaseStyle from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/@primevue/core/base/style/index.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "motion": {
      "directives": {
        "pop-bottom": {
          "initial": {
            "scale": 0,
            "opacity": 0,
            "y": 100
          },
          "visible": {
            "scale": 1,
            "opacity": 1,
            "y": 0
          }
        }
      }
    },
    "primevue": {
      "usePrimeVue": true,
      "autoImport": 1,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "options": {},
      "components": [
        {
          "name": "AutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true
        },
        {
          "name": "Calendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true
        },
        {
          "name": "CascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true
        },
        {
          "name": "Checkbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true
        },
        {
          "name": "Chips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true
        },
        {
          "name": "ColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true
        },
        {
          "name": "DatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true
        },
        {
          "name": "Dropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true
        },
        {
          "name": "FloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true
        },
        {
          "name": "Fluid",
          "as": "Fluid",
          "from": "primevue/fluid",
          "export": "default",
          "filePath": "primevue/fluid",
          "global": true
        },
        {
          "name": "IconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true
        },
        {
          "name": "InputChips",
          "as": "InputChips",
          "from": "primevue/inputchips",
          "export": "default",
          "filePath": "primevue/inputchips",
          "global": true
        },
        {
          "name": "InputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true
        },
        {
          "name": "InputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true
        },
        {
          "name": "InputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true
        },
        {
          "name": "InputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true
        },
        {
          "name": "InputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true
        },
        {
          "name": "InputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true
        },
        {
          "name": "InputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true
        },
        {
          "name": "InputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true
        },
        {
          "name": "Knob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true
        },
        {
          "name": "Listbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true
        },
        {
          "name": "MultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true
        },
        {
          "name": "Password",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true
        },
        {
          "name": "RadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true
        },
        {
          "name": "Rating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true
        },
        {
          "name": "Select",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true
        },
        {
          "name": "SelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true
        },
        {
          "name": "Slider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true
        },
        {
          "name": "Textarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true
        },
        {
          "name": "ToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true
        },
        {
          "name": "ToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true
        },
        {
          "name": "TreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true
        },
        {
          "name": "Button",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true
        },
        {
          "name": "ButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true
        },
        {
          "name": "SpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true
        },
        {
          "name": "SplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true
        },
        {
          "name": "Column",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true
        },
        {
          "name": "Row",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true
        },
        {
          "name": "ColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true
        },
        {
          "name": "DataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true
        },
        {
          "name": "DataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true
        },
        {
          "name": "OrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true
        },
        {
          "name": "OrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true
        },
        {
          "name": "Paginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true
        },
        {
          "name": "PickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true
        },
        {
          "name": "Tree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true
        },
        {
          "name": "TreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true
        },
        {
          "name": "Timeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true
        },
        {
          "name": "VirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true
        },
        {
          "name": "Accordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true
        },
        {
          "name": "AccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true
        },
        {
          "name": "AccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true
        },
        {
          "name": "AccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true
        },
        {
          "name": "AccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true
        },
        {
          "name": "Card",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true
        },
        {
          "name": "DeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true
        },
        {
          "name": "Divider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true
        },
        {
          "name": "Fieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true
        },
        {
          "name": "Panel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true
        },
        {
          "name": "ScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true
        },
        {
          "name": "Splitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true
        },
        {
          "name": "SplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true
        },
        {
          "name": "Stepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true
        },
        {
          "name": "StepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true
        },
        {
          "name": "Step",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true
        },
        {
          "name": "StepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true
        },
        {
          "name": "StepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true
        },
        {
          "name": "StepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true
        },
        {
          "name": "TabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true
        },
        {
          "name": "Tabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true
        },
        {
          "name": "TabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true
        },
        {
          "name": "Tab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true
        },
        {
          "name": "TabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true
        },
        {
          "name": "TabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true
        },
        {
          "name": "Toolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true
        },
        {
          "name": "ConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true
        },
        {
          "name": "ConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true
        },
        {
          "name": "Dialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true
        },
        {
          "name": "Drawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true
        },
        {
          "name": "DynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true
        },
        {
          "name": "OverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true
        },
        {
          "name": "Popover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true
        },
        {
          "name": "Sidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true
        },
        {
          "name": "FileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true
        },
        {
          "name": "Breadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true
        },
        {
          "name": "ContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true
        },
        {
          "name": "Dock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true
        },
        {
          "name": "Menu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true
        },
        {
          "name": "Menubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true
        },
        {
          "name": "MegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true
        },
        {
          "name": "PanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true
        },
        {
          "name": "Steps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true
        },
        {
          "name": "TabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true
        },
        {
          "name": "TieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true
        },
        {
          "name": "Message",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true
        },
        {
          "name": "InlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true
        },
        {
          "name": "Toast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true
        },
        {
          "name": "Carousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true
        },
        {
          "name": "Galleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true
        },
        {
          "name": "Image",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true
        },
        {
          "name": "Avatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true
        },
        {
          "name": "AvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true
        },
        {
          "name": "Badge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true
        },
        {
          "name": "BlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true
        },
        {
          "name": "Chip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true
        },
        {
          "name": "Inplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true
        },
        {
          "name": "MeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true
        },
        {
          "name": "OverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true
        },
        {
          "name": "ScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true
        },
        {
          "name": "Skeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true
        },
        {
          "name": "ProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true
        },
        {
          "name": "ProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true
        },
        {
          "name": "Tag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true
        },
        {
          "name": "Terminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const rootDir = "/Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[{"src":""}],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _BiVJnL17vL = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const runtimeConfig = useRuntimeConfig();
runtimeConfig?.public?.primevue ?? {};

const stylesToTop = [].join('');
const styleProps = {
  
};
const styles$2 = [
  ,
  BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet(undefined, styleProps) : ''
].join('');



const themes = [
    BaseStyle && BaseStyle.getCommonThemeStyleSheet ? BaseStyle.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle && BaseStyle.getThemeStyleSheet ? BaseStyle.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _ZYbBrctApv = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles$2);
    html.head.push(themes);
  });
});

const plugins = [
  _BiVJnL17vL,
_ZYbBrctApv
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_CBrRbt = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_CBrRbt, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_CBrRbt, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}h1,p,pre{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">` + messages.statusCode + '</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' + messages.description + '</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/kufre-abasibassey/Documents/Projects/Web3/Base/BaseBuildathon_Group4/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      serverRendered: false
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: !!true,
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = await getSPARenderer() ;
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.headEntries()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link = islandHead.link || [];
    islandHead.style = islandHead.style || [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(true)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid].replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <style>\n  .loading {\n  background: linear-gradient(180deg, #16094A 0%, #383AA9 70.26%);\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color:#000319;\n  }\n  \n  #spinner {\n      width: 30px;\n  }\n  \n  #spinner #sGD stop {\n      stop-color: #000319;\n  }\n  \n  #spinner .path-solid {\n      stroke: #000319;\n  }\n  </style>\n\n\n  </head>\n  <body>\n  <div class=\"loading bg-brand\">\n<svg width=\"145\" height=\"70\" viewBox=\"0 0 145 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M23.0599 7.70047C22.6589 9.91227 21.9236 13.4305 20.8542 18.2552C19.7847 23.0677 18.928 26.5798 18.2839 28.7916C18.2352 28.9131 18.1623 28.9739 18.0651 28.9739C17.9679 28.9739 17.8889 28.9253 17.8281 28.8281C17.2813 27.6128 16.388 25.8385 15.1484 23.5052C13.9089 21.1597 13.0156 19.4097 12.4688 18.2552C12.4201 18.1701 12.3715 18.1276 12.3229 18.1276C12.2743 18.1276 12.2318 18.1701 12.1953 18.2552C12.0009 18.8506 11.5148 20.5338 10.737 23.3046C9.97135 26.0633 9.38802 28.0503 8.98698 29.2656C8.92622 29.3871 8.85938 29.4479 8.78646 29.4479H8.76823C8.69531 29.4357 8.6467 29.3932 8.6224 29.3203C4.51476 19.2091 1.77431 12.6223 0.401042 9.55984C0.401042 9.46262 0.413194 9.40186 0.4375 9.37755C0.96007 9.07373 1.5191 8.78814 2.11458 8.52078C3.43924 7.90099 4.19879 7.52425 4.39323 7.39057C4.41754 7.37842 4.44184 7.37234 4.46615 7.37234C4.5026 7.37234 4.53906 7.40273 4.57552 7.46349C4.78212 8.11974 5.34722 9.83936 6.27083 12.6223C7.2066 15.4053 7.89931 17.5078 8.34896 18.9296C8.37326 19.0026 8.42188 19.039 8.49479 19.039C8.55556 19.039 8.59809 19.0026 8.6224 18.9296C8.79254 18.4071 9.3151 16.7178 10.1901 13.8619C10.4089 13.0112 10.9557 11.1944 11.8307 8.41141C11.8672 8.31418 11.9158 8.26557 11.9766 8.26557H12.013C12.0859 8.28988 12.1467 8.33849 12.1953 8.41141C12.7422 9.72391 13.5747 11.6927 14.6927 14.3177C15.8229 16.9427 16.4609 18.4314 16.6068 18.7838C16.6432 18.8446 16.6858 18.8749 16.7344 18.8749H16.7526C16.8012 18.8628 16.8377 18.8203 16.862 18.7473C17.6884 14.1657 18.3264 10.0703 18.776 6.46089C18.8125 6.40012 18.849 6.36974 18.8854 6.36974C18.9097 6.36974 18.934 6.37582 18.9583 6.38797C19.408 6.5338 20.0703 6.72825 20.9453 6.9713C21.8325 7.2022 22.5009 7.39665 22.9505 7.55464C23.0234 7.55464 23.0599 7.60325 23.0599 7.70047ZM46.7957 19.677C46.7957 21.7187 46.1881 23.4383 44.9728 24.8359C43.7575 26.2213 42.1048 26.914 40.0145 26.914C39.1638 26.914 38.2766 26.7196 37.353 26.3307C37.3166 26.3064 37.2862 26.2942 37.2619 26.2942C37.2011 26.2942 37.1707 26.3428 37.1707 26.4401V28.2994C37.1707 28.3967 37.1221 28.4453 37.0249 28.4453C35.3843 28.1293 34.485 27.947 34.327 27.8984L34.2176 27.789C33.6221 20.0234 33.3244 12.3914 33.3244 4.89318C33.3244 4.82026 33.3608 4.77165 33.4338 4.74734C35.5483 4.27339 36.8912 3.96349 37.4624 3.81766C37.4867 3.8055 37.511 3.79943 37.5353 3.79943C37.5596 3.79943 37.5839 3.8055 37.6082 3.81766C37.6325 3.82981 37.6447 3.84804 37.6447 3.87234C37.6447 3.89665 37.6386 3.91488 37.6265 3.92703C37.5414 6.4305 37.4989 8.97651 37.4989 11.5651V13.2968C37.4989 13.394 37.5292 13.4427 37.59 13.4427C37.6143 13.4427 37.6508 13.4305 37.6994 13.4062C38.2706 13.0052 39.1395 12.8046 40.3061 12.8046C42.202 12.8046 43.7575 13.5034 44.9728 14.901C46.1881 16.2986 46.7957 17.8906 46.7957 19.677ZM42.8035 20.2786C42.8035 19.5616 42.5483 18.8324 42.0379 18.0911C41.5275 17.3376 40.9016 16.9609 40.1603 16.9609C38.3496 16.9609 37.4442 18.0121 37.4442 20.1145C37.4442 20.2482 37.4502 20.388 37.4624 20.5338C37.5353 21.6032 37.7419 22.3993 38.0822 22.9218C38.4225 23.4444 39.0362 23.7057 39.9233 23.7057C40.7983 23.7057 41.4971 23.3472 42.0197 22.6302C42.5423 21.9131 42.8035 21.1293 42.8035 20.2786Z\" fill=\"#CBFCC3\"/>\n<mask id=\"path-2-outside-1_36_33611\" maskUnits=\"userSpaceOnUse\" x=\"17.3599\" y=\"7.88675\" width=\"19.6985\" height=\"21.6635\" fill=\"black\">\n<rect fill=\"white\" x=\"17.3599\" y=\"7.88675\" width=\"19.6985\" height=\"21.6635\"/>\n<path d=\"M33.458 17.3486C33.4834 17.4297 33.4614 17.4812 33.3918 17.5031C31.4627 18.3372 29.0985 19.3269 26.299 20.4722C26.2294 20.494 26.194 20.5434 26.1926 20.6202L26.2199 20.7072C26.4853 21.5537 27.0368 22.094 27.8744 22.3281C28.5321 22.5166 29.1683 22.5146 29.7829 22.3219C29.9684 22.2637 30.1543 22.1863 30.3405 22.0897C31.1275 21.7155 31.7689 21.2024 32.2649 20.5501C32.2845 20.5313 32.3058 20.5182 32.329 20.5109C32.3754 20.4964 32.4251 20.5126 32.4781 20.5597C32.9404 21.1407 33.6184 22.0234 34.512 23.2079C34.5338 23.2774 34.5252 23.3311 34.4861 23.3688C33.536 24.4819 32.1565 25.322 30.3475 25.8893C28.4457 26.4856 26.7633 26.319 25.3001 25.3896C23.8333 24.4486 22.6799 23.0654 21.8401 21.24C21.6998 20.9146 21.5788 20.5895 21.477 20.2649C21.0298 18.8385 20.9863 17.4002 21.3467 15.9499C21.7937 14.1668 22.8947 12.8854 24.6499 12.1058C24.9637 11.9692 25.2713 11.8536 25.5728 11.7591C27.1267 11.2718 28.5021 11.4137 29.699 12.1846C31.1158 13.1286 32.2638 14.5963 33.143 16.5877C33.2948 16.9094 33.3998 17.163 33.458 17.3486ZM29.2834 16.4033C28.4903 14.9708 27.5662 14.42 26.5109 14.7509C26.4066 14.7836 26.2982 14.8239 26.1859 14.8719C25.6395 15.1196 25.2626 15.5626 25.0551 16.2008C24.8484 16.8005 24.8414 17.4077 25.0341 18.0223L25.0723 18.1441C25.0941 18.2136 25.1514 18.2339 25.2441 18.2048C26.5675 17.7134 27.8936 17.1702 29.2227 16.5752C29.2922 16.5533 29.3125 16.4961 29.2834 16.4033Z\"/>\n</mask>\n<path d=\"M33.458 17.3486C33.4834 17.4297 33.4614 17.4812 33.3918 17.5031C31.4627 18.3372 29.0985 19.3269 26.299 20.4722C26.2294 20.494 26.194 20.5434 26.1926 20.6202L26.2199 20.7072C26.4853 21.5537 27.0368 22.094 27.8744 22.3281C28.5321 22.5166 29.1683 22.5146 29.7829 22.3219C29.9684 22.2637 30.1543 22.1863 30.3405 22.0897C31.1275 21.7155 31.7689 21.2024 32.2649 20.5501C32.2845 20.5313 32.3058 20.5182 32.329 20.5109C32.3754 20.4964 32.4251 20.5126 32.4781 20.5597C32.9404 21.1407 33.6184 22.0234 34.512 23.2079C34.5338 23.2774 34.5252 23.3311 34.4861 23.3688C33.536 24.4819 32.1565 25.322 30.3475 25.8893C28.4457 26.4856 26.7633 26.319 25.3001 25.3896C23.8333 24.4486 22.6799 23.0654 21.8401 21.24C21.6998 20.9146 21.5788 20.5895 21.477 20.2649C21.0298 18.8385 20.9863 17.4002 21.3467 15.9499C21.7937 14.1668 22.8947 12.8854 24.6499 12.1058C24.9637 11.9692 25.2713 11.8536 25.5728 11.7591C27.1267 11.2718 28.5021 11.4137 29.699 12.1846C31.1158 13.1286 32.2638 14.5963 33.143 16.5877C33.2948 16.9094 33.3998 17.163 33.458 17.3486ZM29.2834 16.4033C28.4903 14.9708 27.5662 14.42 26.5109 14.7509C26.4066 14.7836 26.2982 14.8239 26.1859 14.8719C25.6395 15.1196 25.2626 15.5626 25.0551 16.2008C24.8484 16.8005 24.8414 17.4077 25.0341 18.0223L25.0723 18.1441C25.0941 18.2136 25.1514 18.2339 25.2441 18.2048C26.5675 17.7134 27.8936 17.1702 29.2227 16.5752C29.2922 16.5533 29.3125 16.4961 29.2834 16.4033Z\" fill=\"#EAE2E2\" fill-opacity=\"0.4\"/>\n<path d=\"M33.3918 17.5031L33.0926 16.5489L33.0428 16.5645L32.9949 16.5852L33.3918 17.5031ZM26.299 20.4722L26.5982 21.4264L26.6385 21.4138L26.6777 21.3978L26.299 20.4722ZM26.1926 20.6202L25.1927 20.6023L25.1898 20.7646L25.2384 20.9194L26.1926 20.6202ZM27.8744 22.3281L28.15 21.3668L28.1435 21.365L27.8744 22.3281ZM30.3405 22.0897L29.9111 21.1865L29.8955 21.194L29.88 21.202L30.3405 22.0897ZM32.2649 20.5501L31.5706 19.8305L31.5153 19.8838L31.4689 19.9448L32.2649 20.5501ZM32.4781 20.5597L33.2605 19.937L33.2068 19.8695L33.1423 19.8122L32.4781 20.5597ZM34.512 23.2079L35.4662 22.9087L35.4145 22.7437L35.3103 22.6056L34.512 23.2079ZM34.4861 23.3688L33.7917 22.6492L33.7569 22.6828L33.7255 22.7196L34.4861 23.3688ZM25.3001 25.3896L24.7601 26.2313L24.7639 26.2337L25.3001 25.3896ZM21.8401 21.24L20.9217 21.6358L20.9265 21.6469L20.9316 21.6579L21.8401 21.24ZM21.3467 15.9499L20.3767 15.7068L20.3762 15.7088L21.3467 15.9499ZM24.6499 12.1058L24.2507 11.1889L24.2439 11.1919L24.6499 12.1058ZM29.699 12.1846L30.2535 11.3524L30.247 11.3481L30.2405 11.3439L29.699 12.1846ZM33.143 16.5877L32.2282 16.9915L32.2332 17.003L32.2386 17.0144L33.143 16.5877ZM29.2834 16.4033L30.2376 16.1041L30.2073 16.0075L30.1583 15.9189L29.2834 16.4033ZM26.1859 14.8719L25.7932 13.9522L25.783 13.9566L25.7729 13.9611L26.1859 14.8719ZM25.0551 16.2008L26.0005 16.5267L26.0034 16.5183L26.0062 16.5099L25.0551 16.2008ZM25.2441 18.2048L25.5433 19.159L25.568 19.1513L25.5922 19.1423L25.2441 18.2048ZM29.2227 16.5752L28.9235 15.621L28.8675 15.6385L28.814 15.6625L29.2227 16.5752ZM32.5038 17.6478C32.4807 17.5742 32.4202 17.337 32.5413 17.0543C32.6778 16.7358 32.9386 16.5972 33.0926 16.5489L33.691 18.4572C33.9146 18.3871 34.2212 18.2118 34.3797 17.8419C34.5229 17.5077 34.4607 17.2041 34.4122 17.0494L32.5038 17.6478ZM32.9949 16.5852C31.0739 17.4159 28.7161 18.4029 25.9204 19.5467L26.6777 21.3978C29.4808 20.2509 31.8516 19.2585 33.7887 18.4209L32.9949 16.5852ZM25.9998 19.518C25.801 19.5804 25.5761 19.7084 25.4083 19.9417C25.2438 20.1705 25.1961 20.4145 25.1927 20.6023L27.1924 20.6381C27.1904 20.7491 27.1612 20.9299 27.0321 21.1094C26.8998 21.2934 26.7274 21.3859 26.5982 21.4264L25.9998 19.518ZM25.2384 20.9194L25.2657 21.0064L27.174 20.408L27.1468 20.321L25.2384 20.9194ZM25.2657 21.0064C25.6299 22.168 26.4338 22.9638 27.6052 23.2912L28.1435 21.365C27.6398 21.2242 27.3407 20.9394 27.174 20.408L25.2657 21.0064ZM27.5988 23.2893C28.4324 23.5283 29.2688 23.531 30.0821 23.276L29.4837 21.3677C29.0677 21.4981 28.6319 21.5049 28.15 21.3668L27.5988 23.2893ZM30.0821 23.276C30.3274 23.1991 30.5671 23.0987 30.801 22.9773L29.88 21.202C29.7415 21.2739 29.6094 21.3282 29.4837 21.3677L30.0821 23.276ZM30.7699 22.9928C31.6917 22.5546 32.4621 21.9428 33.0609 21.1554L31.4689 19.9448C31.0757 20.4619 30.5633 20.8765 29.9111 21.1865L30.7699 22.9928ZM32.9592 21.2698C32.8804 21.3458 32.7699 21.4207 32.6282 21.4651L32.0298 19.5567C31.8418 19.6157 31.6885 19.7167 31.5706 19.8305L32.9592 21.2698ZM32.6282 21.4651C32.4373 21.525 32.2474 21.5141 32.0899 21.4626C31.9468 21.4157 31.8555 21.3443 31.8138 21.3072L33.1423 19.8122C32.958 19.6485 32.5505 19.3935 32.0298 19.5567L32.6282 21.4651ZM31.6956 21.1824C32.1496 21.7529 32.8213 22.6272 33.7137 23.8101L35.3103 22.6056C34.4156 21.4196 33.7312 20.5285 33.2605 19.937L31.6956 21.1824ZM33.5578 23.5071C33.5374 23.442 33.5073 23.3108 33.5346 23.1412C33.5647 22.9544 33.6556 22.7806 33.7917 22.6492L35.1804 24.0885C35.586 23.6971 35.5562 23.1956 35.4662 22.9087L33.5578 23.5071ZM33.7255 22.7196C32.9287 23.6531 31.73 24.4077 30.0483 24.9351L30.6467 26.8434C32.5829 26.2363 34.1433 25.3107 35.2467 24.0181L33.7255 22.7196ZM30.0483 24.9351C28.3806 25.458 27.012 25.2924 25.8363 24.5455L24.7639 26.2337C26.5145 27.3457 28.5108 27.5132 30.6467 26.8434L30.0483 24.9351ZM25.8401 24.5479C24.5574 23.7251 23.521 22.501 22.7485 20.822L20.9316 21.6579C21.8388 23.6297 23.1091 25.1721 24.7601 26.2313L25.8401 24.5479ZM22.7584 20.8442C22.6312 20.549 22.5223 20.2562 22.4312 19.9657L20.5228 20.5641C20.6353 20.9229 20.7685 21.2801 20.9217 21.6358L22.7584 20.8442ZM22.4312 19.9657C22.0389 18.7145 22.0011 17.4631 22.3171 16.1911L20.3762 15.7088C19.9715 17.3374 20.0206 18.9626 20.5228 20.5641L22.4312 19.9657ZM22.3166 16.1931C22.685 14.7236 23.5673 13.6809 25.0558 13.0197L24.2439 11.1919C22.2222 12.0899 20.9023 13.61 20.3767 15.7068L22.3166 16.1931ZM25.049 13.0227C25.3328 12.8991 25.6071 12.7963 25.872 12.7133L25.2736 10.8049C24.9355 10.9109 24.5945 11.0393 24.2507 11.1889L25.049 13.0227ZM25.872 12.7133C27.1883 12.3005 28.2477 12.4393 29.1576 13.0253L30.2405 11.3439C28.7565 10.3881 27.065 10.2432 25.2736 10.8049L25.872 12.7133ZM29.1446 13.0168C30.3643 13.8295 31.4047 15.1263 32.2282 16.9915L34.0578 16.1838C33.1229 14.0663 31.8674 12.4277 30.2535 11.3524L29.1446 13.0168ZM32.2386 17.0144C32.3841 17.3227 32.4662 17.5277 32.5038 17.6478L34.4122 17.0494C34.3335 16.7983 34.2055 16.4961 34.0473 16.1609L32.2386 17.0144ZM30.1583 15.9189C29.7172 15.1223 29.1809 14.4582 28.5074 14.0568C27.7932 13.6311 27.0023 13.5488 26.2117 13.7967L26.8101 15.7051C27.0748 15.6221 27.2736 15.6497 27.4835 15.7748C27.7342 15.9242 28.0565 16.2517 28.4085 16.8876L30.1583 15.9189ZM26.2117 13.7967C26.0722 13.8404 25.9326 13.8927 25.7932 13.9522L26.5786 15.7916C26.6638 15.7552 26.7409 15.7268 26.8101 15.7051L26.2117 13.7967ZM25.7729 13.9611C24.9388 14.3394 24.387 15.0214 24.1041 15.8917L26.0062 16.5099C26.1382 16.1038 26.3402 15.8999 26.5989 15.7826L25.7729 13.9611ZM24.1097 15.8749C23.8322 16.68 23.8243 17.5063 24.0799 18.3215L25.9883 17.7231C25.8585 17.3091 25.8646 16.9211 26.0005 16.5267L24.1097 15.8749ZM24.0799 18.3215L24.1181 18.4433L26.0264 17.8449L25.9883 17.7231L24.0799 18.3215ZM24.1181 18.4433C24.202 18.7109 24.4121 19.0178 24.7984 19.1543C25.121 19.2683 25.4052 19.2023 25.5433 19.159L24.9449 17.2506C24.9903 17.2364 25.1995 17.1748 25.4647 17.2686C25.7938 17.3848 25.9644 17.6468 26.0264 17.8449L24.1181 18.4433ZM25.5922 19.1423C26.9366 18.6431 28.283 18.0915 29.6313 17.4879L28.814 15.6625C27.5043 16.2489 26.1983 16.7838 24.896 17.2673L25.5922 19.1423ZM29.5219 17.5294C29.7895 17.4454 30.0964 17.2353 30.2329 16.849C30.3469 16.5264 30.2809 16.2422 30.2376 16.1041L28.3292 16.7025C28.315 16.6571 28.2534 16.448 28.3471 16.1827C28.4634 15.8536 28.7254 15.6831 28.9235 15.621L29.5219 17.5294Z\" fill=\"white\" mask=\"url(#path-2-outside-1_36_33611)\"/>\n<path d=\"M62.4469 6.46512C62.4483 6.58664 62.3892 6.73922 62.2697 6.92285C62.1622 7.0942 61.9885 7.31491 61.7484 7.58496L61.3707 8.04494C58.2808 12.1387 56.3467 14.7125 55.5685 15.7664C55.5568 15.803 55.551 15.8335 55.5513 15.8578C55.5518 15.9064 55.5826 15.9364 55.6434 15.9479C58.389 16.9381 59.7763 18.7275 59.8052 21.3158C59.8256 23.1508 59.1977 24.598 57.9212 25.6574C56.6569 26.7168 55.0708 27.2571 53.163 27.2783C52.4824 27.2859 51.569 27.1138 50.4227 26.762C49.2762 26.3981 48.4879 26.0058 48.0578 25.5852C48.0332 25.5612 48.0205 25.5127 48.0197 25.4398C48.2089 24.9637 48.5557 23.9146 49.0602 22.2926C49.096 22.2314 49.1382 22.2006 49.1868 22.2C49.2111 22.1997 49.2354 22.2055 49.2599 22.2174C50.5331 23.0418 51.7772 23.4472 52.9924 23.4337C53.7702 23.425 54.3998 23.2113 54.8812 22.7927C55.3626 22.362 55.599 21.7699 55.5906 21.0165C55.5776 19.8499 55.1359 18.9312 54.2655 18.2603C53.395 17.5772 52.3397 17.2183 51.0997 17.1836L50.6986 17.188C50.4921 17.1903 50.3882 17.1429 50.3871 17.0457C50.3866 16.9971 50.4102 16.936 50.458 16.8626C51.0445 16.0539 51.864 14.8902 52.9166 13.3714C53.9812 11.8403 54.7589 10.7439 55.2498 10.0821C55.3099 10.0207 55.3398 9.97173 55.3394 9.93527C55.3388 9.88667 55.2656 9.86318 55.1198 9.8648C51.2959 10.2599 49.3231 10.4582 49.2016 10.4595C49.1287 10.4603 49.0918 10.4182 49.0908 10.3332C49.0022 10.0181 48.862 9.43634 48.6703 8.58774C48.4783 7.72698 48.3129 7.06038 48.174 6.58794C48.1615 6.56377 48.1552 6.53954 48.1549 6.51523C48.1542 6.45447 48.2025 6.42355 48.2997 6.42246C49.1139 6.41338 50.2683 6.39442 51.7628 6.36559C53.2574 6.33675 54.6122 6.30948 55.8273 6.28377C57.0545 6.25792 58.2148 6.22674 59.3082 6.19023C59.5999 6.18698 60.0494 6.16981 60.6567 6.13872C61.2762 6.1075 61.7317 6.09026 62.0234 6.08701C62.3029 6.08389 62.4441 6.20993 62.4469 6.46512Z\" fill=\"#CBFCC3\"/>\n<path d=\"M82.4069 23.2635C82.4228 24.6853 81.7606 25.7925 80.4204 26.5853C79.0922 27.3658 77.6322 27.7649 76.0403 27.7827C74.2175 27.8031 72.7302 27.3943 71.5784 26.5564C71.5415 26.5203 71.523 26.4902 71.5227 26.4659C71.5224 26.4415 71.5283 26.4233 71.5403 26.411C71.6579 26.0572 71.8346 25.5509 72.0703 24.8919C72.3182 24.2329 72.501 23.7386 72.6189 23.4092C72.6426 23.3603 72.6727 23.3356 72.7092 23.3352C72.7457 23.3348 72.7822 23.3466 72.819 23.3705C74.3961 24.2036 75.5674 24.6159 76.333 24.6074C76.8312 24.6018 77.3038 24.475 77.7507 24.2269C78.1975 23.9667 78.418 23.5754 78.4121 23.0528C78.4071 22.6032 78.2025 22.2348 77.7982 21.9476C77.3938 21.6483 76.7892 21.3816 75.9845 21.1475C75.1917 20.9011 74.7709 20.7661 74.7221 20.7423C73.9037 20.3747 73.2654 19.8106 72.8072 19.05C72.3489 18.2773 72.1145 17.417 72.1039 16.4692C72.0879 15.0352 72.6278 13.8625 73.7236 12.9509C74.8194 12.0393 76.1268 11.575 77.6458 11.5581C79.019 11.5427 80.3419 11.929 81.6147 12.717C81.6393 12.741 81.6521 12.8016 81.6532 12.8988C81.511 13.2286 81.2794 13.7112 80.9584 14.3468C80.6495 14.9822 80.4057 15.465 80.2271 15.7951C80.179 15.8443 80.1428 15.869 80.1185 15.8693C80.0942 15.8695 80.0698 15.8577 80.0452 15.8336C79.0918 15.346 78.3052 15.1056 77.6855 15.1125C77.2115 15.1178 76.7575 15.2687 76.3232 15.5653C75.901 15.8495 75.6923 16.2043 75.6971 16.6296C75.7051 17.3466 75.9537 17.8421 76.4429 18.1162C76.5528 18.1635 77.1819 18.4543 78.3303 18.9884C78.9776 19.2728 79.4724 19.5043 79.8147 19.6828C80.169 19.849 80.579 20.1057 81.0447 20.453C81.5103 20.7881 81.849 21.1914 82.0609 21.6631C82.2849 22.1346 82.4003 22.668 82.4069 23.2635ZM95.3633 25.0695L95.3281 25.1793C93.8981 26.6415 91.9619 27.3863 89.5193 27.4135C87.4535 27.4366 85.8525 26.6462 84.7165 25.0425C83.5803 23.4266 83.0016 21.6647 82.9803 19.7569C82.9584 17.7882 83.5954 16.0614 84.8914 14.5763C86.1995 13.0912 87.8622 12.3373 89.8795 12.3148C91.3256 12.2987 92.775 12.5803 94.2277 13.1596C94.277 13.2198 94.3019 13.2742 94.3025 13.3228C94.2212 13.664 94.0936 14.2063 93.9195 14.9496C93.7454 15.6807 93.6359 16.2106 93.5909 16.5393C93.5431 16.6127 93.4767 16.6499 93.3916 16.6509C92.1963 16.2632 91.3251 16.0724 90.7783 16.0785C89.5874 16.0917 88.6743 16.4969 88.0391 17.294C87.4159 18.0788 87.1109 19.0666 87.1242 20.2575C87.1359 21.3026 87.4739 22.186 88.1382 22.9078C88.8146 23.6173 89.6388 23.9667 90.611 23.9558C91.7776 23.9428 92.9743 23.3582 94.201 22.2021C94.2372 22.1774 94.2735 22.1648 94.31 22.1644C94.3707 22.1637 94.4137 22.1997 94.4388 22.2724C94.5148 22.5511 94.6721 23.0294 94.9106 23.7073C95.1612 24.3851 95.3121 24.8392 95.3633 25.0695ZM109.371 16.5455C109.414 17.1041 109.438 17.6507 109.444 18.1854C109.461 19.7044 109.338 21.1764 109.074 22.6013C108.936 23.3199 108.506 25.0262 107.782 27.7202C107.783 27.7931 107.765 27.8297 107.729 27.8301C107.704 27.8304 107.674 27.8186 107.637 27.7947C107.418 27.7242 106.912 27.5962 106.12 27.4106C105.34 27.2248 104.797 27.079 104.492 26.973C104.444 26.9735 104.419 26.9252 104.418 26.828C105.232 23.586 105.63 21.1084 105.611 19.3949C105.581 16.6729 104.903 15.3192 103.579 15.334C102.959 15.3409 102.288 15.7069 101.567 16.432C100.858 17.1449 100.483 17.8236 100.442 18.4682C100.315 20.1954 100.199 23.3991 100.093 28.0794C100.094 28.1523 100.058 28.1892 99.9849 28.19C99.7175 28.193 99.3407 28.1911 98.8545 28.1844C98.3683 28.1777 97.9976 28.1757 97.7424 28.1786C97.6695 28.1794 97.5418 28.1747 97.3594 28.1646C97.1892 28.1544 97.0554 28.1498 96.9582 28.1509C96.8853 28.1517 96.8484 28.1156 96.8476 28.0427C96.7941 25.4303 96.7098 22.7757 96.5947 20.0789C96.4794 17.37 96.3075 13.9507 96.0791 9.821C95.8629 5.69121 95.724 3.04329 95.6623 1.87724C95.6618 1.82863 95.6855 1.77975 95.7336 1.7306C96.1333 1.6046 96.7754 1.42729 97.6601 1.19865C98.5568 0.957729 99.2049 0.768194 99.6044 0.630046C99.7016 0.628961 99.7508 0.683103 99.752 0.792471C99.7609 1.58235 99.822 4.88743 99.9356 10.7077C100.005 12.5786 100.041 13.5869 100.042 13.7327C100.044 13.8543 100.069 13.9148 100.117 13.9142C100.154 13.9138 100.208 13.8767 100.28 13.803C101.502 12.173 102.945 11.3486 104.61 11.3301C106.007 11.3145 107.131 11.8063 107.98 12.8056C108.842 13.8047 109.306 15.0513 109.371 16.5455ZM123.561 19.4134C123.574 20.58 123.38 21.7063 122.979 22.7925C122.578 23.8786 121.859 24.8468 120.823 25.6969C119.788 26.5471 118.523 26.9805 117.028 26.9972C115.934 27.0094 114.947 26.7469 114.066 26.2098C113.197 25.6605 112.52 24.9631 112.037 24.1178C111.553 23.2603 111.185 22.3954 110.933 21.5232C110.692 20.6386 110.567 19.7832 110.557 18.9569C110.545 17.8389 110.763 16.694 111.212 15.5223C111.661 14.3384 112.402 13.291 113.437 12.3801C114.472 11.457 115.682 10.9877 117.068 10.9723C118.04 10.9614 118.905 11.1462 119.663 11.5267C120.432 11.8949 121.052 12.3862 121.52 13.0008C121.989 13.6033 122.38 14.2978 122.692 15.0842C123.017 15.8585 123.238 16.6034 123.355 17.3192C123.485 18.0226 123.553 18.7207 123.561 19.4134ZM119.856 19.0354C119.845 18.0389 119.609 17.0754 119.149 16.1447C118.689 15.2018 117.961 14.736 116.964 14.7471C116.296 14.7546 115.758 15.0279 115.351 15.5672C114.943 16.1065 114.688 16.6502 114.585 17.1983C114.482 17.7463 114.433 18.2938 114.439 18.8406C114.445 19.3146 114.455 19.7034 114.47 20.007C114.486 20.2985 114.551 20.6989 114.666 21.208C114.781 21.7172 114.932 22.1288 115.118 22.4427C115.315 22.7443 115.616 23.0205 116.02 23.2712C116.424 23.5098 116.911 23.6259 117.482 23.6195C118.126 23.6123 118.639 23.2966 119.021 22.6726C119.403 22.0485 119.639 21.4321 119.73 20.8234C119.82 20.2026 119.862 19.6066 119.856 19.0354ZM137.297 19.2601C137.31 20.4267 137.116 21.553 136.715 22.6392C136.314 23.7253 135.596 24.6935 134.56 25.5436C133.524 26.3938 132.259 26.8272 130.764 26.8439C129.671 26.8561 128.683 26.5936 127.802 26.0566C126.933 25.5072 126.257 24.8098 125.774 23.9645C125.29 23.107 124.922 22.2421 124.669 21.3699C124.428 20.4853 124.303 19.6299 124.294 18.8036C124.282 17.6856 124.5 16.5407 124.949 15.369C125.397 14.1851 126.139 13.1377 127.174 12.2268C128.209 11.3037 129.419 10.8344 130.804 10.819C131.777 10.8081 132.642 10.9929 133.399 11.3734C134.169 11.7416 134.788 12.2329 135.257 12.8475C135.726 13.45 136.116 14.1445 136.429 14.9309C136.753 15.7052 136.974 16.4501 137.092 17.1659C137.221 17.8693 137.29 18.5674 137.297 19.2601ZM133.592 18.8821C133.581 17.8857 133.346 16.9221 132.886 15.9914C132.425 15.0485 131.697 14.5827 130.701 14.5938C130.032 14.6013 129.495 14.8746 129.087 15.4139C128.68 15.9532 128.425 16.4969 128.322 17.045C128.218 17.593 128.17 18.1405 128.176 18.6873C128.181 19.1613 128.192 19.5501 128.207 19.8537C128.223 20.1452 128.288 20.5456 128.403 21.0547C128.518 21.5639 128.668 21.9755 128.854 22.2894C129.052 22.591 129.353 22.8672 129.757 23.1179C130.16 23.3565 130.648 23.4726 131.219 23.4662C131.863 23.459 132.376 23.1434 132.758 22.5193C133.14 21.8952 133.376 21.2788 133.467 20.6701C133.557 20.0493 133.599 19.4533 133.592 18.8821ZM142.977 2.8441C142.876 13.358 142.846 20.4925 142.888 24.2475C142.896 24.9644 142.909 25.5598 142.926 26.0336C142.927 26.1065 142.879 26.1435 142.781 26.1446L139.5 26.1812C139.427 26.182 139.391 26.146 139.39 26.0731C139.36 25.5508 139.329 24.9982 139.298 24.4151C139.267 23.82 139.236 23.164 139.203 22.4473C139.171 21.7306 139.141 21.1719 139.112 20.7712C138.661 9.75294 138.434 4.15269 138.432 3.97041C138.43 3.82459 138.514 3.72642 138.684 3.67592C138.987 3.59961 139.642 3.45254 140.648 3.2347C141.654 3.00471 142.369 2.83873 142.794 2.73677C142.83 2.72421 142.86 2.71779 142.885 2.71752C142.945 2.71685 142.976 2.75904 142.977 2.8441Z\" fill=\"#CBFCC3\"/>\n</svg>\n\n\n  </div> \n </body>\n  </html>";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
