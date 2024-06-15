
    document.addEventListener('DOMContentLoaded', function() {
      const audioPlayer = document.getElementById('audioPlayer');
      const playlist = document.querySelector('.playlist');
    
      // Define your local songs here
      const songs = [
        { title: 'indian-classical', src: 'indian-classical-flute-amp-tabla-140472.mp3' },
        { title: 'chill-upbeat', src: 'for-her-chill-upbeat-summel-travel-vlog-and-ig-music-royalty-free-use-202298.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'groovy', src: 'groovy-ambient-funk-201745.mp3' },
        { title: 'flow-211881', src: 'flow-211881.mp3' },
        { title: 'indian-temple', src: 'indian-temple-187922.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'indian-classical', src: 'indian-classical-flute-amp-tabla-140472.mp3' },
        { title: 'chill-upbeat', src: 'for-her-chill-upbeat-summel-travel-vlog-and-ig-music-royalty-free-use-202298.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'groovy', src: 'groovy-ambient-funk-201745.mp3' },
        { title: 'flow-211881', src: 'flow-211881.mp3' },
        { title: 'indian-temple', src: 'indian-temple-187922.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'indian-classical', src: 'indian-classical-flute-amp-tabla-140472.mp3' },
        { title: 'chill-upbeat', src: 'for-her-chill-upbeat-summel-travel-vlog-and-ig-music-royalty-free-use-202298.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'groovy', src: 'groovy-ambient-funk-201745.mp3' },
        { title: 'flow-211881', src: 'flow-211881.mp3' },
        { title: 'indian-temple', src: 'indian-temple-187922.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'indian-classical', src: 'indian-classical-flute-amp-tabla-140472.mp3' },
        { title: 'chill-upbeat', src: 'for-her-chill-upbeat-summel-travel-vlog-and-ig-music-royalty-free-use-202298.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        { title: 'groovy', src: 'groovy-ambient-funk-201745.mp3' },
        { title: 'flow-211881', src: 'flow-211881.mp3' },
        { title: 'indian-temple', src: 'indian-temple-187922.mp3' },
        { title: 'flow', src: 'flow-211881.mp3' },
        // Add more songs as needed
      ];
    
      // Function to create playlist items
      function createPlaylistItem(song) {
        const item = document.createElement('div');
        item.classList.add('bg-#97dcf5-100', 'rounded', 'p-2', 'cursor-pointer', 'hover:bg-#0dcef5-200');
        item.innerHTML = `<p class="text-#12a6dc-800">${song.title}</p>`;
        item.addEventListener('click', () => {
          audioPlayer.src = song.src;
          audioPlayer.play();
        });
        return item;
      }
    
      // Populate playlist
      songs.forEach(song => {
        const playlistItem = createPlaylistItem(song);
        playlist.appendChild(playlistItem);
      });
    });