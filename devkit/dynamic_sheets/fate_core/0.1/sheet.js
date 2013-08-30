// Generated by CoffeeScript 1.6.3
(function() {
  var $;

  $ = jQuery;

  window.fate_core_dataPreLoad = function(options) {
    return fate_core_set_placeholder();
  };

  window.fate_core_dataPostLoad = function(options) {
    return fate_core_mark_used_skills();
  };

  window.fate_core_dataChange = function(options) {
    return fate_core_update_skill(options);
  };

  window.fate_core_dataPreSave = function(options) {};

  window.fate_core_set_placeholder = function() {
    return aisleten.characters.jeditablePlaceholder = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  };

  window.fate_core_mark_used_skills = function() {
    var content, listing, listings, _i, _len, _results;
    listings = $('.skill.inactive');
    _results = [];
    for (_i = 0, _len = listings.length; _i < _len; _i++) {
      listing = listings[_i];
      content = listing.children[0].innerText.trim();
      if (content.length > 0) {
        _results.push(listing.className = 'skill');
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  window.fate_core_update_skill = function(opts) {
    var match, name, skill, value;
    name = opts['fieldName'];
    value = opts['fieldValue'];
    match = name.match(/skill_(\w+)_(\d\d)/);
    if (!match) {
      return;
    }
    skill = $(".dsf_" + name).first();
    if (skill.text() === aisleten.characters.jeditablePlaceholder || skill.text() === '') {
      return skill.parent().addClass('inactive');
    } else {
      return skill.parent().removeClass('inactive');
    }
  };

}).call(this);
