define(
  'tinymce.plugins.tablenew.selection.Ephemera',

  [
    'ephox.katamari.api.Fun'
  ],

  function (Fun) {
    var selected = 'data-mce-selected';
    var selectedSelector = 'td[' + selected + '],th[' + selected + ']';
    // used with not selectors
    var attributeSelector = '[' + selected + ']';
    var firstSelected = 'data-mce-first-selected';
    var firstSelectedSelector = 'td[' + firstSelected + '],th[' + firstSelected + ']';
    var lastSelected = 'data-mce-last-selected';
    var lastSelectedSelector = 'td[' + lastSelected + '],th[' + lastSelected + ']';
    return {
      selected: Fun.constant(selected),
      selectedSelector: Fun.constant(selectedSelector),
      attributeSelector: Fun.constant(attributeSelector),
      firstSelected: Fun.constant(firstSelected),
      firstSelectedSelector: Fun.constant(firstSelectedSelector),
      lastSelected: Fun.constant(lastSelected),
      lastSelectedSelector: Fun.constant(lastSelectedSelector)
    };
  }
);
