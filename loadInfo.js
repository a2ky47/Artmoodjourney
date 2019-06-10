(function () {
    var auth = firebase.auth();
    var db = firebase.firestore();
    var storageRef = firebase.storage().ref();
    var gallery = document.getElementById("gallery");

    db.collection("users")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var title = doc.data().titlename;
                var time = doc.data().time;

                var userfeedback = doc.data().userfeedback;
                var useranswer = doc.data().useranswer;

                var full = title + userfeedback + useranswer + time;
                //  console.log(full);

                // var signlePerson = document.createElement("div");
                // var info = document.createElement("p");
                // info.innerText = title;// + "  Time " + time;
                // signlePerson.append(info);
                // gallery.append(signlePerson);
                storageRef
                    .child("images/" + full)
                    .getDownloadURL()
                    .then(function (url) {
                        var space = document.createElement("div");
                        var space2 = document.createElement("div");

                        var info = document.createElement("p");
                        var info2 = document.createElement("p");
                        var info3 = document.createElement("p");


                        space.className = "journey";
                        space2.className = "content";
                        info2.className = "time"
                        info3.className = "feedback"

                        // info.className = "first";

                        info.innerText = title;
                        info2.innerText = time;
                        /*info3.innerText = "background color reason:" + userfeedback;*/

                        var img = document.createElement("img");
                        img.src = url;


                        space.append(img);
                        space.append(info);
                        space.append(space2)
                        // space.append(time);
                        space2.append(info2);
                        space2.append(info3);

                        gallery.append(space);
                        //gallery.append(space2);
                        // gallery.append(img);
                    });
            });
        });
})();