// Include in MusicContext
class MusicPlaylistsInterpretor {
  // Must deal with strings because that's how AsyncStorage likes it
  /* Cannot have multiple songs in one playlist
  per replaceSong function (would be too complex)
  */

  /**
   * @returns {string}
   */
  static createPattern(s, x = null) {
    return x 
    ? `s${s}x${x}`
    : `s${s}x`;
  }

  static createPatternDefaultRep(s) {
    return `s${s}x1`;
  }

  static listRepresentation(playlistPattern) {
    return playlistPattern.split("s").slice(1).map((song) => song.split("x"));
  }

  static singleListAsString(list) {
    return MusicPlaylistsInterpretor.createPattern(list[0], list[1]);
  }

  // constructor() {
  //   // one element in playlist = "s12x3s4x1s2x3" === 12th song played 3 times...
  //   this.playlists = [];

  //   // INDECES
  //   this.currentPlaylist = 0;
  //   this.musicStepper = 0;
  //   //
  //   this.currPlaylistLength = 0;
  // }

  // Single Playlist

  /**
   * @returns {string, string, number}
   */
  static nextSongAndRep(playlists, curPlaylist, playlistLength, musStepper) {
    let songId = playlists[curPlaylist].split("s")[musStepper+1].split("x")[0];
    let rep = this.playlists[curPlaylist].split("x")[musStepper+1].split("s")[0];
    let newStep = MusicPlaylistsInterpretor.adjustStepper(musStepper, playlistLength);
    return { songId, rep, newStep };
  }
  /** 
   * @returns {number}
   */
  static adjustStepper(stepper, playlistLength) {
    return stepper + 1 > playlistLength
    ? 0
    : stepper + 1;
  }

  /**
   * @returns {boolean}
   */
  static containsSong(curPlaylist, songId) {
    let searchKey = MusicPlaylistsInterpretor.createPattern(songId);
    return curPlaylist.includes(searchKey);
  }

  /**
   * @returns {string}
   */
  static deleteSong(playlistPattern, trackDet /*, newSongId, newSongRep*/) {
    let songPattern = MusicPlaylistsInterpretor.singleListAsString(trackDet);
    // let newPattern = MusicPlaylistsInterpretor.createPattern(newSongId, newSongRep);
    return playlistPattern.replace(songPattern, "");
  }

  // addSong(playlist, songId, songRep, beforeSongId = null) {
  //   let addSongPattern = MusicPlaylistsInterpretor.createPattern(songId, songRep);
  //   if (beforeSongId === null) {
  //     this.playlists[playlist] += addSongPattern;
  //   } else {
  //     let playlistPattern = this.playlists[playlist];
  //     let searchKey = MusicPlaylistsInterpretor.createPattern(songId, songRep);
  //     let sliceStart = playlistPattern.indexOf(searchKey);
  //     if (sliceStart === -1)
  //       console.error(`Programmer's error: ${searchKey} not found in playlist.`);
  //     this.playlists[playlist] = playlistPattern.slice(0, sliceStart) + addSongPattern + playlistPattern.slice(sliceStart);
  //   }

  //   this.currPlaylistLength++;
  // }

  // get currPlaylistLength() {
  //   return this.currPlaylistLength;
  // }

  // get songs() {
  //   return this
  // }

  // // Playlists
  // setCurrentPlaylist(playlist) {
  //   this.currentPlaylist = playlist;
  // }

  // get currentPlaylist() {
  //   return this.currentPlaylist;
  // }

  // addPlaylist(playlist) {
  //   this.playlists.push(playlist);
  // }


}

export default MusicPlaylistsInterpretor;