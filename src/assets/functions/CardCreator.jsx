import { ChevronUpIcon, FireIcon, TrendingUpIcon, TrendingDownIcon, ExclamationCircleIcon, StarIcon, ClockIcon } from '@heroicons/react/solid';
import styles from '../assets/styles/YourComponent.module.css';

const filterOptions = [
    { title: 'Rising', icon: <Icon.Rising /> },
    { title: 'Hot', icon: <Icon.Hot /> },
    { title: 'Bullish', icon: <Icon.Bullish /> },
    { title: 'Bearish', icon: <Icon.Bearish /> },
    { title: 'Important', icon: <Icon.Important /> },
    { title: 'Saved', icon: <Icon.Saved /> },
    { title: 'New', icon: <Icon.New /> },
];

const FilterCardMaker = () => {
    return (
    <div className={styles.filterCardsContainer}>
        {filterOptions.map((option) => (
        <div className={styles.filterCard} key={option.title}>
            <div className={styles.filterCardImage}>{option.icon}</div>
            <div className={styles.filterCardTitle}>{option.title}</div>
            </div>
        ))}
        </div>
    );
};

export default FilterCardMaker;
