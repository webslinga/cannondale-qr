const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const serial = urlParams.get('serial_number')

let registerUrl = document.getElementById('registerUrl').href

const redirectUrl = new URL(registerUrl)

redirectUrl.searchParams.set('serial_number', serial)

document.getElementById('registerUrl').href = redirectUrl.toString()
