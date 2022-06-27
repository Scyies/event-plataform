import YouTube, { YouTubeProps } from "react-youtube";

interface YtType {
  yvideoID: string;
}

export function YtVideoIframe(props: YtType) {
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const style: YouTubeProps["style"] = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <YouTube
        videoId={props.yvideoID}
        opts={opts}
        style={style}
      />
    </>
  );
}
