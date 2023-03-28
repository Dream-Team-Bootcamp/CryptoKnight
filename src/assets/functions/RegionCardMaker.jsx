import styles from '../assets/styles/YourComponent.module.css';

const regionOptions = [
    { title: 'US', icon: <Icon.US /> },
    { title: 'Europe', icon: <Icon.Europe /> },
    { title: 'Asia', icon: <Icon.Asia /> },
    { title: 'Africa', icon: <Icon.Africa /> },
    { title: 'Australia', icon: <Icon.Australia /> },
];

const RegionCardMaker = () => {
    return (
    <div className={styles.filterCardsContainer}>
        {regionOptions.map((option) => (
        <div className="regionCard" key={option.title}>
            <div className="regionCardImage">{option.icon}</div>
            <div className="regionCardTitle">{option.title}</div>
        </div>
        ))}
        </div>
    );
};

export default RegionCardMaker;