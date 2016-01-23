var $country = $(".country")

function chooseCountry (countryCode) {
}

$country.on('change', function () {
  console.log($country.val())
})

chooseCountry('JA');
