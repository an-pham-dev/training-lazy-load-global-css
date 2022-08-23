## SHARED MODULES GUIDELINE

This directory will contains shared component modules. These module can be created via angular client as:

``
ng g m shared/module-name
ng g c shared/module-name --export
ng g c shared/module-name/component-name --export
``

Please keep related components only in a module, don't create shared module with too much components in it. Conditions allow components can be same module:
- [x] These components are parent-child related.
- [x] These components **always** use together in top level components.
- [x] These components are UI variants of each others.
