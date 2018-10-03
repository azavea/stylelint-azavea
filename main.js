"use strict"

module.exports = {
    "extends": [
      "stylelint-config-standard",
      "stylelint-config-rational-order"
    ],
    "plugins": [
        "stylelint-scss",
        "stylelint-order",
        "stylelint-at-rule-no-children",
        "stylelint-declaration-block-no-ignored-properties"
    ],
    "rules": {
        "indentation": 4,
        "color-named": "never",
        "max-nesting-depth": [3, {
            "ignoreAtRules": "/.*/"
        }],
        "no-empty-source": null,
        "selector-max-id": 0,
        "selector-max-type": 0,
        "shorthand-property-no-redundant-values": true,
        "at-rule-no-vendor-prefix": true,
        "media-feature-name-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "selector-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "order/order": [
            "dollar-variables",
            "custom-properties",
            "declarations",
            "at-rules",
            "rules"
        ],
        "aditayvm/at-rule-no-children": true,
        "plugin/declaration-block-no-ignored-properties": true,
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-function-named-arguments": "always",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-colon-space-after": "always-single-line",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/double-slash-comment-empty-line-before": ["always", {
            "except": "first-nested",
            "ignore": ["between-comments", "stylelint-commands"]
        }],
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/no-duplicate-dollar-variables": true
    },
}
