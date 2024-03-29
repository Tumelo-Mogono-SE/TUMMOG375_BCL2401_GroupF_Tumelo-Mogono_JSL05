// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Clouded", artist: "Brent Faiyaz", genre: "R&B" },
    { title: "Break from Toronto", artist: "PARTYNEXTDOOR", genre: "R&B" },
    { title: "Keep The Family Close", artist: "Drake", genre: "R&B" },
    { title: "Set Fire to the Rain", artist: "Adele", genre: "Pop"},
    { title: "Dance The Night - From Barbie The Album", artist: "Dua Lipa", genre: "Pop" },
    { title: "Back In Black", artist: "AC/DC", genre: "Rock" }
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    return Object.entries(guardians).map(([guardian, preferredGenre]) => {
    let playlist = songs.filter(track => track.genre === preferredGenre);
         
    return { guardian, playlist};
    });
}

let playlists = generatePlaylist(guardians, songs);

const playlistsDiv = document.getElementById('playlists'); 

playlists.forEach(({ guardian, playlist}) => {
    const individualPlaylistDiv = document.createElement('div');
    individualPlaylistDiv.classList.add('playlist');

    const heading = document.createElement('h4');
    heading.textContent = `${guardian}'s Playlist`;
    individualPlaylistDiv.appendChild(heading);

    playlist.forEach(track => {
        const songParagraph = document.createElement('p');
        songParagraph.classList.add('song');

        const songTitleSpan = document.createElement('span');
        songTitleSpan.classList.add('song-title');
        songTitleSpan.textContent = track.title;
        songParagraph.appendChild(songTitleSpan);
        
        songParagraph.innerHTML += ` by ${track.artist}`;
        individualPlaylistDiv.appendChild(songParagraph);
    });

    playlistsDiv.appendChild(individualPlaylistDiv);
})



