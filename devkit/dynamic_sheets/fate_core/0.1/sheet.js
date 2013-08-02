// Generated by CoffeeScript 1.6.3
(function() {
  var $;

  $ = jQuery;

  window.fate_core_dataPreLoad = function(options) {};

  window.fate_core_dataPostLoad = function(options) {
    return fate_core_load_skills();
  };

  window.fate_core_dataChange = function(options) {
    return fate_core_update_skill(options['fieldName'], options['fieldValue']);
  };

  window.fate_core_dataPreSave = function(options) {};

  window.fate_core_find_rank_skills = function(rank) {
    var empty_count, i, new_li, new_span, skill, skills, _i, _len;
    skills = $(".skill_" + rank);
    empty_count = 0;
    for (_i = 0, _len = skills.length; _i < _len; _i++) {
      skill = skills[_i];
      console.log(skill.innerText);
      if (empty_count > 0) {
        skill.parentNode.remove();
      } else {
        if (skill.innerText === aisleten.characters.jeditablePlaceholder || skill.innerText === '') {
          empty_count++;
        }
      }
    }
    if (empty_count === 0) {
      console.log(skills[0]);
      console.log(skills[0].parentNode);
      console.log(skills[0].parentNode.parentNode);
      new_li = document.createElement('li');
      new_span = document.createElement('span');
      new_span.classList.add("skill_" + rank);
      new_span.classList.add('dsf');
      i = '00' + skills.length.toString();
      new_span.classList.add("dsf_skill_" + rank + "_" + (i.slice(-2)));
      new_li.appendChild(new_span);
      skills[0].parentNode.parentNode.appendChild(new_li);
    }
    return console.log(empty_count);
  };

  window.fate_core_update_skill = function(name, value) {
    var initial_value, match, skill, skills;
    match = name.match(/skill_(\w+)_(\d\d)/);
    if (match) {
      skills = fate_core_find_rank_skills(match[1]);
      console.log(name);
      console.log(value);
      skill = $('.dsf_' + name)[0];
      initial_value = skill.innerText;
      console.log(initial_value);
      console.log(skill);
      if (!value) {
        return console.log('this is blank');
      }
    }
  };

  window.fate_core_skill_html = function(skill, rank, i) {
    i = "00" + i.toString();
    return "<li><span class='skill_" + rank + " dsf dsf_skill_" + rank + "_" + (i.slice(-2)) + "'>" + skill + "</span></li>";
  };

  window.fate_core_render_skills = function() {
    var holder, html, i, rank, s, value, _i, _len, _ref;
    _ref = this.skills;
    for (rank in _ref) {
      value = _ref[rank];
      if (value[value.length - 1] || value.length === 0) {
        value.push('');
      }
      console.log(rank);
      console.log(value);
      holder = $('.skill.' + rank).children('.skill_holder')[0];
      html = '<ul>';
      for (i = _i = 0, _len = value.length; _i < _len; i = ++_i) {
        s = value[i];
        html = html + fate_core_skill_html(s, rank, i);
        console.log(html);
      }
      html = html + '</ul>';
      holder.innerHTML = html;
    }
    return console.log('skills rendered');
  };

  window.fate_core_load_skills = function() {
    var key, match, value;
    this.skills = {
      'average': [],
      'fair': [],
      'good': [],
      'great': [],
      'superb': []
    };
    for (key in dynamic_sheet_attrs) {
      value = dynamic_sheet_attrs[key];
      match = key.match(/skill_(\w+)_(\d\d)/);
      if (match) {
        if (this.skills[match[1]]) {
          this.skills[match[1]].push(value);
        } else {
          this.skills[match[1]] = [value];
        }
      }
    }
    return fate_core_render_skills();
  };

}).call(this);
