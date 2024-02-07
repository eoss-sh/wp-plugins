class Filter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.cpt-filter-button')
        this.allPostsButton = document.querySelector('.all-posts-button')
        this.events()
    }

    events() {
        this.filterButtons.forEach((button) => {
            button.addEventListener('click', (e) => this.filterPosts(e))
        })
        this.allPostsButton.addEventListener('click', () => this.showAllPosts())
    }

    filterPosts(e) {
        e.preventDefault()
        const button = e.target
        const category = button.dataset.filter

        fetch(`/wp-json/wp/v2/cpt_search?cpt_search_category=${category}`)
            .then((response) => response.json())
            .then((posts) => {
                let postContainer = document.getElementById('post-container')
                postContainer.innerHTML = ''

                posts.forEach((post) => {
                    let postTitle = document.createElement('h4')
                    postTitle.textContent = post.title.rendered
                    postContainer.appendChild(postTitle)
                })
            })
            .catch((error) => console.error('Error:', error))
    }

    showAllPosts() {
        fetch('/wp-json/wp/v2/cpt_search')
            .then((response) => response.json())
            .then((posts) => {
                let postContainer = document.getElementById('post-container')
                postContainer.innerHTML = ''
                posts.forEach((post) => {
                    let postTitle = document.createElement('h4')
                    postTitle.textContent = post.title.rendered
                    postContainer.appendChild(postTitle)
                })
            })
            .catch((error) => console.error('Error:', error))
    }
}

new Filter()
