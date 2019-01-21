var dictio = [];
dictio.active = 'eng';

var lang1 = [], lang2 = [], lang3 = [];
var labels_to_translate = ['l_covariates'];

lang1['global'] = {'l_main_title': "SIDIAP-FHP Score",
                   'l_main_subtitle': "5-year Atherosclerotic Cardiovascular Diseases (ASCVD) Risk Calculator",
                  'l_calculate_risk': "Calculate risk",
                  'l_clean_button' : "Clean form",
                  'l_yes' : 'Yes',
                  'l_no' : 'No',
                  'l_cat' : 'Catalan',
                  'l_esp' : 'Spanish',
                  'l_eng' : 'English',
                  'l_desc_polivascular' : 'More than one vascular bed affected',
                  'l_desc_recent' : 'Last hospitalization less than one year from now',
                  'l_desc_progressive' : 'More than one episode of hospitalization due to that CVD',
                  'desc_recent' : 'The last hospitalization was less than one year from now',
                  'desc_progressive' : 'More than one episode of hospitalization due to that CVD',
                  'desc_polivascular' : 'More than one vascular bed affected'};

lang1['covariates'] = {'title' : 'Covariates',
                      'l_age' : 'Age',
                      'desc_age' : 'Write age in years',
                      'l_cv_history' : 'ASCVD history',
                      'l_sex' : 'Sex',
                      'l_sex_female' : 'Woman',
                      'l_sex_male' : 'Man',
                      'l_diabetes' : 'Diabetes',
                      'l_htn' : 'Hypertension',
                      'l_smoking' : 'Current smoker',
                      'l_colldl' : 'LDL cholesterol (mg/dL)',
                      'desc_colldl' : 'Write LDL-c value',
                      'l_ami' : 'Previous acute miocardial infarction',
                      'l_progressive' : 'ASCVD progressive',
                      'l_recent' : 'ASCVD recent',
                      'l_polivascular' : 'ASCVD polyvascular'};

dictio['eng'] = lang1;

lang2['global'] = {'l_main_title': "SIDIAP-FHP Score",
                  'l_calculate_risk': "Calcula el risc",
                  'l_clean_button' : "Neteja el formulari",
                  'l_yes' : 'Si',
                  'l_no' : 'No',
                  'l_cat' : 'Català',
                  'l_esp' : 'Castellà',
                  'l_eng' : 'Anglès',
                  'desc_recent' : 'La darrera hospitalizació va ser fa menys d\'un any',
                  'desc_progressive' : 'Més de un episodi d\'hospitalització degut al CVD',
                  'desc_polivascular' : 'Més d\'un llit vascular afectat'};

lang2['covariates'] = {'title' : 'Covariables',
                      'l_age' : 'Edat (anys)',
                      'desc_age' : 'Escriu la edat',
                      'l_cv_history' : 'Historia CV',
                      'l_sex' : 'Sexe',
                      'l_sex_female' : 'Dona',
                      'l_sex_male' : 'Home',
                      'l_diabetes' : 'Diabetis',
                      'l_htn' : 'Hipertensió',
                      'l_smoking' : 'Fumador actual',
                      'l_colldl' : 'Colesterol LDL (mg/dL)',
                      'desc_colldl' : 'Escriu el valor de LDL-c',
                      'l_ami' : 'Infart agut de miocardi previ',
                      'l_progressive' : 'CV progressiu',
                      'l_recent' : 'CV recent',
                      'l_polivascular' : 'CV polivascular'};

dictio['cat'] = lang2;

lang3['global'] = {'l_main_title': "SIDIAP-FHP Score",
                  'l_calculate_risk': "Calcula el riesgo",
                  'l_clean_button' : "Limpia el formulario",
                  'l_yes' : 'Si',
                  'l_no' : 'No',
                  'l_cat' : 'Catalan',
                  'l_esp' : 'Español',
                  'l_eng' : 'Inglés',
                  'desc_recent' : 'La última hospitalización fué hace menos de un año',
                  'desc_progressive' : 'Más de un episodio de hopitalización debido al CVD',
                  'desc_polivascular' : 'Más de un lecho vascular'};

lang3['covariates'] = {'title' : 'Covariables',
                      'l_age' : 'Edad (años)',
                      'desc_age' : 'Escribe la edad',
                      'l_cv_history' : 'Historia CV',
                      'l_sex' : 'Sexo',
                      'l_sex_female' : 'Mujer',
                      'l_sex_male' : 'Hombre',
                      'l_diabetes' : 'Diabetes',
                      'l_htn' : 'Hipertensión',
                      'l_smoking' : 'Fumador actual',
                      'l_colldl' : 'Colesterol LDL (mg/dL)',
                      'desc_colldl' : 'Escribe el valor de LDL-c',
                      'l_ami' : 'Infarto agudo de miocardio previo',
                      'l_progressive' : 'CV progresivo',
                      'l_recent' : 'CV reciente',
                      'l_polivascular' : 'CV polivascular'};

dictio['esp'] = lang3;

function get_text(field, sub){
  return dictio[dictio.active][field][sub];
}

var state = [];
var intervention = [];

translate_labels = function(){
  labs = dictio[dictio.active]
  $("#recent").attr('title', get_text('global', 'desc_recent'));
  $("#progressive").attr('title', get_text('global', 'desc_progressive'));
  $("#polivascular").attr('title', get_text('global', 'desc_polivascular'));
  $("#age_value").attr('placeholder', get_text('covariates', 'desc_age'));
  $("#colldl_value").attr('placeholder', get_text('covariates', 'desc_colldl'));
  for(var i in labs){
    console.log(i);
    if (labs.hasOwnProperty(i)){
      for(var j in labs[i]){
        if (labs[i].hasOwnProperty(j) & j.substring(0, 2) == 'l_'){
          console.log(j);
          $('*[id*=' + j +']').each(function() {
	    $(this).html(get_text(i, j));
	  });
          //console.log($('[id=' + j + ']').html());
          //new_text = $('#' + j).html().replace(j, get_text(i, j));
          //$('#' + j).html(new_text);
        }
      }
    }
  }
}

function refresh_covariates(){

  if( !$('#cv_history_no').prop('checked') & !$('#cv_history_yes').prop('checked') ){
    console.log("hiding");
    $('#div_id_sex').hide();
    $('#div_id_htn').hide();
    $('#div_id_colldl').hide();
    $('#div_id_ami').hide();
    $('#div_id_progressive').hide();
    $('#div_id_recent').hide();
    $('#div_id_polivascular').hide();
    return '-1';
  }
  if( $('#cv_history_no').prop('checked') ){
    $('#div_id_sex').show();
    $('#div_id_htn').show();
    $('#div_id_colldl').show();
    $('#div_id_ami').hide();
    $('#div_id_progressive').hide();
    $('#div_id_recent').hide();
    $('#div_id_polivascular').hide();
    return '0';
  }
  if( $('#cv_history_yes').prop('checked') ){
    $('#div_id_sex').hide();
    $('#div_id_htn').hide();
    $('#div_id_colldl').hide();
    $('#div_id_ami').show();
    $('#div_id_progressive').show();
    $('#div_id_recent').show();
    $('#div_id_polivascular').show();
    return '1';
  }
  $('#sex').show();
  return '-1';
}

