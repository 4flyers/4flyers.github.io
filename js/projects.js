
function callOtherProjects(){

    document.write("Hello World!");
}


                            {% else %}
                                <p>{{post.post_title_1}}<p>
                                 <img src="img/projectsPi/{{ post.img_1 }}" class="img-responsive img-centered" alt="{{ post.alt }}">   
                                <p>{{post.description_1}}<p>

                                <p>{{post.post_title_2}}<p>
                                 <img src="img/projectsPi/{{ post.img_2 }}" class="img-responsive img-centered" alt="{{ post.alt }}">   
                                <p>{{post.description_2}}<p>

                                <p>{{post.post_title_3}}<p>
                                <img src="img/projectsPi/{{ post.img_3 }}" class="img-responsive img-centered" alt="{{ post.alt }}">   
                                <p>{{post.description_3}}<p>

// <img src="img/projects/{{ post.imgproj2 }}" class="img-responsive img-centered" alt="{{ post.alt }}">
// <p>{{ post.description2 }}</p>
// <img src="img/projects/{{ post.imgproj3 }}" class="img-responsive img-centered" alt="{{ post.alt }}">
// <p>{{ post.description3 }}</p>