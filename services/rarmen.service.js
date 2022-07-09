//     try {
//         return { tiiki: query.tiiki, comHand: "グー", result: "テスト中" };
//     } catch (e) {
//         throw Error("Error while getting Janken");
//     }
// };
export const getrarmen = async (query) => {
    try {
        const tiiki = ["yamaguchi", "houfu", "kudamatsu", "ube"];
        const tiikiIndex = tiiki.indexOf(query.tiiki);
        if (tiikiIndex === -1) return { message: "Invalid tiiki..." };
        const favoriteIndex = Math.floor(Math.random() * 3);
        const resultSheet = [
            ["蘭蘭", "壇", "江戸金"],
            ["ドルフィン", "今里", "まるにぼ"],
            ["紅蘭", "北斗亭", "蘭らん"],
            ["一久", "ラーメン祐三", "麵屋遊膳"],
        ];
        return {
            tiiki: query.tiiki,
            result: resultSheet[tiikiIndex][favoriteIndex],
        };
    } catch (e) {
        throw Error("Error while getting rarmen");
    }
};