function addUser()
{
      user_name = document.getElementById("user_name").ariaValueMax;
      firebase.database().ref("/").child(user.name).update({
            purpose : "adding user"
      });

      window.location ="kwitter_room.html";
}