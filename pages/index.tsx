import { ParsedUrlQuery } from "querystring";
import { useEffect, useState, useContext } from "react";
import Card from "../components/Card";
import TextField from '@mui/material/TextField';
import { MyContext } from '../utils/MyContext';

interface Props {
    query: ParsedUrlQuery;
}

export default function Index(props: Props) {

    const [Notes, setNotes] = useState([]);
    const [error, setError] = useState<any>();
    const [Search, SetSearch] = useState('');
    const { Trigger } = useContext(MyContext);

    useEffect(() => {
        fetch(`/api/notes?Search=${Search}`)
            .then((res) => res.json())
            .then(data => {
                setNotes(data.results)
            })
            .catch((error) => setError(error));
    }, [Search, Trigger]);

    function List() {
        const Colors = ['#79C4F2', '#61eb8f', '#b8bdf2', '#d4f2b8', '#b8bdf2', '#f8ddf3', '#8395f9']
        let Index = 0;
        if (Notes.length > 0) {
            return (
                Notes.map((e, i) => {
                    if (Index >= Colors.length) {
                        Index = 0;
                    } else {
                        Index++
                    }
                    return (
                        <Card key={i} RandomColor={Colors[Math.floor(Math.random() * Colors.length)]}>{e}</Card>
                    )
                }))
        } else {
            return <p>Sin información para mostrar.</p>
        }
    }

    return (
        <div id="dashboard">
            <div id="search-bar">
                <TextField
                    autoFocus
                    id="standard-basic"
                    label="Buscar"
                    variant="standard"
                    fullWidth
                    onChange={e => SetSearch(e.target.value)}
                />
            </div>
            <div id="card-list">
                {List()}
            </div>
        </div>
    )
}