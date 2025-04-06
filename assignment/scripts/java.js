function Showdog(){
   document.getElementById('dogbutton').style.display = "block";
}

function Show(){
    document.getElementById('funfact').style.display = "block";
 }

 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


 $(document).ready(function() {
   $("#lightGallery").lightGallery();
 });

 $(function () {
   
   $('button').click(validateForm)
}); 


function validateForm() {
   let name = $('#name').val();
   let email = $('#email').val();
   let number = $('#number').val();
   let comment = $('#comment').val();

   if (name == "")
      alert("Name cannot be left empty");
  else if (email == "")
      alert("Email cannot be left empty")
  else if (!number.includes("+356"))
      alert("Must containt +356")
  else if (comment.length <10)
      alert("Must have at least 10 characthers")

}
