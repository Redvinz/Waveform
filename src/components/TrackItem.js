import { useState } from "react";

import visualizerGif from "./icons/visualizerGif.gif";
import IconPlayFilled from "./icons/IconPlayFilled";
import IconHeart from "./icons/IconHeart";
import TrackItemContext from "./TrackItemContext";

function TrackItem({
  accessToken,
  cover,
  artist,
  title,
  type,
  duration,
  liked,
  onLike,
  onClick,
  trackId,
  genre,
  playing,
  playerComponent,
  setLikedTracks,
  onRemove,
  className,
  album,
  id,
  likedid,
}) {
  const [hovered, setHovered] = useState(false);

  let widthCount = 0;
  let width;

  if (duration) ++widthCount;
  if (genre) ++widthCount;

  switch (widthCount) {
    case 2: {
      width = "w-3/5";
      break;
    }
    case 1: {
      width = "w-4/5";
      break;
    }
    default:
      width = "w-full";
  }

  console.log("Is track liked?", liked);

  return (
    <div
      className={
        `w-full h-full flex items-center justify-between text-left space-x-2 cursor-pointer hover:bg-cyan-700 p-2 -mx-2 rounded-lg ` +
        (!playing || "border border-cyan-600") +
        ` ${className}`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <span>{Object.keys(test)[0]}</span> */}
      <div className={`h-full flex items-center space-x-3 ` + width}>
        <div className="relative w-fit">
          {!playing || (
            <img
              src={visualizerGif}
              alt="Play"
              className="opacity-40 absolute"
            />
          )}
          <IconPlayFilled
            size="25"
            className={
              `absolute justify-center items-center h-full w-full p-2 bg-gray-900 opacity-60 ` +
              (hovered && !playing && !playerComponent ? `flex` : `hidden`)
            }
          />
          <img src={cover} alt={title} className="size-12" />
        </div>
        <div className="flex-1 flex flex-col truncate font-poppins w-fit">
          <span className="text-sm truncate tracking-normal">{title}</span>
          <span className="text-sm text-slate-400 truncate">{artist}</span>
        </div>
      </div>
      {!genre || (
        <span className="h-full w-fit flex items-center text-center max-w-24 text-slate-400 line-clamp-2">
          {genre}
        </span>
      )}
      <button
        className="flex items-center justify-center size-10 hover:bg-cyan-700 hover:text-white rounded-full"
        onClick={() => {
          if (liked) {
            onRemove();
          } else {
            onLike();
          }
        }}
      >
        <IconHeart size="25" liked={liked} />
      </button>
      <span className="h-full w-fit flex items-center text-slate-400">
        {duration}
      </span>
      <TrackItemContext trackId={trackId} />
    </div>
  );
}

export default TrackItem;
