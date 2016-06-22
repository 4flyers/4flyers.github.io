
function callOtherProjects(modal_id){
    if(modal_id == 2){
        var imgproj2 = document.createElement("img");
        imgproj2.src = "img/projects/{{ post.imgproj2 }}"
    }
    document.write("Hello World!");
}


// <img src="img/projects/{{ post.imgproj2 }}" class="img-responsive img-centered" alt="{{ post.alt }}">
// <p>{{ post.description2 }}</p>
// <img src="img/projects/{{ post.imgproj3 }}" class="img-responsive img-centered" alt="{{ post.alt }}">
// <p>{{ post.description3 }}</p>