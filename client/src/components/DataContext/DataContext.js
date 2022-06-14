import { createContext, useState  } from "react";

export const DataContext = createContext();

export function DataProvider({children}){
    const [date, setDate] = useState();
    const [list, setList] = useState(null);
    const [spend, setSpend] = useState();
    const [modalOn, setModalOn] = useState(false);
    const [income, setIncome] = useState(0);
    const [goal, setGoal] = useState(0);
    const [lastItems, setLastItems] = useState('');
    const [loading, setLoading] = useState(false);

    return(
        <DataContext.Provider
            value={{date, setDate,
                    list, setList,
                    income, setIncome,
                    spend, setSpend,
                    goal, setGoal,
                    lastItems, setLastItems,
                    loading, setLoading,
                    modalOn, setModalOn}}>
                {children}
        </DataContext.Provider>
    )
}

export default DataContext;