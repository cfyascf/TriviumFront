import { createContext, ReactNode, useContext, useState } from "react";

interface IGameContext {
    match: string,
    setMatch: (value: string) => void,
    form?: IForm,
    setForm: (value: IForm) => void,
    websocket?: WebSocket,
    setWebSocket: (value: WebSocket) => void,
    questions: string[],
    setQuestions: (value: string[]) => void,
    index: number,
    setIndex: (value: number) => void,
}

interface IForm {
    title: string,
    description: string,
    qty_questions: string
}

const GameContext = createContext({} as IGameContext);

const GameProvider = ({ children }: { children: ReactNode }) => {
    const [match, setMatch] = useState("");
    const [websocket, setWebSocket] = useState<WebSocket | undefined>(undefined);
    const [form, setForm] = useState<IForm | undefined>(undefined);
    const [questions, setQuestions] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    const handleSetMatch = (value: string) => {
        setMatch(value);
    };

    const handleSetWebSocket = (value: WebSocket) => {
        setWebSocket(value);
    };

    const handleSetQuestions = (value: string[]) => {
        setQuestions(value);
    };

    const handleSetIndex = (value: number) => {
        setIndex(value);
    };

    const handleSetForm = (form: IForm) => {
        setForm(form);
    }

    return (
        <GameContext.Provider
            value={{
                match, setMatch: handleSetMatch,
                websocket, setWebSocket: handleSetWebSocket,
                form, setForm: handleSetForm,
                questions, setQuestions: handleSetQuestions,
                index, setIndex: handleSetIndex
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };
