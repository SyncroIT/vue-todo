import Words from './Words';
import { Actions } from './Store';
export default function(num) {
    for (let p = 0; p < num; p++) {
        let phrase = '';
        const words = Math.floor(Math.random() * 8) + 2;
        for (let i = 0; i < words; i++) {
            const randomWordIndex = Math.floor(Math.random() * Words.length);
            phrase += Words[randomWordIndex];
            if (i !== words - 1) phrase += ' ';
        }
        Actions.insertElement(phrase);
    }
}