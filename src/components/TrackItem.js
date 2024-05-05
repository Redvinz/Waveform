import visualizerGif from './icons/visualizerGif.gif';
import { useState } from 'react';
import IconPlayFilled from './icons/IconPlayFilled';
import IconPlaylistAdd from './icons/IconPlaylistAdd';

function TrackItem(track) {
    const [trackHovered, setTrackHovered] = useState(false);
    let widthCount = 0;
    let width;
    if (track.duration) ++widthCount;
    if (track.genre) ++widthCount;
    switch (widthCount) {
        case 2: { width = 'w-3/5'; break; }
        case 1: { width = 'w-4/5'; break; }
        default: width = 'w-full';
    }

    return (
        <div role='dialog' className={`w-full h-full flex items-center justify-between text-left space-x-2 cursor-pointer hover:bg-cyan-700 p-2 -mx-2 rounded-lg ` + (!track.playing || 'border border-cyan-600')}
            onMouseEnter={() => setTrackHovered(true)}
            onMouseLeave={() => setTrackHovered(false)}
        >
            <div className={`h-full flex items-center space-x-3 ` + width}>
                <div className="relative w-fit">
                    {(!track.playing) || <img src={visualizerGif} alt='Play' className='opacity-40 absolute' />}
                    <IconPlayFilled size="25" className={`absolute justify-center items-center h-full w-full p-2 bg-gray-900 opacity-60 ` + (trackHovered && !track.playing && !track.playerComponent ? `flex` : `hidden`)} />
                    <img src={track.cover} alt={track.title} className="size-12" />
                </div>
                <div className="flex-1 flex flex-col truncate font-poppins w-fit">
                    <span className="text-sm truncate tracking-normal">{track.title}</span>
                    <span className="text-sm text-slate-400 truncate">{track.artist}</span>
                </div>
            </div>
            {(!track.genre) || <span className="h-full w-fit flex items-center text-center max-w-24 text-slate-400 line-clamp-2">{track.genre}</span>}
            {(trackHovered) ? <button className='size-10 flex items-center justify-center rounded-full hover:bg-cyan-600'><IconPlaylistAdd size="25" /></button> : (!track.duration) || <span className="h-full w-fit flex items-center text-slate-400">{track.duration}</span>}
        </div>
    )
}

export default TrackItem