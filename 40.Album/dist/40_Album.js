"use strict";
function Make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks;
    }
    return album;
}
const album1 = Make_album('Artist 1', 'Album Title 1');
console.log(album1);
const album2 = Make_album('Artist 2', 'Album Title 2');
console.log(album2);
const album3 = Make_album('Artist 3', 'Album Title 3', 12);
console.log(album3);
