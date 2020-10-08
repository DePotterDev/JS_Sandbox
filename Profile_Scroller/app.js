const data = [
    {
        name:'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        name:'Jane Doe',
        age: 25,
        gender: 'female',
        lookingfor: 'female',
        location: 'Chicago CY',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name:'Victoria Doe',
        age: 45,
        gender: 'women',
        lookingfor: 'male',
        location: 'Brooklyn NY',
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
        name:'Carlos Doe',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Maine MA',
        image: 'https://randomuser.me/api/portraits/men/50.jpg'
    },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML =`
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }else{
        // last profile
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next:function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done:false} :
            {done: true}
        }
    };
}