// Generated by CoffeeScript 1.6.3
(function() {
  var $;

  $ = jQuery;

  window.fate_core_dataPreLoad = function(options) {};

  window.fate_core_dataPostLoad = function(options) {
    fate_core_mark_used_skills();
    fate_core_set_active_stress_boxes();
    fate_core_set_active_stress_tracks();
    fate_core_size_avatar();
    return fate_core_size_points();
  };

  window.fate_core_dataChange = function(options) {
    fate_core_update_skill(options);
    fate_core_update_active_stress(options);
    fate_core_update_active_stress_tracks(options);
    return fate_core_size_points();
  };

  window.fate_core_dataPreSave = function(options) {};

  window.fate_core_size_points = function() {
    var point, points, _i, _len, _results;
    points = $('.points_box').children('.dsf');
    _results = [];
    for (_i = 0, _len = points.length; _i < _len; _i++) {
      point = points[_i];
      if (point.innerHTML === aisleten.characters.jeditablePlaceholder || point.innerHTML === '') {
        _results.push(point.classList.add('placeholder'));
      } else {
        _results.push(point.classList.remove('placeholder'));
      }
    }
    return _results;
  };

  window.fate_core_size_avatar = function() {
    var avatar;
    avatar = $('.dsf_avatar_image').children().first();
    return avatar.load(function() {
      var height, width;
      height = avatar.height();
      width = avatar.width();
      if (height > width) {
        return avatar.addClass('tall');
      } else {
        return avatar.addClass('wide');
      }
    });
  };

  window.fate_core_set_active_stress_tracks = function() {
    var activator, track, tracks, _i, _len, _results;
    tracks = $('.stress_track');
    _results = [];
    for (_i = 0, _len = tracks.length; _i < _len; _i++) {
      track = tracks[_i];
      activator = track.children[1].children[0].children[0];
      if (activator.value === '0') {
        track.classList.add('inactive');
        _results.push(track.classList.remove('active'));
      } else {
        track.classList.add('active');
        _results.push(track.classList.remove('inactive'));
      }
    }
    return _results;
  };

  window.fate_core_set_active_stress_boxes = function() {
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

  window.fate_core_update_active_stress_tracks = function(opts) {
    var match, name, track, value;
    name = opts['fieldName'];
    value = opts['fieldValue'];
    match = name.match(/extra_(\d\d)_stress_active/);
    if (!match) {
      return;
    }
    track = $(".dsf_extra_" + match[1] + "_stress_active");
    if (value === '0') {
      track.parent().parent().addClass('inactive');
      return track.parent().parent().removeClass('active');
    } else {
      track.parent().parent().addClass('active');
      return track.parent().parent().removeClass('inactive');
    }
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
