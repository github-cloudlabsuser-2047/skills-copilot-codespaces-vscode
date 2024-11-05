import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');
    const [reversedSentence, setReversedSentence] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        setMarkdown(input);
        setReversedSentence(reverseSentence(input));
    };

    const reverseSentence = (sentence) => {
        if (!sentence) return '';
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    const extractNamesFromData = (data) => {
        return data.flatMap(array => array.map(obj => obj.name));
    };

    // Example usage:
    const data = [
        [{ name: 'John' }, { name: 'Jane' }],
        [{ name: 'Bob' }]
    ];
    const names = extractNamesFromData(data);
    console.log(names); // Output: ['John', 'Jane', 'Bob']

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px', marginBottom: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <p>{reversedSentence}</p>
            </div>
        </div>
    );
}