$(document).ready(() => {
  $('#home').click(() => {
    $('#aboutPage').hide()
    $('#homePage').show()
  })

  $('#about').click(() => {
    $('#aboutPage').show()
    $('#homePage').hide()
  })
})