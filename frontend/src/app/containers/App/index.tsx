import * as React from 'react';
import { Post } from '../../models';
import { Header, Table, Footer, MainPanel } from '../../components';
import { fetchQuery } from '../../utils';

//@ts-ignore
export interface App_Props {}

export interface App_State {
    result?: Post;
}

export class App extends React.Component<App_Props, App_State> {
    fetchQueryHandler = async (query: string) => {
        const result = await fetchQuery(query);
        this.setState({
            result,
        });
    };

    render() {
        const { result } = this.state ?? [];
        return (
            <div>
                <Header />
                <MainPanel
                    onSubmit={(query) => {
                        this.fetchQueryHandler(query);
                    }}
                />
                {result && <Table result={[result]} />}
                <Footer />
            </div>
        );
    }
}
