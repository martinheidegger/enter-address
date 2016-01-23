var $country = $(".country")

function chooseCountry (countryCode) {
}

$country.on('change', function () {
  console.log($country.val())
})

function done(count) {
  if (count === 2) {
    console.log(langs)
  }  
}

var langs = {}
var cnt=0
['ja', 'en'].forEach(function (lang) {
  $.get(lang + '.json', function (data) {
    $.get('areas_' + lang + '.json', function (areas) {
      data.areas = areas;
      done(++cnt)
    })
  })
})

chooseCountry('JA');
