	//Custom JS

	document.querySelector('form', 'div').addEventListener('input', function (e) {
	  var inp = event.target;
	  var inps = this.querySelectorAll('input');
	  var value = Array.prototype.map.call(inps, x => x.value).join('');
	  var i = +inp.dataset.start + inp.selectionStart, pos = value.length;
	  
	  for (var q=0; q < inps.length; ++q) {
	    var start = +inps[q].dataset.start, len = +inps[q].dataset.len;
	    inps[q].value = value.substr(start, len);
	    
	    if (start + len >= i) {
	      inp = inps[q];
	      pos = i - start;
	      i = NaN;
	    }
	  }
	  
	  inp.focus();
	  inp.selectionStart = inp.selectionEnd = pos;
	});

// name-inp
	
	function nameInp() {
		document.getElementsById('name-inp').value
		
	}




// var forms = document.getElementsByTagName('form');
// for(var i = 0; i < forms.length; i++) {
// 	forms[i].addEventListener('submit', validator);
// }

// var rules = {
// 	//inp: /^\w{3,}@\w{1,}\.\w{2,}$/; // один символ на имя, один на хост и два на домен
// 	required: function(el) {
// 		if(el.value != '') {
// 			return true;
// 		}
// 		return false;
// 	},
// 	inp: function(el) {
// 		var reg = /^\w{4,}$/;
// 		return reg.test(el.value);
// 	}
// }
// function showErrors(arr) {
// 	console.log(arr);
// }

// function validator (e) {
// 	e.preventDefault();
// 	var errors = [];
// 	var inputs = this.elements;
// 	//var inputs = this.querySelectorAll('input, select');
// 	for(i = 0; i < inputs.length; i++) {
// 		if(inputs[i].tagName != 'BUTTON') {
// 			var rulesList = inputs[i].dataset.rule;
// 			rulesList = rulesList.split(' ');
// 			for(var j = 0; j < rulesList.length; j++){
// 				if(rulesList[j] in rules) {
// 					if(!rules[rulesList[j]](inputs[i])) {
// 						errors.push({
// 							name: inputs[i].name,
// 							error: rulesList[j]
// 						});
// 					}
// 				}
// 			}
// 		}
// 	}
// 	if(errors.length > 0) {
// 		e.preventDefault();
// 		showErrors(errors);
// 	}
// }



// var validatorMethods = {
// 	notEmpty: function(el) {
// 		if(el.value == '') {
// 			return false;
// 		}
// 		return true;
// 	},
// 	pattern: function(el, pattrn) {
// 		return pattrn.test(el.value);
// 	},
// 	contains: function(el, el2) {
// 		if(el.value == el2.value) {
// 			return true;
// 		}
// 		return false;
// 	}
// }

// function Validator(setting) {
// 	var formEl     = document.getElementsById(setting.id);
// 	var formFields = formEl.elements;
// 	var errors     = [];
// 	var rulesPattern = {
// 		email: /^\w{1,}@\w{1,}\.\w{2,}$/,
// 		tel: /^\+38\(d{3}\)\d{7}$/,
// 	}

// 	var showError = function(el) {
// 		el.preventNode.classList.remove('success');
// 		el.preventNode.classList.add('error');
// 		el.nextElementsSibling.innerHTML = el.dataset.error;
// 	}
// 	var showSuccess = function(el) {
// 		//classList.contains('error')
// 		el.preventNode.classList.remove('error');
// 		el.preventNode.classList.add('success');
// 		el.nextElementsSibling.innerHTML = '';
// 	}
// 	var isValid = function(el) {
// 		var methods = setting.methods[el.getAttribute('id')];
// 		if(methods !== undefined) {
// 			for(var i = 0; i < methods.length; i++) {
// 				if(!validatorMethods[methods[i][0]](el, ethods[i][1])) {
// 					error.push({el: el});
// 				}
// 			}
// 			for(var i = 0; i < error.length; i++) {
// 				if(error[i].el == el) {
// 					return false;
// 				}
// 			}
// 		}
// 		return true;
// 	}

// 	// var isNotEmpty;
// 	// var isPattern;
// 	// var isContains;
 
// 	var checkIt = function() {
// 		// определить правила проверки
// 		if(isValid(this)) {
// 			showSuccess(this);
// 			for(var i = 0; i < error.length; i++) {
// 				if(error[i].el == this) {
// 					// хз чем удалять // delete element from array
// 					delete(error[i]);
// 				}
// 			}
// 		}else {
// 			showError(this);
// 			error.push({
// 				el: this
// 			})

// 		}
// 	}
// 	//  init here
// 	for(var i = 0; i < formFields.length; i++) {
// 		if(formFields[i].tagName == 'BUTTON') {
// 			continue;
// 		}
// 		formFields[i].addEventListener('change', checkIt);
// 	}
// 	for(var prop in setting.pattern) {
// 		rulesPattern[prop] = setting.pattern[prop]
// 	}
// }


































