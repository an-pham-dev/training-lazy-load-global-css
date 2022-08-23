## SHARED UI MODULES GUIDELINE

This directory will contains shared layout component only modules. These module are similar as shared modules but these are for layout level components. These module can be created via angular client as:

``
ng g m ui/layout/module-name
ng g c ui/layout/module-name --export
ng g c ui/layout/module-name/component-name --export
``

Please keep related components only in a module, don't create shared module with too much components in it. Conditions allow components can be same module:
- [x] These components are **always** used together in top level components.
- [x] These components are UI variants of each others.
