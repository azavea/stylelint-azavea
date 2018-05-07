# WIP: Not ready for use by dev teams yet.

# Azavea stylelint config

An opinionated stylelint config for Azavea projects.

[Stylelint](https://stylelint.io/) is "a mighty, modern CSS linter and fixer that
helps you avoid errors and enforce consistent conventions in your stylesheets."

By integrating this into our build processes, editors, and CI, we can enforce
consistent SCSS conventions company-wide.

## Installation

```
yarn add https://github.com/azavea/stylelint-azavea.git --dev
```

or

```
npm install https://github.com/azavea/stylelint-azavea.git --save-dev
```

Recommended:
- Install the [stylelint plugin for your editor](https://stylelint.io/user-guide/complementary-tools/)
- Integrate stylelint into your [build process and CI](https://stylelint.io/user-guide/complementary-tools/)
  - `stylelint` should be run on source `.scss` files, before they get converted to `.css`
  - Use the `--fix` option to automatically fix many issues.

## Usage

Set your `.stylelintrc` to:

```
{
    "extends": "stylelint-azavea"
}
```

## About

Let's walk through our stylelint config…

### Shared configs

First we extend some shared configs, including:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) –
A common config that detects possible errors and enforces "common stylistic conventions
found within a handful of CSS styleguides, including: The Idiomatic CSS Principles,
Google's CSS Style Guide, Airbnb's Styleguide, and @mdo's Code Guide."

- [stylelint-rscss](https://github.com/rstacruz/stylelint-rscss) – A config and
plugin that enforces conventions from [rscss](http://rscss.io/) (Reasonable
System for CSS Stylesheet Structure), "a set of simple ideas to guide your
process of building maintainable CSS."

- [stylelint-config-rational-order](https://www.npmjs.com/package/stylelint-config-rational-order) –
Sorts related property declarations by grouping and ordering them as follows:

  `Positioning > Box Model > Typography > Visual > Animation > Misc`


### Plugins

Next we install some plugins, including:

#### [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

SCSS-specific linting rules.

#### [stylelint-order](https://github.com/hudochenkov/stylelint-order)

Order-related linting rules. We use it to ensure that within a block, content is
ordered as follows:

`dollar-variables > custom-properties > declarations > at-rules > rules`

And within the declarations section, `stylelint-config-rational-order` uses it
to keep declarations ordered sensibly.

#### [stylelint-at-rule-no-children](https://github.com/adityavm/stylelint-at-rule-no-children)

Disallows block declarations inside at rules. It ensures we're consistent about
whether @-rules surround their block or are nested inside it:

```css

/* good css */

.foo {
  color: red;

  @media screen and (max-width: 480px) {
    color: blue;
  }
}

/* bad css */

.foo {
  color: red;
}

@media screen and (max-width: 480px) {
  .foo {
    color: blue;
  }
}

```

#### [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)

Disallows property values that are ignored due to another property value in the same rule.

### Rules

Finally, we set a number of specific rules not covered by the shared configs we extend…

#### `color-named: never`

No html color names (eg, `black`). These should all be `$variables` and the value
of those variables should be hex, `rgba`, `hsla`, etc.

#### `max-nesting-depth: [3, ignoreAtRules: "/.*/"]`

No nesting more than 3 levels deep (ignoring @-rules). Keeps things legible and
encourages component-oriented thinking.

#### `selector-max-id: 0` and `selector-max-type: 0`

Disallow id and tag (aka "type") selectors. The goal here is to  consistently
use classnames to connect styles to the DOM. This minimizes ambiguities and
disentangles semantic html from component-oriented design decisions.

Note we don't disallow other selectors, eg, universal, pseudo, and attribute.
These tend to be used sparingly and only when needed anyway.

#### `shorthand-property-no-redundant-values: true`

Disallow redundant values in shorthand properties, eg `margin: 1px 1px`.

#### `*-no-vendor-prefix`

Universally disallow vendor prefixes, under the assumption that Autoprefixer will
take care of that.

#### `scss/*`

We configure a number of options from the `stylelint-scss` plugin. Too many to
describe here, but hopefully all sensible.

#### `rscss/class-format`

[Override rscss's buggy class format](https://github.com/rstacruz/stylelint-rscss/issues/9#issuecomment-357462211)
to allow nested components, as encouraged by the rscss spec.
