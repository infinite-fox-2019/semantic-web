$(document).ready(() => {
  $('#homeNav').click(() => {
    $('#aboutPage').hide()
    $('#homePage').show()
  })

  $('#aboutNav').click(() => {
    $('#aboutPage').show()
    $('#homePage').hide()
  })
})