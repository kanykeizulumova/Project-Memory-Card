import { React, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import CardImage from './Cardimage';
import { useCharactersStore } from './Store';
import { useGameStore } from './Store';
import { useEffect } from 'react';


const fetchCards = async () => {
    const response = await fetch('/api/public/cards/');
    if (!response.ok) throw new Error('Ошибка сети');
    return response.json();
};

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const Cardlist = () => {
    const [isGameOver, setisGameOver] = useState(false);
    const [currentScore, setcurrentScore] = useState(0);
    const [isGameWon, setisGameWon] = useState(false);

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['cards'],
        queryFn: fetchCards,
    })
    const { cards, setCards, clickedCards, setClickedCards, clearClickedCards } = useCharactersStore()
    const { bestScore, updateBestScore } = useGameStore()


    const resetGame = () => {
        setcurrentScore(0);
        setisGameOver(false);
        setisGameWon(false);
        const randomTen = shuffleArray(data).slice(0, 10);
        setCards(randomTen);
        clearClickedCards()

    }

    const handleShuffle = (code) => {
        if (!clickedCards.includes(code)) {
            const newScore = currentScore + 1;
            setcurrentScore(newScore);
            updateBestScore(newScore);

            if (newScore === 10) {
                setisGameWon(true);
            } else {
                setCards(shuffleArray(cards));
                setClickedCards(code);
            }
        }

        if (clickedCards.includes(code)) {
            setisGameOver(true);

        };

    };



    useEffect(() => {
        if (isSuccess && data && cards.length === 0) {
            const firstTen = data.slice(0, 10);
            setCards(firstTen);
        }
    }, [isSuccess, data, setCards, cards.length])


    if (isLoading) return <div>Загрузка...</div>

    return (
        <div>
            <h2 className="memory-title">Memory Card</h2>
            <div className='score-container'>
                <p className="score-current">Current Score: {currentScore}</p>
                <p className="score-best">Best Score: {bestScore}</p>
            </div>
            <div

                style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
            >

                {cards.map((card) => (
                    <CardImage key={card.code}
                        card={card}
                        role='button'
                        onClick={handleShuffle} />

                ))}

            </div>
            {isGameOver && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>You lose! Your score is {currentScore}</h2>
                        <button onClick={resetGame}>Play again</button>
                    </div>
                </div>
            )}
            {isGameWon && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>You win! Your score is {currentScore}</h2>
                        <button onClick={resetGame}>Play again</button>
                    </div>
                </div>
            )}

        </div>
    );
};


export default Cardlist;
