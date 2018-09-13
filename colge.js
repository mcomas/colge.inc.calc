var dictio = [];
dictio.active = 'eng';

var lang = [];
var labels_to_translate = ['l_covariates'];

lang['global'] = {'l_main_title': "CV-risk calculator for HF population",
                  'l_calculate_risk': "Calculate risk",
                  'l_clean_button' : "Clean form" };

lang['covariates'] = {'title' : 'Covariates',
                      'l_age' : 'Age (years)',
                      'l_cv_history' : 'CVD history',
                      'l_sex' : 'Sex',
                      'l_sex_female' : 'Woman',
                      'l_sex_male' : 'Man',
                      'l_diabetes' : 'Diabetes',
                      'l_htn' : 'Hypertension',
                      'l_smoking' : 'Current smoker',
                      'l_colldl' : 'LDL cholesterol (mg/dL)',
                      'l_ami' : 'Acute miocardial infarction',
                      'l_progressive' : 'CV progressive',
                      'l_recent' : 'CV recent',
                      'l_polivascular' : 'CV polivascular'};

dictio['eng'] = lang;

function get_text(field, sub){
  return dictio[dictio.active][field][sub];
}

var state = [];
var intervention = [];

translate_labels = function(){
  labs = dictio[dictio.active]
  for(var i in labs){
    if (labs.hasOwnProperty(i)){
      for(var j in labs[i]){
        if (labs[i].hasOwnProperty(j) & j.substring(0, 2) == 'l_'){
          $('#' + j).html(get_text(i, j));
        }
      }
    }
  }
}

function refresh_covariates(){
  if( !$('#cv_history_no').prop('checked') & !$('#cv_history_yes').prop('checked') ){
    $('#sex').hide();
    $('#htn').hide();
    $('#colldl').hide();
    $('#ami').hide();
    $('#progressive').hide();
    $('#recent').hide();
    $('#polivascular').hide();
    return '-1';
  }
  if( $('#cv_history_no').prop('checked') ){
    $('#sex').show();
    $('#htn').show();
    $('#colldl').show();
    $('#ami').hide();
    $('#progressive').hide();
    $('#recent').hide();
    $('#polivascular').hide();
    return '0';
  }
  if( $('#cv_history_yes').prop('checked') ){
    $('#sex').hide();
    $('#htn').hide();
    $('#colldl').hide();
    $('#ami').show();
    $('#progressive').show();
    $('#recent').show();
    $('#polivascular').show();
    return '1';
  }
  $('#sex').show();
  return '-1';
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

  $('#advice').dialog("close");
  $('#cv_risk_three_months').dialog("close");

  $('#result').html('');
  refreshUI();
}

function refreshUI(){
  var state = [];
  state['covariates'] = refresh_covariates();
/*
  console.log("State:", state);
  if( state['smoking'] != '-1' & state['diet'] != '-1' & state['activity'] != '-1' & state['depression'] != '-1' & state['cv_risk'] != '-1'){
    var intervention = health_intervention(state);
    console.log("Intervention:", intervention);
    build_advice(intervention, state)
  }else{
    build_advice_error(state);
  }*/
}

function iniUI(){
  var tabs = ['covariates'];
  for(var i=0;i<tabs.length;i++){
    $("#l_" + tabs[i]).html(get_text(tabs[i], 'title'));
  }

  translate_labels();

  $('#l_calculate_risk').click(function() {
    console.log("calculate risk");
    risk = Math.round(calculate_risk());
    $('#result').html('CV risk at 5 years: ' + risk + '%');
  });

  $('#l_clean_button').click(function() {
    console.log("clicked");
    uncheck_form();
  });

  $('#cv_history_yes').change(refreshUI);
  $('#cv_history_no').change(refreshUI);
  refreshUI();
}

$(document).ready(iniUI);
