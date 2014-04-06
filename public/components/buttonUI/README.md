# Button element

This element creates a flat design version of the button element that is being defined by PayPal First standards.

Source document: <https://ebay.box.com/shared/static/bsajxaf5sww3hupaaqvc.pdf>

There are two main styles for buttons:
- Action / default Blue button
- Secondary Gray button

##Dependency:
This component depends on [baseCSS](https://github.paypal.com/UIEElements/baseUI).

##Usage:

To install this element, run 
`bower install buttons`

Example:
Adding this to your `dust` will create a secondary disabled link button

```dust
  {>"../../public/components/templates/buttonWidget" buttonType="linkButton" buttonText="Secondary Disabled Button" isSecondary="true" isDisabled="true" className="span4" buttonURL="1" /}
```

| Variable name | Used for | Values|
| ---- | :---- | :----- |
|buttonType|Type of button|linkButton / input / button|
|isSecondary|Is it a secondary button style?|optional|
|isDisabled|Is it a disabled button style?|optional|
|buttonText|text value for the content| comes from properties file |
|buttonURL|Link for the anchor styled as a button| user defined|
|className|optional className if needed||
|idName|optional id if needed||



##PLEASE NOTE:

For development or testing the repo, replace the following lines on node_modules/grunt-dust-html/tasks/grunt-dust-html.js:
```js
	// find me some dust
    try {
      dust = require("dust");
    } catch(err) {
      dust = require("dustjs-linkedin");
    }
```

with

```js
    // find me some dust
    try {
      dust = require("dust");
    } catch(err) {
      try {
        // use the linkedin version with helpers if available
        dust = require("dustjs-helpers");
      } catch(err) {
        dust = require("dustjs-linkedin");
      }
    }
```

This is required to use the dustjs with helpers (which have @select, @eq, etc)since we are using them on this component.
