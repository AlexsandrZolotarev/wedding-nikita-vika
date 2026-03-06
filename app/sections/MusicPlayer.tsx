const MusicPlayer = () => {
  return (
    <>
      <audio autoPlay loop>
        <source src="/songs/song.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default MusicPlayer;
