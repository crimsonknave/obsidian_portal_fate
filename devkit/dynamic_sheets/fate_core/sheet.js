// Generated by CoffeeScript 1.6.3
(function() {
  var $;

  $ = jQuery;

  window.fate_core_dataPreLoad = function(options) {
    fate_core_set_placeholder();
    return fate_core_insert_avatar();
  };

  window.fate_core_dataPostLoad = function(options) {
    fate_core_mark_used_skills();
    return fate_core_set_active_stress();
  };

  window.fate_core_dataChange = function(options) {
    fate_core_update_skill(options);
    return fate_core_update_active_stress(options);
  };

  window.fate_core_dataPreSave = function(options) {};

  window.fate_core_insert_avatar = function() {
    var avatar_html, image;
    image = $('.character-avatar').first();
    console.log(image);
    avatar_html = image[0].innerHTML;
    image = $('.image.container');
    console.log(image);
    return image.replaceWith("<div class='avatar container'>" + avatar_html + "</div>");
  };

  window.fate_core_set_active_stress = function() {
    var activator, entry, group, stresses, _i, _len, _results;
    stresses = $('td.stress');
    _results = [];
    for (_i = 0, _len = stresses.length; _i < _len; _i++) {
      entry = stresses[_i];
      group = entry.children[0];
      activator = entry.children[1].children[0].children[0];
      if (activator.value === '0') {
        _results.push(group.classList.add('inactive'));
      } else {
        _results.push(group.classList.add('active'));
      }
    }
    return _results;
  };

  window.fate_core_set_placeholder = function() {
    return aisleten.characters.jeditablePlaceholder = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  };

  window.fate_core_mark_used_skills = function() {
    var content, listing, listings, _i, _len, _results;
    listings = $('.skill.inactive');
    _results = [];
    for (_i = 0, _len = listings.length; _i < _len; _i++) {
      listing = listings[_i];
      content = listing.childNodes[1].innerHTML.trim();
      if (content.length > 0) {
        _results.push(listing.className = 'skill');
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  window.fate_core_update_active_stress = function(opts) {
    var match, name, stress, value;
    name = opts['fieldName'];
    value = opts['fieldValue'];
    match = name.match(/(\w+)_stress_(\d\d)_active/);
    if (!match) {
      return;
    }
    stress = $(".dsf_" + match[1] + "_stress_" + match[2]);
    if (value === "1") {
      stress.parent().addClass('active');
      return stress.parent().removeClass('inactive');
    } else {
      stress.parent().addClass('inactive');
      return stress.parent().removeClass('active');
    }
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
