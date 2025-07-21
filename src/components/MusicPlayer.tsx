
import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export interface MusicPlayerHandle {
  playWithSound: () => void;
}

interface MusicPlayerProps {
  youtubeVideoId?: string;
  autoStart?: boolean;
}

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  ({ youtubeVideoId = "dQw4w9WgXcQ", autoStart = false }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const playerRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      playWithSound: () => {
        if (playerRef.current && isLoaded) {
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      },
    }));

    useEffect(() => {
      const loadPlayer = () => {
        playerRef.current = new (window as any).YT.Player("youtube-player", {
          height: "0",
          width: "0",
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: autoStart ? 1 : 0,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: youtubeVideoId,
            mute: 1, // empieza en mute
          },
          events: {
            onReady: () => setIsLoaded(true),
            onStateChange: (event: any) => {
              const YT = (window as any).YT;
              if (event.data === YT?.PlayerState.PLAYING) setIsPlaying(true);
              if (event.data === YT?.PlayerState.PAUSED) setIsPlaying(false);
            },
          },
        });
      };

      if (!(window as any).YT || !(window as any).YT.Player) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        (window as any).onYouTubeIframeAPIReady = loadPlayer;
      } else {
        loadPlayer();
      }

      return () => playerRef.current?.destroy();
    }, [youtubeVideoId, autoStart]);

    const togglePlayPause = () => {
      if (playerRef.current && isLoaded) {
        if (isPlaying) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.unMute();
          playerRef.current.playVideo();
        }
      }
    };

    return (
      <div className="fixed bottom-6 right-6 z-40">
        <div
          id="youtube-player"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        ></div>
        <button
          onClick={togglePlayPause}
          className="bg-gradient-to-r from-primary to-pink-medium hover:from-coral-dark hover:to-pink-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4 transform hover:scale-110"
          disabled={!isLoaded}
        >
          {isPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
        </button>
      </div>
    );
  }
);

export default MusicPlayer;
