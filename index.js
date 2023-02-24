const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const content = document.getElementById("main-content")

for (let i = 0; i < posts.length; i++) 
{
    content.innerHTML += `
        <section>

            <div class="user-info">
                <img src="${posts[i].avatar}" alt="${posts[i].name}'s avatar" class="user-avatar">
                <div class="user-info-text">
                    <p class="bold-text">${posts[i].name}</p>
                    <p>${posts[i].location}</p>
                </div>
            </div>

            <img src="${posts[i].post}" alt="${posts[i].name}'s post" class="post-img" id="${posts[i].username}-post">

            <div class="post-description">
                <div class="icons">
                    <img src="images/icon-heart.png" alt="heart-icon" class="icon" id="${posts[i].username}-heart-icon">
                    <img src="images/icon-comment.png" alt="comment-icon" class="icon">
                    <img src="images/icon-dm.png" alt="dm-icon" class="icon">
                </div>

                <div>
                    <p><span id="${posts[i].username}-likes-count" class="bold-text">${posts[i].likes}</span> likes</p>
                    <p class="post-caption"><span class="bold-text">${posts[i].username} </span>${posts[i].comment}</p>
                </div>
            </div>

        </section>
        `
}

const vanGoghPost = document.getElementById("vincey1853-post")
const vanGoghLikes = document.getElementById("vincey1853-likes-count")
const vanGoghHeart = document.getElementById("vincey1853-heart-icon")

vanGoghHeart.addEventListener("click", function() {
    posts[0].likes++
    vanGoghLikes.innerText = posts[0].likes
})

vanGoghPost.addEventListener("dblclick", function() {
    posts[0].likes++
    vanGoghLikes.innerText = posts[0].likes
})



const courbetPost = document.getElementById("gus1819-post")
const courbetLikes = document.getElementById("gus1819-likes-count")
const courbetHeart = document.getElementById("gus1819-heart-icon")

courbetPost.addEventListener("dblclick", function() {
    posts[1].likes++
    courbetLikes.innerText = posts[1].likes
})

courbetHeart.addEventListener("click", function() {
    posts[1].likes++
    courbetLikes.innerText = posts[1].likes
})

const ducreuxPost = document.getElementById("jd1735-post")
const ducreuxLikes = document.getElementById("jd1735-likes-count")
const ducreuxHeart = document.getElementById("jd1735-heart-icon")

ducreuxPost.addEventListener("dblclick", function() {
    posts[2].likes++
    ducreuxLikes.innerText = posts[2].likes
})

ducreuxHeart.addEventListener("click", function() {
    posts[2].likes++
    ducreuxLikes.innerText = posts[2].likes
})