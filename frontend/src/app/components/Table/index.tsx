import * as React from 'react';
import { DataRow } from '../DataRow';
import { Post } from '../../models/Post';

export interface Table_Props {
    result: Post[];
}

export const Table = ({ result }: Table_Props) => (
    <section>
        <ul>
            <table>
                {result?.map((row, i) => (
                    <DataRow key={i} row={row} />
                ))}
            </table>
        </ul>
    </section>
);
