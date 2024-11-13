import { createContext, ReactNode, useState } from "react";

interface IGameContext {
    match: string,
    setMatch: (value: string) => void,
    websocket?: WebSocket,
    setWebSocket: (value: WebSocket) => void,
    questions: IQuestion[],
    setQuestions: (value: IQuestion[]) => void,
    index: number,
    setIndex: (value: number) => void,
}

interface IQuestion {
    _id: string,
    title: string,
    formId: string,
    __v: number
}

const GameContext = createContext({} as IGameContext);

const GameProvider = ({ children }: { children: ReactNode }) => {
    const [match, setMatch] = useState("");
    const [websocket, setWebSocket] = useState<WebSocket | undefined>(undefined);
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [index, setIndex] = useState(0);

    const handleSetMatch = (value: string) => {
        setMatch(value);
    };

    const handleSetWebSocket = (value: WebSocket) => {
        setWebSocket(value);
    };

    const handleSetQuestions = (value: IQuestion[]) => {
        setQuestions(value);
    };

    const handleSetIndex = (value: number) => {
        setIndex(value);
    };

    return (
        <GameContext.Provider
            value={{
                match, setMatch: handleSetMatch,
                websocket, setWebSocket: handleSetWebSocket,
                questions, setQuestions: handleSetQuestions,
                index, setIndex: handleSetIndex
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };
