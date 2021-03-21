const FAVORITE_INSTRUCTOR = process.env.NAME;

function hi() {
  console.log(`Hello ${FAVORITE_INSTRUCTOR}, again!`)
}

setInterval(hi, 1500)
