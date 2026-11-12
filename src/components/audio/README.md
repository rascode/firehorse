# Audio

Players and the parts around them: player, play button, waveform, scrubber, toggles, equalizer, playlist, captions, line reel, mixer, level meter, parameters and render stages. `src/js/audio.js` drives them.

Docs: https://firehorse.dev/audio/

## Notes

Generic audio UI: a track player, a seekable bar waveform, a play
button with a progress ring, scrubber, volume, speed, a now-playing
equalizer, playlists, synced captions and a line reel, a multitrack
mixer with channel strips and level meters, DSP-style parameters
and a staged render/progress readout.

Everything reads two custom properties that dist/audio.js keeps up
to date (or that you can set yourself):

```
--p      playback progress, 0–1
--level  live output level, 0–1
```

Without the script, the native <audio controls> inside a player is
shown instead, so playback always works.
