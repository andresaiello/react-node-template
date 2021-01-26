import * as React from 'react';
import { Button } from '@material-ui/core';

export interface MainPanel_Props {
    onSubmit: (query: string) => void;
}

export const MainPanel = ({ onSubmit }: MainPanel_Props) => {
    const [query, setQuery] = React.useState('');
    return (
        <div>
            <div>
                <textarea
                    id="query-input"
                    name="query-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                ></textarea>
            </div>
            <div>
                <Button onClick={() => onSubmit(query)} color="primary">
                    Run!
                </Button>
            </div>
        </div>
    );
};
