function PlaylistItem() {
    return (
        <div className="gap-y-2 w-48 flex flex-col justify-center text-left hover:underline hover:cursor-pointer hover:bg-slate-700 px-3 py-4">
            <div className="size-40 rounded-md grid grid-rows-2 mx-auto grid-cols-2">
                {/* Adjust nalang to 1 if yung laman is less than 4 */}
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" alt="albumName" className="object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="truncate">Playlist Name asd asd asd as</span>
                <span className="truncate text-slate-500">10 tracks</span>
            </div>
        </div>
    )
}

export default PlaylistItem