function calculate_risk_fixed(x_smoking, x_cv, x_colldl){
  x_age = Number($('#age_value').val());
  x_ami = Number($('#ami_yes').prop('checked'));
  x_progressive = Number($('#progressive_yes').prop('checked'));
  x_polivascular = Number($('#polivascular_yes').prop('checked'));
  x_recent = Number($('#recent_yes').prop('checked'));
  x_diabetes = Number($('#diabetes_yes').prop('checked'));
  x_male = Number($('#sex_male').prop('checked'));
  x_htn = Number($('#htn_yes').prop('checked'));


  if(x_cv == 1){
    y_yes = 0.012 * x_age + 0.335 * x_ami + 0.501 * x_progressive + 0.617 * x_recent + 0.375 * x_polivascular + 0.441 * x_diabetes + 0.445 * x_smoking;
    risk = 100 * (1 - Math.pow(0.911628151, Math.exp(y_yes)));
  }
  if(x_cv == 0){
    y_no = 0.046 * x_age + 0.525 * x_male + 0.576 * x_diabetes + 0.485 * x_htn + 0.657 * x_smoking + 0.0028 * x_colldl;
    risk = 100 * (1 - Math.pow(0.999094171, Math.exp(y_no)));
  }

  return risk;
}
function check_form(){
  x_age = Number($('#age_value').val());
  error = false;
  error_message = "";
  if(x_age == 0 | isNaN(x_age)){
    error = true;
    error_message = error_message + "<li>Please, fill <b>age</b> field correctly.</li>";
  }else if(x_age < 18){
    error = true;
    error_message = error_message + "<li><b>Age</b> should be higher than 18.</li>";
  }

  x_smoking = $('#smoking_yes').prop('checked') | $('#smoking_no').prop('checked');
  if(!x_smoking){
    error = true;
    error_message = error_message + "<li>Choose an option for <b>current smoker</b></li>";
  }

  x_diabetes = $('#diabetes_yes').prop('checked') | $('#diabetes_no').prop('checked');
  if(!x_diabetes){
    error = true;
    error_message = error_message + "<li>Choose an option for <b>diabetes</b></li>";
  }

  x_cv = $('#cv_history_yes').prop('checked') | $('#cv_history_no').prop('checked');
  if(!x_cv){
    error = true;
    error_message = error_message + "<li>Choose an option for <b>ASCVD history</b></li>";
  }

  if($('#cv_history_yes').prop('checked')){
    x_ami = $('#ami_yes').prop('checked') | $('#ami_no').prop('checked');
    if(!x_ami){
      error = true;
      error_message = error_message + "<li>Choose an option for <b>Previous acute miocardial infarction</b>.</li>";
    }

    x_progressive = $('#progressive_yes').prop('checked') | $('#progressive_no').prop('checked');
    if(!x_progressive){
      error = true;
      error_message = error_message + "<li>Choose an option for <b>ASCVD progressive</b>.</li>";
    }

    x_recent = $('#recent_yes').prop('checked') | $('#recent_no').prop('checked');
    if(!x_recent){
      error = true;
      error_message = error_message + "<li>Choose an option for <b>ASCVD recent</b>.</li>";
    }

    x_polivascular = $('#polivascular_yes').prop('checked') | $('#polivascular_no').prop('checked');
    if(!x_polivascular){
      error = true;
      error_message = error_message + "<li>Choose an option for <b>ASCVD polyvascular</b>.</li>";
    }
  }
  if($('#cv_history_no').prop('checked')){
    x_male = $('#sex_male').prop('checked') | $('#sex_female').prop('checked');
    if(!x_male){
      error = true;
      error_message = error_message + "<li>Choose an option for <b>sex</b>.</li>";
    }

    x_htn = $('#htn_yes').prop('checked') | $('#htn_no').prop('checked');
    if(!x_htn){
      error = true;
      error_message = error_message + "<li>Choose an option for <b>hypertension</b>.</li>";
    }

    x_colldl = Number($('#colldl_value').val());
    if(x_colldl == 0 | isNaN(x_colldl)){
      error = true;
      error_message = error_message + "<li>Please, fill <b>LDL-cholesterol</b> field correctly.</li>";
    }
    /*else if(x_colldl ){
      error = true;
      error_message = error_message + "Age should be higher than 18.";
    }*/
  }

  if(error){
    $('#result').html("<b>Errors detected</b>. <br />Please, solve them in order to calculate the risk: <ul>" + error_message + "</ul>");
    $('#result').css("background-color", "#FF7777");
  }
  return !error;
}
function calculate_risk(){
  x_age = Number($('#age_value').val());
  x_ami = Number($('#ami_yes').prop('checked'));
  x_progressive = Number($('#progressive_yes').prop('checked'));
  x_polivascular = Number($('#polivascular_yes').prop('checked'));
  x_recent = Number($('#recent_yes').prop('checked'));
  x_diabetes = Number($('#diabetes_yes').prop('checked'));
  x_smoking = Number($('#smoking_yes').prop('checked'));
  x_male = Number($('#sex_male').prop('checked'));
  x_htn = Number($('#htn_yes').prop('checked'));
  x_colldl = Number($('#colldl_value').val());
  x_cv = Number($('#cv_history_yes').prop('checked'));

  if(x_cv == 1){
    y_yes = 0.012 * x_age + 0.335 * x_ami + 0.501 * x_progressive + 0.617 * x_recent + 0.375 * x_polivascular + 0.441 * x_diabetes + 0.445 * x_smoking;
    risk = 100 * (1 - Math.pow(0.911628151, Math.exp(y_yes)));
  }
  if(x_cv == 0){
    y_no = 0.046 * x_age + 0.525 * x_male + 0.576 * x_diabetes + 0.485 * x_htn + 0.657 * x_smoking + 0.0028 * x_colldl;
    risk = 100 * (1 - Math.pow(0.999094171, Math.exp(y_no)));
  }

  return risk;
}

