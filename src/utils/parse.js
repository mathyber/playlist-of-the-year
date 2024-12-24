export function parseTracksData(data) {
    // Разделяем строки по любым пробелам и пустым строкам, игнорируя их
    const tracks = data.split('\n').filter(line => line.trim() !== ''); // Убираем пустые строки
    const result = [];

    // Проходим по строкам и собираем информацию
    for (let i = 0; i < tracks.length; i += 3) {
        const artist = tracks[i].trim();
        const name = tracks[i + 1].trim();
        const imageLink = tracks[i + 2].trim();

        result.push({
            artist,
            name,
            imageLink
        });
    }

    return result;
}