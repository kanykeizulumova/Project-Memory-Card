import { create } from 'zustand';

const useGameStore = create((set) => ({
    bestScore: 0,



    updateBestScore: (newScore) =>
        set((state) => ({
            bestScore: newScore > state.bestScore ? newScore : state.bestScore,
        })),


}));


const useCharactersStore = create((set) => ({
    cards: [],

    clickedCards: [],

    setClickedCards: (code) => set((state) => ({
        clickedCards: [...state.clickedCards, code]
    })),
    clearClickedCards: () => set({ clickedCards: [] }),

    setCards: (newCards) => set({ cards: newCards }),
}))

export { useGameStore, useCharactersStore };
