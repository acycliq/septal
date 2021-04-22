function config() {
    return {
            roi: {"x0": 0, "x1": 7602, "y0": 0, "y1": 5471 },
            imageSize: [262144, 188660],
            tiles: 'https://raw.githubusercontent.com/acycliq/septal/master/dashboard/data/map_tiles/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/septal/contents/dashboard/data/cellData',
            geneData: 'https://api.github.com/repos/acycliq/septal/contents/dashboard/data/geneData',
            cellCoords: 'https://api.github.com/repos/acycliq/septal/contents/dashboard/data/cellCoords',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        }
}

