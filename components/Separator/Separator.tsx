import './separator.css';
import { SeparatorProps } from '@/types/types';

const Separator = ({containedStyles} : SeparatorProps) => {
    return <div className={`separator ${containedStyles}`}></div>
}

export default Separator;