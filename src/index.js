document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //let form = document.getElementById('create-task-form')
  let submit = document.getElementsByTagName('input')[1]
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  })
});