function uncheck_form(){
  $('#age_value').val('');
  $('#colldl_value').val('');

  $('#cv_history_no').prop('checked', false);
  $('#cv_history_yes').prop('checked', false);

  $('#sex_female').prop('checked', false);
  $('#sex_male').prop('checked', false);

  $('#diabetes_no').prop('checked', false);
  $('#diabetes_yes').prop('checked', false);
  $('#htn_no').prop('checked', false);
  $('#htn_yes').prop('checked', false);
  $('#smoking_no').prop('checked', false);
  $('#smoking_yes').prop('checked', false);
  $('#ami_no').prop('checked', false);
  $('#ami_yes').prop('checked', false);
  $('#progressive_no').prop('checked', false);
  $('#progressive_yes').prop('checked', false);
  $('#recent_no').prop('checked', false);
  $('#recent_yes').prop('checked', false);
  $('#polivascular_no').prop('checked', false);
  $('#polivascular_yes').prop('checked', false);

  $('#result').html('');
  $('#panel-result').hide();
  refreshUI();
}

function refreshUI(){
  var state = [];
  state['covariates'] = refresh_covariates();
}
round = function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function iniUI(){
  var tabs = ['covariates'];
  for(var i=0;i<tabs.length;i++){
    $("#l_" + tabs[i]).html(get_text(tabs[i], 'title'));
  }

  translate_labels();
  $('.lang_class a').click(function(){
	LANG=this.id.replace('lang_','');
        console.log(dictio.active);
        dictio.active = LANG;
        console.log(dictio.active);
	translate_labels();
	$('.lang_class').removeClass("current");
	$(this).parent().addClass("current")
	return false});

  $('#calculate_risk').click(function() {
    $('#panel-result').show();
    $('#result').css("background-color", "white");
    all_ok = check_form();
    if(!all_ok){
      console.log("error detected");
      return;
    }
    console.log("calculate risk");
    current_risk = round(calculate_risk(), 1);
    message = 'ASCVD risk at 5 years: <b>' + current_risk + '%</b>.<br />';
    if(Number($('#smoking_yes').prop('checked')) == 1){

    }
    x_smoking = Number($('#smoking_yes').prop('checked'));
    x_cv = Number($('#cv_history_yes').prop('checked'));
    x_colldl = Number($('#colldl_value').val());
    ldl_high = false;
    message = message + "<br/><ul>";
    if(x_cv == 0 & x_colldl > 100){
       ldl_high = true;
       x_colldl = 100;
       new_risk = round(calculate_risk_fixed(x_smoking, x_cv, x_colldl), 1);
       console.log(current_risk);
       console.log(new_risk);
       if( current_risk - new_risk > 0 ){
          current_risk = new_risk;
          message = message + "<li><b>" + current_risk + "%</b> when LDL cholesterol at 100 mg/dL.</li>";
       }
    }
    if(x_smoking == 1){
       x_smoking = 0;
       new_risk = round(calculate_risk_fixed(x_smoking, x_cv, x_colldl), 1);
       console.log(current_risk);
       console.log(new_risk);
       if( current_risk - new_risk > 0 ){
          current_risk = new_risk;
          if(ldl_high){
             message = message + "<li>Additionally, <b>" + current_risk + "%</b> for a non-smoker person.</li>";
          }else{
             message = message + "<li><b>" + current_risk + "%</b> for a non-smoker person.</li>";
          }
       }
    }
    message = message + "</ul>";
    $('#result').html(message);
  });

  $('#clean_button').click(function() {
    console.log("clicked");
    uncheck_form();
  });

  $('#cv_history_yes').change(refreshUI);
  $('#cv_history_no').change(refreshUI);
  $('#panel-result').hide();
  refreshUI();

}

$(document).ready(iniUI);
