import React from 'react';
import { Statistic } from 'semantic-ui-react';

const items = [
    {
        key: 'TotalReaders', label: 'Laboratoires lecteurs', value: 30
    },
    {
        key: 'TotalArticles ', label: 'Articles classés', value: 40
    },
    {
        key: 'TotalThesis', label: 'Thèses présentes', value: 50
    },
    {
        key: 'TotalJournals', label: 'Journaux cités', value: 50
    },
    {
        key: 'TotalMeetings', label: 'Conférences répertoriées', value: 50
    }
];

const Statistics = () => <Statistic.Group items={items} color="blue" size="small" />;

export default Statistics;
