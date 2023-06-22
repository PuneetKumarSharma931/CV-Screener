
let data = [
    {
        name: 'Puneet Sharma',
        age: 19,
        city: 'Delhi',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },

    {
        name: 'Gautam Singh',
        age: 19,
        city: 'Delhi',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/31.jpg'
    },

    {
        name: 'Manav Jain',
        age: 19,
        city: 'Delhi',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },

    {
        name: 'Sweta Shukla',
        age: 19,
        city: 'Delhi',
        language: 'Ruby',
        framework: 'Ruby Standard',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },

    {
        name: 'Isita Jain',
        age: 19,
        city: 'Delhi',
        language: 'python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/women/66.jpg'
    },

    {
        name: 'Yoshita Sharma',
        age: 19,
        city: 'Delhi',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    },
    {
        name: 'Devesh Sharma',
        age: 19,
        city: 'Delhi',
        language: 'python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/men/47.jpg'
    }
];

function cvIterator(profiles) {

    let index = 0;

    return {

        next: function () {

            if (index < profiles.length) {

                return {
                    value: profiles[index++],
                    done: false
                };
            }
            else {

                return {
                    done: true
                };
            }
        }
    };
}

let CV = cvIterator(data);

let next = document.getElementById('next');
nextCV();

next.addEventListener('click', nextCV);

function nextCV() {

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    let candidate = CV.next().value;

    if (candidate != undefined) {

        image.innerHTML = `<img style="border: 4px solid black;" src="${candidate.image}">`;

        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${candidate.name}</li>
        <li class="list-group-item">${candidate.age} Years old</li>
        <li class="list-group-item">Works with ${candidate.language}</li>
        <li class="list-group-item">With the help of ${candidate.framework} framework</li>
        <li class="list-group-item">Currently lives in ${candidate.city}</li>
      </ul>`
    }
    else {

        window.location.reload();
    }

}