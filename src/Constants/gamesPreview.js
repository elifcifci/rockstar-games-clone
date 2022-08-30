import {gamesConstant} from "./games"

export const gamesPreviewConstant = [];

for (let previewCount = 0; previewCount <= 3; previewCount++) {
    gamesPreviewConstant.push(gamesConstant[previewCount])
}