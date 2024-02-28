"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[2625],{50045:(e,n,t)=>{t.d(n,{P:()=>a,R:()=>i});var r=Object.defineProperty,o=(e,n)=>r(e,"name",{value:n,configurable:!0});class i{constructor(e,n){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=n}setStart(e,n){this.start=new a(e,n)}setEnd(e,n){this.end=new a(e,n)}}o(i,"Range");class a{constructor(e,n){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=n}setLine(e){this.line=e}setCharacter(e){this.character=e}}o(a,"Position")},52625:(e,n,t)=>{t.r(n);var r=t(97480),o=t(46364);function i(e){var n,t,r;const i=e.getSchema(),a=null!==(n=null!==(t=null!==(r=null==i?void 0:i.astNode)&&void 0!==r?r:null==i?void 0:i.getQueryType())&&void 0!==t?t:null==i?void 0:i.getMutationType())&&void 0!==n?n:null==i?void 0:i.getSubscriptionType();let s=0;return{SchemaDefinition(n){a?e.reportError(new o.__("Cannot define a new schema within a schema extension.",{nodes:n})):(s>0&&e.reportError(new o.__("Must provide only one schema definition.",{nodes:n})),++s)}}}function a(e){const n=e.getSchema(),t=Object.create(null),r=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:i,SchemaExtension:i};function i(n){var i;const a=null!==(i=n.operationTypes)&&void 0!==i?i:[];for(const s of a){const n=s.operation,i=t[n];r[n]?e.reportError(new o.__(`Type for ${n} already defined in the schema. It cannot be redefined.`,{nodes:s})):i?e.reportError(new o.__(`There can be only one ${n} type in schema.`,{nodes:[i,s]})):t[n]=s}return!1}}function s(e){const n=Object.create(null),t=e.getSchema();return{ScalarTypeDefinition:r,ObjectTypeDefinition:r,InterfaceTypeDefinition:r,UnionTypeDefinition:r,EnumTypeDefinition:r,InputObjectTypeDefinition:r};function r(r){const i=r.name.value;if(null==t||!t.getType(i))return n[i]?e.reportError(new o.__(`There can be only one type named "${i}".`,{nodes:[n[i],r.name]})):n[i]=r.name,!1;e.reportError(new o.__(`Type "${i}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:r.name}))}}var c=t(93058);function u(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{EnumTypeDefinition:i,EnumTypeExtension:i};function i(n){var i;const a=n.name.value;r[a]||(r[a]=Object.create(null));const s=null!==(i=n.values)&&void 0!==i?i:[],u=r[a];for(const r of s){const n=r.name.value,i=t[a];(0,c.EM)(i)&&i.getValue(n)?e.reportError(new o.__(`Enum value "${a}.${n}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:r.name})):u[n]?e.reportError(new o.__(`Enum value "${a}.${n}" can only be defined once.`,{nodes:[u[n],r.name]})):u[n]=r.name}return!1}}function l(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{InputObjectTypeDefinition:i,InputObjectTypeExtension:i,InterfaceTypeDefinition:i,InterfaceTypeExtension:i,ObjectTypeDefinition:i,ObjectTypeExtension:i};function i(n){var i;const a=n.name.value;r[a]||(r[a]=Object.create(null));const s=null!==(i=n.fields)&&void 0!==i?i:[],c=r[a];for(const r of s){const n=r.name.value;f(t[a],n)?e.reportError(new o.__(`Field "${a}.${n}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:r.name})):c[n]?e.reportError(new o.__(`Field "${a}.${n}" can only be defined once.`,{nodes:[c[n],r.name]})):c[n]=r.name}return!1}}function f(e,n){return!!((0,c.lp)(e)||(0,c.oT)(e)||(0,c.hL)(e))&&null!=e.getFields()[n]}function d(e){const n=Object.create(null),t=e.getSchema();return{DirectiveDefinition(r){const i=r.name.value;if(null==t||!t.getDirective(i))return n[i]?e.reportError(new o.__(`There can be only one directive named "@${i}".`,{nodes:[n[i],r.name]})):n[i]=r.name,!1;e.reportError(new o.__(`Directive "@${i}" already exists in the schema. It cannot be redefined.`,{nodes:r.name}))}}}var p=t(53177),E=t(3294),m=t(97359);function h(e){return e.kind===m.h.OPERATION_DEFINITION||e.kind===m.h.FRAGMENT_DEFINITION}function _(e){return e.kind===m.h.SCHEMA_DEFINITION||v(e)||e.kind===m.h.DIRECTIVE_DEFINITION}function v(e){return e.kind===m.h.SCALAR_TYPE_DEFINITION||e.kind===m.h.OBJECT_TYPE_DEFINITION||e.kind===m.h.INTERFACE_TYPE_DEFINITION||e.kind===m.h.UNION_TYPE_DEFINITION||e.kind===m.h.ENUM_TYPE_DEFINITION||e.kind===m.h.INPUT_OBJECT_TYPE_DEFINITION}function T(e){return e.kind===m.h.SCHEMA_EXTENSION||g(e)}function g(e){return e.kind===m.h.SCALAR_TYPE_EXTENSION||e.kind===m.h.OBJECT_TYPE_EXTENSION||e.kind===m.h.INTERFACE_TYPE_EXTENSION||e.kind===m.h.UNION_TYPE_EXTENSION||e.kind===m.h.ENUM_TYPE_EXTENSION||e.kind===m.h.INPUT_OBJECT_TYPE_EXTENSION}var I=t(52433);function N(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);for(const o of e.getDocument().definitions)v(o)&&(r[o.name.value]=!0);const i=[...Object.keys(t),...Object.keys(r)];return{NamedType(n,a,s,c,u){const l=n.name.value;if(!t[l]&&!r[l]){var f;const t=null!==(f=u[2])&&void 0!==f?f:s,r=null!=t&&("kind"in(d=t)&&(_(d)||T(d)));if(r&&y.includes(l))return;const a=(0,E.D)(l,r?y.concat(i):i);e.reportError(new o.__(`Unknown type "${l}".`+(0,p.l)(a),{nodes:n}))}var d}}}const y=[...t(3801).HS,...I.nL].map((e=>e.name));var O=t(25821),b=t(29551),S=t(72380),D=t(99878),F=t(68238);function $(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():F.V4;for(const o of r)n[o.name]=o.locations;const i=e.getDocument().definitions;for(const o of i)o.kind===m.h.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map((e=>e.value)));return{Directive(t,r,i,a,s){const c=t.name.value,u=n[c];if(!u)return void e.reportError(new o.__(`Unknown directive "@${c}".`,{nodes:t}));const l=function(e){const n=e[e.length-1];switch("kind"in n||(0,b.k)(!1),n.kind){case m.h.OPERATION_DEFINITION:return function(e){switch(e){case S.ku.QUERY:return D.B.QUERY;case S.ku.MUTATION:return D.B.MUTATION;case S.ku.SUBSCRIPTION:return D.B.SUBSCRIPTION}}(n.operation);case m.h.FIELD:return D.B.FIELD;case m.h.FRAGMENT_SPREAD:return D.B.FRAGMENT_SPREAD;case m.h.INLINE_FRAGMENT:return D.B.INLINE_FRAGMENT;case m.h.FRAGMENT_DEFINITION:return D.B.FRAGMENT_DEFINITION;case m.h.VARIABLE_DEFINITION:return D.B.VARIABLE_DEFINITION;case m.h.SCHEMA_DEFINITION:case m.h.SCHEMA_EXTENSION:return D.B.SCHEMA;case m.h.SCALAR_TYPE_DEFINITION:case m.h.SCALAR_TYPE_EXTENSION:return D.B.SCALAR;case m.h.OBJECT_TYPE_DEFINITION:case m.h.OBJECT_TYPE_EXTENSION:return D.B.OBJECT;case m.h.FIELD_DEFINITION:return D.B.FIELD_DEFINITION;case m.h.INTERFACE_TYPE_DEFINITION:case m.h.INTERFACE_TYPE_EXTENSION:return D.B.INTERFACE;case m.h.UNION_TYPE_DEFINITION:case m.h.UNION_TYPE_EXTENSION:return D.B.UNION;case m.h.ENUM_TYPE_DEFINITION:case m.h.ENUM_TYPE_EXTENSION:return D.B.ENUM;case m.h.ENUM_VALUE_DEFINITION:return D.B.ENUM_VALUE;case m.h.INPUT_OBJECT_TYPE_DEFINITION:case m.h.INPUT_OBJECT_TYPE_EXTENSION:return D.B.INPUT_OBJECT;case m.h.INPUT_VALUE_DEFINITION:{const n=e[e.length-3];return"kind"in n||(0,b.k)(!1),n.kind===m.h.INPUT_OBJECT_TYPE_DEFINITION?D.B.INPUT_FIELD_DEFINITION:D.B.ARGUMENT_DEFINITION}default:(0,b.k)(!1,"Unexpected kind: "+(0,O.X)(n.kind))}}(s);l&&!u.includes(l)&&e.reportError(new o.__(`Directive "@${c}" may not be used on ${l}.`,{nodes:t}))}}}function w(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():F.V4;for(const o of r)n[o.name]=!o.isRepeatable;const i=e.getDocument().definitions;for(const o of i)o.kind===m.h.DIRECTIVE_DEFINITION&&(n[o.name.value]=!o.repeatable);const a=Object.create(null),s=Object.create(null);return{enter(t){if(!("directives"in t)||!t.directives)return;let r;if(t.kind===m.h.SCHEMA_DEFINITION||t.kind===m.h.SCHEMA_EXTENSION)r=a;else if(v(t)||g(t)){const e=t.name.value;r=s[e],void 0===r&&(s[e]=r=Object.create(null))}else r=Object.create(null);for(const i of t.directives){const t=i.name.value;n[t]&&(r[t]?e.reportError(new o.__(`The directive "@${t}" can only be used once at this location.`,{nodes:[r[t],i]})):r[t]=i)}}}}function P(e){const n=e.getSchema(),t=Object.create(null);for(const o of e.getDocument().definitions)v(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:r,ObjectTypeExtension:r,InterfaceTypeExtension:r,UnionTypeExtension:r,EnumTypeExtension:r,InputObjectTypeExtension:r};function r(r){const i=r.name.value,a=t[i],s=null==n?void 0:n.getType(i);let u;if(a?u=A[a.kind]:s&&(u=function(e){if((0,c.KA)(e))return m.h.SCALAR_TYPE_EXTENSION;if((0,c.lp)(e))return m.h.OBJECT_TYPE_EXTENSION;if((0,c.oT)(e))return m.h.INTERFACE_TYPE_EXTENSION;if((0,c.EN)(e))return m.h.UNION_TYPE_EXTENSION;if((0,c.EM)(e))return m.h.ENUM_TYPE_EXTENSION;if((0,c.hL)(e))return m.h.INPUT_OBJECT_TYPE_EXTENSION;(0,b.k)(!1,"Unexpected type: "+(0,O.X)(e))}(s)),u){if(u!==r.kind){const n=function(e){switch(e){case m.h.SCALAR_TYPE_EXTENSION:return"scalar";case m.h.OBJECT_TYPE_EXTENSION:return"object";case m.h.INTERFACE_TYPE_EXTENSION:return"interface";case m.h.UNION_TYPE_EXTENSION:return"union";case m.h.ENUM_TYPE_EXTENSION:return"enum";case m.h.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:(0,b.k)(!1,"Unexpected kind: "+(0,O.X)(e))}}(r.kind);e.reportError(new o.__(`Cannot extend non-${n} type "${i}".`,{nodes:a?[a,r]:r}))}}else{const a=Object.keys({...t,...null==n?void 0:n.getTypeMap()}),s=(0,E.D)(i,a);e.reportError(new o.__(`Cannot extend type "${i}" because it is not defined.`+(0,p.l)(s),{nodes:r.name}))}}}const A={[m.h.SCALAR_TYPE_DEFINITION]:m.h.SCALAR_TYPE_EXTENSION,[m.h.OBJECT_TYPE_DEFINITION]:m.h.OBJECT_TYPE_EXTENSION,[m.h.INTERFACE_TYPE_DEFINITION]:m.h.INTERFACE_TYPE_EXTENSION,[m.h.UNION_TYPE_DEFINITION]:m.h.UNION_TYPE_EXTENSION,[m.h.ENUM_TYPE_DEFINITION]:m.h.ENUM_TYPE_EXTENSION,[m.h.INPUT_OBJECT_TYPE_DEFINITION]:m.h.INPUT_OBJECT_TYPE_EXTENSION};function C(e,n){const t=new Map;for(const r of e){const e=n(r),o=t.get(e);void 0===o?t.set(e,[r]):o.push(r)}return t}function k(e){return{Field:n,Directive:n};function n(n){var t;const r=C(null!==(t=n.arguments)&&void 0!==t?t:[],(e=>e.name.value));for(const[i,a]of r)a.length>1&&e.reportError(new o.__(`There can be only one argument named "${i}".`,{nodes:a.map((e=>e.name))}))}}function R(e){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const e=n.pop();e||(0,b.k)(!1),t=e}},ObjectField(n){const r=n.name.value;t[r]?e.reportError(new o.__(`There can be only one input field named "${r}".`,{nodes:[t[r],n.name]})):t[r]=n.name}}}function j(e){return{Document(n){for(const t of n.definitions)if(!h(t)){const n=t.kind===m.h.SCHEMA_DEFINITION||t.kind===m.h.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';e.reportError(new o.__(`The ${n} definition is not executable.`,{nodes:t}))}return!1}}}var U=t(8224);var V=t(16918),M=t(30077);function X(e){const n=Object.create(null),t=e.getSchema(),r=t?t.getDirectives():F.V4;for(const o of r)n[o.name]=o.args.map((e=>e.name));const i=e.getDocument().definitions;for(const o of i)if(o.kind===m.h.DIRECTIVE_DEFINITION){var a;const e=null!==(a=o.arguments)&&void 0!==a?a:[];n[o.name.value]=e.map((e=>e.name.value))}return{Directive(t){const r=t.name.value,i=n[r];if(t.arguments&&i)for(const n of t.arguments){const t=n.name.value;if(!i.includes(t)){const a=(0,E.D)(t,i);e.reportError(new o.__(`Unknown argument "${t}" on directive "@${r}".`+(0,p.l)(a),{nodes:n}))}}return!1}}}function L(e){return{FragmentSpread(n){const t=n.name.value;e.getFragment(t)||e.reportError(new o.__(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Y(e){const n=[],t=[];return{OperationDefinition:e=>(n.push(e),!1),FragmentDefinition:e=>(t.push(e),!1),Document:{leave(){const r=Object.create(null);for(const t of n)for(const n of e.getRecursivelyReferencedFragments(t))r[n.name.value]=!0;for(const n of t){const t=n.name.value;!0!==r[t]&&e.reportError(new o.__(`Fragment "${t}" is never used.`,{nodes:n}))}}}}}function x(e){switch(e.kind){case m.h.OBJECT:return{...e,fields:(n=e.fields,n.map((e=>({...e,value:x(e.value)}))).sort(((e,n)=>(0,U.K)(e.name.value,n.name.value))))};case m.h.LIST:return{...e,values:e.values.map(x)};case m.h.INT:case m.h.FLOAT:case m.h.STRING:case m.h.BOOLEAN:case m.h.NULL:case m.h.ENUM:case m.h.VARIABLE:return e}var n}function B(e){return Array.isArray(e)?e.map((([e,n])=>`subfields "${e}" conflict because `+B(n))).join(" and "):e}function G(e,n,t,r,o,i,a){const s=e.getFragment(a);if(!s)return;const[c,u]=W(e,t,s);if(i!==c){H(e,n,t,r,o,i,c);for(const s of u)r.has(s,a,o)||(r.add(s,a,o),G(e,n,t,r,o,i,s))}}function J(e,n,t,r,o,i,a){if(i===a)return;if(r.has(i,a,o))return;r.add(i,a,o);const s=e.getFragment(i),c=e.getFragment(a);if(!s||!c)return;const[u,l]=W(e,t,s),[f,d]=W(e,t,c);H(e,n,t,r,o,u,f);for(const p of d)J(e,n,t,r,o,i,p);for(const p of l)J(e,n,t,r,o,p,a)}function H(e,n,t,r,o,i,a){for(const[s,c]of Object.entries(i)){const i=a[s];if(i)for(const a of c)for(const c of i){const i=z(e,t,r,o,s,a,c);i&&n.push(i)}}}function z(e,n,t,r,o,i,a){const[s,u,l]=i,[f,d,p]=a,E=r||s!==f&&(0,c.lp)(s)&&(0,c.lp)(f);if(!E){const e=u.name.value,n=d.name.value;if(e!==n)return[[o,`"${e}" and "${n}" are different fields`],[u],[d]];if(!function(e,n){const t=e.arguments,r=n.arguments;if(void 0===t||0===t.length)return void 0===r||0===r.length;if(void 0===r||0===r.length)return!1;if(t.length!==r.length)return!1;const o=new Map(r.map((({name:e,value:n})=>[e.value,n])));return t.every((e=>{const n=e.value,t=o.get(e.name.value);return void 0!==t&&Q(n)===Q(t)}))}(u,d))return[[o,"they have differing arguments"],[u],[d]]}const m=null==l?void 0:l.type,h=null==p?void 0:p.type;if(m&&h&&q(m,h))return[[o,`they return conflicting types "${(0,O.X)(m)}" and "${(0,O.X)(h)}"`],[u],[d]];const _=u.selectionSet,v=d.selectionSet;if(_&&v){const r=function(e,n,t,r,o,i,a,s){const c=[],[u,l]=K(e,n,o,i),[f,d]=K(e,n,a,s);H(e,c,n,t,r,u,f);for(const p of d)G(e,c,n,t,r,u,p);for(const p of l)G(e,c,n,t,r,f,p);for(const p of l)for(const o of d)J(e,c,n,t,r,p,o);return c}(e,n,t,E,(0,c.xC)(m),_,(0,c.xC)(h),v);return function(e,n,t,r){if(e.length>0)return[[n,e.map((([e])=>e))],[t,...e.map((([,e])=>e)).flat()],[r,...e.map((([,,e])=>e)).flat()]]}(r,o,u,d)}}function Q(e){return(0,V.S)(x(e))}function q(e,n){return(0,c.HG)(e)?!(0,c.HG)(n)||q(e.ofType,n.ofType):!!(0,c.HG)(n)||((0,c.zM)(e)?!(0,c.zM)(n)||q(e.ofType,n.ofType):!!(0,c.zM)(n)||!(!(0,c.UT)(e)&&!(0,c.UT)(n))&&e!==n)}function K(e,n,t,r){const o=n.get(r);if(o)return o;const i=Object.create(null),a=Object.create(null);Z(e,t,r,i,a);const s=[i,Object.keys(a)];return n.set(r,s),s}function W(e,n,t){const r=n.get(t.selectionSet);if(r)return r;const o=(0,M._)(e.getSchema(),t.typeCondition);return K(e,n,o,t.selectionSet)}function Z(e,n,t,r,o){for(const i of t.selections)switch(i.kind){case m.h.FIELD:{const e=i.name.value;let t;((0,c.lp)(n)||(0,c.oT)(n))&&(t=n.getFields()[e]);const o=i.alias?i.alias.value:e;r[o]||(r[o]=[]),r[o].push([n,i,t]);break}case m.h.FRAGMENT_SPREAD:o[i.name.value]=!0;break;case m.h.INLINE_FRAGMENT:{const t=i.typeCondition,a=t?(0,M._)(e.getSchema(),t):n;Z(e,a,i.selectionSet,r,o);break}}}class ee{constructor(){this._data=new Map}has(e,n,t){var r;const[o,i]=e<n?[e,n]:[n,e],a=null===(r=this._data.get(o))||void 0===r?void 0:r.get(i);return void 0!==a&&(!!t||t===a)}add(e,n,t){const[r,o]=e<n?[e,n]:[n,e],i=this._data.get(r);void 0===i?this._data.set(r,new Map([[o,t]])):i.set(o,t)}}var ne=t(90316);var te=t(73498);function re(e){var n;const t=Object.create(null),r=e.getSchema(),i=null!==(n=null==r?void 0:r.getDirectives())&&void 0!==n?n:F.V4;for(const o of i)t[o.name]=(0,te.P)(o.args.filter(c.dK),(e=>e.name));const a=e.getDocument().definitions;for(const o of a)if(o.kind===m.h.DIRECTIVE_DEFINITION){var s;const e=null!==(s=o.arguments)&&void 0!==s?s:[];t[o.name.value]=(0,te.P)(e.filter(oe),(e=>e.name.value))}return{Directive:{leave(n){const r=n.name.value,i=t[r];if(i){var a;const t=null!==(a=n.arguments)&&void 0!==a?a:[],s=new Set(t.map((e=>e.name.value)));for(const[a,u]of Object.entries(i))if(!s.has(a)){const t=(0,c.P9)(u.type)?(0,O.X)(u.type):(0,V.S)(u.type);e.reportError(new o.__(`Directive "@${r}" argument "${a}" of type "${t}" is required, but it was not provided.`,{nodes:n}))}}}}}}function oe(e){return e.type.kind===m.h.NON_NULL_TYPE&&null==e.defaultValue}var ie=t(58081);function ae(e,n,t){var r;const i=null===(r=n.directives)||void 0===r?void 0:r.find((n=>n.name.value===e.name));if(i)return function(e,n,t){var r;const i={},a=null!==(r=n.arguments)&&void 0!==r?r:[],s=(0,te.P)(a,(e=>e.name.value));for(const u of e.args){const e=u.name,r=u.type,a=s[e];if(!a){if(void 0!==u.defaultValue)i[e]=u.defaultValue;else if((0,c.zM)(r))throw new o.__(`Argument "${e}" of required type "${(0,O.X)(r)}" was not provided.`,{nodes:n});continue}const l=a.value;let f=l.kind===m.h.NULL;if(l.kind===m.h.VARIABLE){const n=l.name.value;if(null==t||!se(t,n)){if(void 0!==u.defaultValue)i[e]=u.defaultValue;else if((0,c.zM)(r))throw new o.__(`Argument "${e}" of required type "${(0,O.X)(r)}" was provided the variable "$${n}" which was not provided a runtime value.`,{nodes:l});continue}f=null==t[n]}if(f&&(0,c.zM)(r))throw new o.__(`Argument "${e}" of non-null type "${(0,O.X)(r)}" must not be null.`,{nodes:l});const d=(0,ie.u)(l,r,t);if(void 0===d)throw new o.__(`Argument "${e}" has invalid value ${(0,V.S)(l)}.`,{nodes:l});i[e]=d}return i}(e,i,t)}function se(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function ce(e,n,t,r,o,i,a){for(const c of o.selections)switch(c.kind){case m.h.FIELD:{if(!ue(t,c))continue;const e=(s=c).alias?s.alias.value:s.name.value,n=i.get(e);void 0!==n?n.push(c):i.set(e,[c]);break}case m.h.INLINE_FRAGMENT:if(!ue(t,c)||!le(e,c,r))continue;ce(e,n,t,r,c.selectionSet,i,a);break;case m.h.FRAGMENT_SPREAD:{const o=c.name.value;if(a.has(o)||!ue(t,c))continue;a.add(o);const s=n[o];if(!s||!le(e,s,r))continue;ce(e,n,t,r,s.selectionSet,i,a);break}}var s}function ue(e,n){const t=ae(F.QE,n,e);if(!0===(null==t?void 0:t.if))return!1;const r=ae(F.Yf,n,e);return!1!==(null==r?void 0:r.if)}function le(e,n,t){const r=n.typeCondition;if(!r)return!0;const o=(0,M._)(e,r);return o===t||!!(0,c.m0)(o)&&e.isSubType(o,t)}function fe(e,n){const t=e.getInputType();if(!t)return;const r=(0,c.xC)(t);if((0,c.UT)(r))try{if(void 0===r.parseLiteral(n,void 0)){const r=(0,O.X)(t);e.reportError(new o.__(`Expected value of type "${r}", found ${(0,V.S)(n)}.`,{nodes:n}))}}catch(i){const r=(0,O.X)(t);i instanceof o.__?e.reportError(i):e.reportError(new o.__(`Expected value of type "${r}", found ${(0,V.S)(n)}; `+i.message,{nodes:n,originalError:i}))}else{const r=(0,O.X)(t);e.reportError(new o.__(`Expected value of type "${r}", found ${(0,V.S)(n)}.`,{nodes:n}))}}function de(e,n,t,r,o){if((0,c.zM)(r)&&!(0,c.zM)(n)){const i=void 0!==o;if(!(null!=t&&t.kind!==m.h.NULL)&&!i)return!1;const a=r.ofType;return(0,ne.uJ)(e,n,a)}return(0,ne.uJ)(e,n,r)}const pe=Object.freeze([j,function(e){const n=Object.create(null);return{OperationDefinition(t){const r=t.name;return r&&(n[r.value]?e.reportError(new o.__(`There can be only one operation named "${r.value}".`,{nodes:[n[r.value],r]})):n[r.value]=r),!1},FragmentDefinition:()=>!1}},function(e){let n=0;return{Document(e){n=e.definitions.filter((e=>e.kind===m.h.OPERATION_DEFINITION)).length},OperationDefinition(t){!t.name&&n>1&&e.reportError(new o.__("This anonymous operation must be the only defined operation.",{nodes:t}))}}},function(e){return{OperationDefinition(n){if("subscription"===n.operation){const t=e.getSchema(),r=t.getSubscriptionType();if(r){const i=n.name?n.name.value:null,a=Object.create(null),s=e.getDocument(),c=Object.create(null);for(const e of s.definitions)e.kind===m.h.FRAGMENT_DEFINITION&&(c[e.name.value]=e);const u=function(e,n,t,r,o){const i=new Map;return ce(e,n,t,r,o,i,new Set),i}(t,c,a,r,n.selectionSet);if(u.size>1){const n=[...u.values()].slice(1).flat();e.reportError(new o.__(null!=i?`Subscription "${i}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:n}))}for(const n of u.values()){n[0].name.value.startsWith("__")&&e.reportError(new o.__(null!=i?`Subscription "${i}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:n}))}}}}}},N,function(e){return{InlineFragment(n){const t=n.typeCondition;if(t){const n=(0,M._)(e.getSchema(),t);if(n&&!(0,c.Gv)(n)){const n=(0,V.S)(t);e.reportError(new o.__(`Fragment cannot condition on non composite type "${n}".`,{nodes:t}))}}},FragmentDefinition(n){const t=(0,M._)(e.getSchema(),n.typeCondition);if(t&&!(0,c.Gv)(t)){const t=(0,V.S)(n.typeCondition);e.reportError(new o.__(`Fragment "${n.name.value}" cannot condition on non composite type "${t}".`,{nodes:n.typeCondition}))}}}},function(e){return{VariableDefinition(n){const t=(0,M._)(e.getSchema(),n.type);if(void 0!==t&&!(0,c.j$)(t)){const t=n.variable.name.value,r=(0,V.S)(n.type);e.reportError(new o.__(`Variable "$${t}" cannot be non-input type "${r}".`,{nodes:n.type}))}}}},function(e){return{Field(n){const t=e.getType(),r=n.selectionSet;if(t)if((0,c.UT)((0,c.xC)(t))){if(r){const i=n.name.value,a=(0,O.X)(t);e.reportError(new o.__(`Field "${i}" must not have a selection since type "${a}" has no subfields.`,{nodes:r}))}}else if(!r){const r=n.name.value,i=(0,O.X)(t);e.reportError(new o.__(`Field "${r}" of type "${i}" must have a selection of subfields. Did you mean "${r} { ... }"?`,{nodes:n}))}}}},function(e){return{Field(n){const t=e.getParentType();if(t){if(!e.getFieldDef()){const r=e.getSchema(),i=n.name.value;let a=(0,p.l)("to use an inline fragment on",function(e,n,t){if(!(0,c.m0)(n))return[];const r=new Set,o=Object.create(null);for(const a of e.getPossibleTypes(n))if(a.getFields()[t]){r.add(a),o[a.name]=1;for(const e of a.getInterfaces()){var i;e.getFields()[t]&&(r.add(e),o[e.name]=(null!==(i=o[e.name])&&void 0!==i?i:0)+1)}}return[...r].sort(((n,t)=>{const r=o[t.name]-o[n.name];return 0!==r?r:(0,c.oT)(n)&&e.isSubType(n,t)?-1:(0,c.oT)(t)&&e.isSubType(t,n)?1:(0,U.K)(n.name,t.name)})).map((e=>e.name))}(r,t,i));""===a&&(a=(0,p.l)(function(e,n){if((0,c.lp)(e)||(0,c.oT)(e)){const t=Object.keys(e.getFields());return(0,E.D)(n,t)}return[]}(t,i))),e.reportError(new o.__(`Cannot query field "${i}" on type "${t.name}".`+a,{nodes:n}))}}}}},function(e){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const r=t.name.value;return n[r]?e.reportError(new o.__(`There can be only one fragment named "${r}".`,{nodes:[n[r],t.name]})):n[r]=t.name,!1}}},L,Y,function(e){return{InlineFragment(n){const t=e.getType(),r=e.getParentType();if((0,c.Gv)(t)&&(0,c.Gv)(r)&&!(0,ne.zR)(e.getSchema(),t,r)){const i=(0,O.X)(r),a=(0,O.X)(t);e.reportError(new o.__(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${a}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,r=function(e,n){const t=e.getFragment(n);if(t){const n=(0,M._)(e.getSchema(),t.typeCondition);if((0,c.Gv)(n))return n}}(e,t),i=e.getParentType();if(r&&i&&!(0,ne.zR)(e.getSchema(),r,i)){const a=(0,O.X)(i),s=(0,O.X)(r);e.reportError(new o.__(`Fragment "${t}" cannot be spread here as objects of type "${a}" can never be of type "${s}".`,{nodes:n}))}}}},function(e){const n=Object.create(null),t=[],r=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition:e=>(i(e),!1)};function i(a){if(n[a.name.value])return;const s=a.name.value;n[s]=!0;const c=e.getFragmentSpreads(a.selectionSet);if(0!==c.length){r[s]=t.length;for(const n of c){const a=n.name.value,s=r[a];if(t.push(n),void 0===s){const n=e.getFragment(a);n&&i(n)}else{const n=t.slice(s),r=n.slice(0,-1).map((e=>'"'+e.name.value+'"')).join(", ");e.reportError(new o.__(`Cannot spread fragment "${a}" within itself`+(""!==r?` via ${r}.`:"."),{nodes:n}))}t.pop()}r[s]=void 0}}},function(e){return{OperationDefinition(n){var t;const r=C(null!==(t=n.variableDefinitions)&&void 0!==t?t:[],(e=>e.variable.name.value));for(const[i,a]of r)a.length>1&&e.reportError(new o.__(`There can be only one variable named "$${i}".`,{nodes:a.map((e=>e.variable.name))}))}}},function(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=e.getRecursiveVariableUsages(t);for(const{node:i}of r){const r=i.name.value;!0!==n[r]&&e.reportError(new o.__(t.name?`Variable "$${r}" is not defined by operation "${t.name.value}".`:`Variable "$${r}" is not defined.`,{nodes:[i,t]}))}}},VariableDefinition(e){n[e.variable.name.value]=!0}}},function(e){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const r=Object.create(null),i=e.getRecursiveVariableUsages(t);for(const{node:e}of i)r[e.name.value]=!0;for(const a of n){const n=a.variable.name.value;!0!==r[n]&&e.reportError(new o.__(t.name?`Variable "$${n}" is never used in operation "${t.name.value}".`:`Variable "$${n}" is never used.`,{nodes:a}))}}},VariableDefinition(e){n.push(e)}}},$,w,function(e){return{...X(e),Argument(n){const t=e.getArgument(),r=e.getFieldDef(),i=e.getParentType();if(!t&&r&&i){const t=n.name.value,a=r.args.map((e=>e.name)),s=(0,E.D)(t,a);e.reportError(new o.__(`Unknown argument "${t}" on field "${i.name}.${r.name}".`+(0,p.l)(s),{nodes:n}))}}}},k,function(e){return{ListValue(n){const t=(0,c.tf)(e.getParentInputType());if(!(0,c.HG)(t))return fe(e,n),!1},ObjectValue(n){const t=(0,c.xC)(e.getInputType());if(!(0,c.hL)(t))return fe(e,n),!1;const r=(0,te.P)(n.fields,(e=>e.name.value));for(const i of Object.values(t.getFields())){if(!r[i.name]&&(0,c.Wd)(i)){const r=(0,O.X)(i.type);e.reportError(new o.__(`Field "${t.name}.${i.name}" of required type "${r}" was not provided.`,{nodes:n}))}}},ObjectField(n){const t=(0,c.xC)(e.getParentInputType());if(!e.getInputType()&&(0,c.hL)(t)){const r=(0,E.D)(n.name.value,Object.keys(t.getFields()));e.reportError(new o.__(`Field "${n.name.value}" is not defined by type "${t.name}".`+(0,p.l)(r),{nodes:n}))}},NullValue(n){const t=e.getInputType();(0,c.zM)(t)&&e.reportError(new o.__(`Expected value of type "${(0,O.X)(t)}", found ${(0,V.S)(n)}.`,{nodes:n}))},EnumValue:n=>fe(e,n),IntValue:n=>fe(e,n),FloatValue:n=>fe(e,n),StringValue:n=>fe(e,n),BooleanValue:n=>fe(e,n)}},function(e){return{...re(e),Field:{leave(n){var t;const r=e.getFieldDef();if(!r)return!1;const i=new Set(null===(t=n.arguments)||void 0===t?void 0:t.map((e=>e.name.value)));for(const a of r.args)if(!i.has(a.name)&&(0,c.dK)(a)){const t=(0,O.X)(a.type);e.reportError(new o.__(`Field "${r.name}" argument "${a.name}" of type "${t}" is required, but it was not provided.`,{nodes:n}))}}}}},function(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=e.getRecursiveVariableUsages(t);for(const{node:i,type:a,defaultValue:s}of r){const t=i.name.value,r=n[t];if(r&&a){const n=e.getSchema(),c=(0,M._)(n,r.type);if(c&&!de(n,c,r.defaultValue,a,s)){const n=(0,O.X)(c),s=(0,O.X)(a);e.reportError(new o.__(`Variable "$${t}" of type "${n}" used in position expecting type "${s}".`,{nodes:[r,i]}))}}}}},VariableDefinition(e){n[e.variable.name.value]=e}}},function(e){const n=new ee,t=new Map;return{SelectionSet(r){const i=function(e,n,t,r,o){const i=[],[a,s]=K(e,n,r,o);if(function(e,n,t,r,o){for(const[i,a]of Object.entries(o))if(a.length>1)for(let o=0;o<a.length;o++)for(let s=o+1;s<a.length;s++){const c=z(e,t,r,!1,i,a[o],a[s]);c&&n.push(c)}}(e,i,n,t,a),0!==s.length)for(let c=0;c<s.length;c++){G(e,i,n,t,!1,a,s[c]);for(let r=c+1;r<s.length;r++)J(e,i,n,t,!1,s[c],s[r])}return i}(e,t,n,e.getParentType(),r);for(const[[n,t],a,s]of i){const r=B(t);e.reportError(new o.__(`Fields "${n}" conflict because ${r}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:a.concat(s)}))}}}},R]);Object.freeze([i,a,s,u,l,function(e){return{DirectiveDefinition(e){var n;const r=null!==(n=e.arguments)&&void 0!==n?n:[];return t(`@${e.name.value}`,r)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(e){var n;const r=e.name.value,o=null!==(n=e.fields)&&void 0!==n?n:[];for(const a of o){var i;t(`${r}.${a.name.value}`,null!==(i=a.arguments)&&void 0!==i?i:[])}return!1}function t(n,t){const r=C(t,(e=>e.name.value));for(const[i,a]of r)a.length>1&&e.reportError(new o.__(`Argument "${n}(${i}:)" can only be defined once.`,{nodes:a.map((e=>e.name))}));return!1}},d,N,$,w,P,X,k,R,re]);var Ee=t(37826),me=t(77304),he=t(19655),_e=t(22676);class ve{constructor(e,n){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=n}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let n;if(this._fragments)n=this._fragments;else{n=Object.create(null);for(const e of this.getDocument().definitions)e.kind===m.h.FRAGMENT_DEFINITION&&(n[e.name.value]=e);this._fragments=n}return n[e]}getFragmentSpreads(e){let n=this._fragmentSpreads.get(e);if(!n){n=[];const t=[e];let r;for(;r=t.pop();)for(const e of r.selections)e.kind===m.h.FRAGMENT_SPREAD?n.push(e):e.selectionSet&&t.push(e.selectionSet);this._fragmentSpreads.set(e,n)}return n}getRecursivelyReferencedFragments(e){let n=this._recursivelyReferencedFragments.get(e);if(!n){n=[];const t=Object.create(null),r=[e.selectionSet];let o;for(;o=r.pop();)for(const e of this.getFragmentSpreads(o)){const o=e.name.value;if(!0!==t[o]){t[o]=!0;const e=this.getFragment(o);e&&(n.push(e),r.push(e.selectionSet))}}this._recursivelyReferencedFragments.set(e,n)}return n}}class Te extends(null){constructor(e,n,t){super(e,t),this._schema=n}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}class ge extends ve{constructor(e,n,t,r){super(n,r),this._schema=e,this._typeInfo=t,this._variableUsages=new Map,this._recursiveVariableUsages=new Map}get[Symbol.toStringTag](){return"ValidationContext"}getSchema(){return this._schema}getVariableUsages(e){let n=this._variableUsages.get(e);if(!n){const t=[],r=new _e.a(this._schema);(0,me.Vn)(e,(0,_e.y)(r,{VariableDefinition:()=>!1,Variable(e){t.push({node:e,type:r.getInputType(),defaultValue:r.getDefaultValue()})}})),n=t,this._variableUsages.set(e,n)}return n}getRecursiveVariableUsages(e){let n=this._recursiveVariableUsages.get(e);if(!n){n=this.getVariableUsages(e);for(const t of this.getRecursivelyReferencedFragments(e))n=n.concat(this.getVariableUsages(t));this._recursiveVariableUsages.set(e,n)}return n}getType(){return this._typeInfo.getType()}getParentType(){return this._typeInfo.getParentType()}getInputType(){return this._typeInfo.getInputType()}getParentInputType(){return this._typeInfo.getParentInputType()}getFieldDef(){return this._typeInfo.getFieldDef()}getDirective(){return this._typeInfo.getDirective()}getArgument(){return this._typeInfo.getArgument()}getEnumValue(){return this._typeInfo.getEnumValue()}}function Ie(e,n,t=pe,r,i=new _e.a(e)){var a;const s=null!==(a=null==r?void 0:r.maxErrors)&&void 0!==a?a:100;n||(0,Ee.a)(!1,"Must provide document."),(0,he.J)(e);const c=Object.freeze({}),u=[],l=new ge(e,n,i,(e=>{if(u.length>=s)throw u.push(new o.__("Too many validation errors, error limit reached. Validation aborted.")),c;u.push(e)})),f=(0,me.j1)(t.map((e=>e(l))));try{(0,me.Vn)(n,(0,_e.y)(i,f))}catch(d){if(d!==c)throw d}return u}var Ne=t(10785);function ye(e){return{Field(n){const t=e.getFieldDef(),r=null==t?void 0:t.deprecationReason;if(t&&null!=r){const i=e.getParentType();null!=i||(0,b.k)(!1),e.reportError(new o.__(`The field ${i.name}.${t.name} is deprecated. ${r}`,{nodes:n}))}},Argument(n){const t=e.getArgument(),r=null==t?void 0:t.deprecationReason;if(t&&null!=r){const i=e.getDirective();if(null!=i)e.reportError(new o.__(`Directive "@${i.name}" argument "${t.name}" is deprecated. ${r}`,{nodes:n}));else{const i=e.getParentType(),a=e.getFieldDef();null!=i&&null!=a||(0,b.k)(!1),e.reportError(new o.__(`Field "${i.name}.${a.name}" argument "${t.name}" is deprecated. ${r}`,{nodes:n}))}}},ObjectField(n){const t=(0,c.xC)(e.getParentInputType());if((0,c.hL)(t)){const r=t.getFields()[n.name.value],i=null==r?void 0:r.deprecationReason;null!=i&&e.reportError(new o.__(`The input field ${t.name}.${r.name} is deprecated. ${i}`,{nodes:n}))}},EnumValue(n){const t=e.getEnumValue(),r=null==t?void 0:t.deprecationReason;if(t&&null!=r){const i=(0,c.xC)(e.getInputType());null!=i||(0,b.k)(!1),e.reportError(new o.__(`The enum value "${i.name}.${t.name}" is deprecated. ${r}`,{nodes:n}))}}}}var Oe=t(4032),be=t(50045),Se=(t(67294),t(85893),t(73935),Object.defineProperty),De=(e,n)=>Se(e,"name",{value:n,configurable:!0});const Fe=[i,a,s,u,l,d,N,$,w,P,k,R];function $e(e,n,t,r,o){const i=pe.filter((e=>e!==Y&&e!==j&&(!r||e!==L)));t&&Array.prototype.push.apply(i,t),o&&Array.prototype.push.apply(i,Fe);return Ie(e,n,i).filter((e=>{if(e.message.includes("Unknown directive")&&e.nodes){const n=e.nodes[0];if(n&&n.kind===m.h.DIRECTIVE){const e=n.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}De($e,"validateWithCustomRules");const we={["Error"]:1,["Warning"]:2,["Information"]:3,["Hint"]:4},Pe=De(((e,n)=>{if(!e)throw new Error(n)}),"invariant");function Ae(e,n=null,t,r,i){var a,s;let c=null,u="";i&&(u="string"==typeof i?i:i.reduce(((e,n)=>e+(0,V.S)(n)+"\n\n"),""));const l=u?`${e}\n\n${u}`:e;try{c=(0,Ne.Qc)(l)}catch(f){if(f instanceof o.__){const e=Re(null!==(s=null===(a=f.locations)||void 0===a?void 0:a[0])&&void 0!==s?s:{line:0,column:0},l);return[{severity:we.Error,message:f.message,source:"GraphQL: Syntax",range:e}]}throw f}return Ce(c,n,t,r)}function Ce(e,n=null,t,r){if(!n)return[];const o=$e(n,e,t,r).flatMap((e=>ke(e,we.Error,"Validation"))),i=Ie(n,e,[ye]).flatMap((e=>ke(e,we.Warning,"Deprecation")));return o.concat(i)}function ke(e,n,t){if(!e.nodes)return[];const r=[];for(const[o,i]of e.nodes.entries()){const a="Variable"!==i.kind&&"name"in i&&void 0!==i.name?i.name:"variable"in i&&void 0!==i.variable?i.variable:i;if(a){Pe(e.locations,"GraphQL validation error requires locations.");const i=e.locations[o],s=je(a),c=i.column+(s.end-s.start);r.push({source:`GraphQL: ${t}`,message:e.message,severity:n,range:new be.R(new be.P(i.line-1,i.column-1),new be.P(i.line-1,c))})}}return r}function Re(e,n){const t=(0,Oe.o)(),r=t.startState(),o=n.split("\n");Pe(o.length>=e.line,"Query text must have more lines than where the error happened");let i=null;for(let u=0;u<e.line;u++)for(i=new Oe.C(o[u]);!i.eol();){if("invalidchar"===t.token(i,r))break}Pe(i,"Expected Parser stream to be available.");const a=e.line-1,s=i.getStartOfToken(),c=i.getCurrentPosition();return new be.R(new be.P(a,s),new be.P(a,c))}function je(e){const n=e.loc;return Pe(n,"Expected ASTNode to have a location."),n}De(Ae,"getDiagnostics"),De(Ce,"validateQuery"),De(ke,"annotations"),De(Re,"getRange"),De(je,"getLocation");const Ue=["error","warning","information","hint"],Ve={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};r.C.registerHelper("lint","graphql",((e,n)=>{const{schema:t,validationRules:o,externalFragments:i}=n;return Ae(e,t,o,void 0,i).map((e=>({message:e.message,severity:e.severity?Ue[e.severity-1]:Ue[0],type:e.source?Ve[e.source]:void 0,from:r.C.Pos(e.range.start.line,e.range.start.character),to:r.C.Pos(e.range.end.line,e.range.end.character)})))}))}}]);