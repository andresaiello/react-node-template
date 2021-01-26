import * as React from 'react';
import { Post } from '../../models';

export interface DataRow_Props {
    row: Post;
}

export const DataRow = ({ row }: DataRow_Props) => (
    <tr>
        <td>Title: {row.title}</td>
        <td>Text: {row.text}</td>
        <td>
            <img src={row.image} />
        </td>
    </tr>
);
